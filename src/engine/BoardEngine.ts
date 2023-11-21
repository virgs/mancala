import type { BoardConfig } from './BoardConfig'
import { DynamicBoardAnalyser } from './DynamicBoardAnalyser'
import { PlayerSide, getOppositePlayerSide } from './PlayerSide'
import { StaticBoardAnalyser } from './StaticBoardAnalyser'

export interface Action {
  player: PlayerSide
  pocketId: number
}

export interface ActionResult {
  boardConfig: BoardConfig
  gameOver: boolean
  nextTurnPlayer: PlayerSide
  winningPlayer?: PlayerSide
  movesRecord?: MovesRecord[]
}

export class InvalidAction extends Error {
  constructor(message: string) {
    super(message)
  }
}

interface MovesRecord {
  index: number
  newStonesAmouns: number
}

export class BoardEngine {
  private readonly staticBoardAnalyser: StaticBoardAnalyser
  private readonly debug: boolean
  private readonly lastMovesRecord?: MovesRecord[]

  public constructor(board: BoardConfig, config?: { debug?: boolean; recordMoves?: boolean }) {
    this.staticBoardAnalyser = new StaticBoardAnalyser(board)
    this.debug = config?.debug || false
    this.lastMovesRecord = config?.recordMoves ? [] : undefined
  }

  public makeMove(action: Action, boardConfig: BoardConfig): ActionResult {
    this.lastMovesRecord?.splice(0, this.lastMovesRecord.length)
    if (this.debug) {
      console.log(`Player '${action.player}' selected pocket (${action.pocketId})`)
    }
    this.validateAction(action, boardConfig)

    const { currentPocketId, boardAfterRedistribution } = this.redistributeStones(
      action,
      boardConfig
    )

    const { nextPlayerTurn, boardAfterCapture } = this.checkCapture(
      action.player,
      currentPocketId,
      boardAfterRedistribution
    )

    const gameOver = this.checkGameOver(action.player, boardAfterCapture)
    if (gameOver) {
      return gameOver
    } else {
      return {
        nextTurnPlayer: nextPlayerTurn,
        boardConfig: boardAfterCapture,
        gameOver: false,
        movesRecord: this.lastMovesRecord,
      }
    }
  }

  private redistributeStones(action: Action, board: number[]) {
    const newBoard = [...board]
    let currentPocketId = action.pocketId
    let remainingStones = newBoard[action.pocketId]
    newBoard[currentPocketId] = 0
    this.lastMovesRecord?.push({
      index: currentPocketId,
      newStonesAmouns: 0,
    })

    while (remainingStones > 0) {
      currentPocketId = this.staticBoardAnalyser.getNextPocketId(currentPocketId)
      if (
        this.staticBoardAnalyser.isPocketStore(currentPocketId) &&
        !this.staticBoardAnalyser.checkPocketOwnership(action.player, currentPocketId)
      ) {
        continue
      }
      ++newBoard[currentPocketId]
      this.lastMovesRecord?.push({
        index: currentPocketId,
        newStonesAmouns: newBoard[currentPocketId],
      })
      --remainingStones
    }
    return { currentPocketId, boardAfterRedistribution: newBoard }
  }

  private checkCapture(
    playingPlayer: PlayerSide,
    currentPocketId: number,
    board: number[]
  ) {
    const newBoard = [...board]
    let nextPlayerTurn = getOppositePlayerSide(playingPlayer)
    if (this.staticBoardAnalyser.checkPocketOwnership(playingPlayer, currentPocketId)) {
      if (this.staticBoardAnalyser.isPocketStore(currentPocketId)) {
        nextPlayerTurn = playingPlayer
      } else {
        if (newBoard[currentPocketId] === 1) {
          const oppositeSitePocketId =
            this.staticBoardAnalyser.getOppositeSidePocketId(currentPocketId)
          if (this.debug) {
            console.log(
              `Player '${playingPlayer}' move ended on empty pocket (${currentPocketId})\nCapturing pocket (${oppositeSitePocketId}) with ${newBoard[oppositeSitePocketId]} stones`
            )
          }
          const capturedStones = newBoard[oppositeSitePocketId]
          newBoard[oppositeSitePocketId] = 0
          this.lastMovesRecord?.push({
            index: oppositeSitePocketId,
            newStonesAmouns: 0,
          })
          newBoard[currentPocketId] += capturedStones
          this.lastMovesRecord?.push({
            index: currentPocketId,
            newStonesAmouns: newBoard[currentPocketId],
          })
        }
      }
    }
    return {
      nextPlayerTurn,
      boardAfterCapture: newBoard,
    }
  }

  private validateAction(action: Action, newBoard: number[]) {
    if (!this.staticBoardAnalyser.checkPocketOwnership(action.player, action.pocketId)) {
      throw new InvalidAction(
        `Player '${action.player}' cannot select an opponent's pocket (${action.pocketId})`
      )
    }
    if (this.staticBoardAnalyser.isPocketStore(action.pocketId)) {
      throw new InvalidAction(
        `Player '${action.player}' cannot select a store (${action.pocketId})`
      )
    }
    if (newBoard[action.pocketId] === 0) {
      throw new InvalidAction(
        `Player '${action.player}' cannot select an empty pocket (${action.pocketId})`
      )
    }
  }

  private checkGameOver(
    playingPlayer: PlayerSide,
    board: number[]
  ): ActionResult | undefined {
    const dynamicBoardAnalyser = new DynamicBoardAnalyser(board)
    if (!dynamicBoardAnalyser.isGameOver()) {
      return undefined
    }
    const opponentPlayer = getOppositePlayerSide(playingPlayer)

    const playingPlayerStore = this.staticBoardAnalyser.getPlayerStorePocketIndex(playingPlayer)
    const opponentPlayerStore =
      this.staticBoardAnalyser.getPlayerStorePocketIndex(opponentPlayer)

    const playingPlayerAvailablePlays =
      dynamicBoardAnalyser.getAvailablePlaysForPlayer(playingPlayer)
    playingPlayerAvailablePlays.forEach((index) => {
      this.lastMovesRecord?.push({ index: index, newStonesAmouns: 0 })
      this.lastMovesRecord?.push({
        index: playingPlayerStore,
        newStonesAmouns: board[playingPlayerStore] + board[index],
      })
      board[playingPlayerStore] += board[index]
      board[index] = 0
    })

    const opponentPlayerAvailablePlays =
      dynamicBoardAnalyser.getAvailablePlaysForPlayer(opponentPlayer)
    opponentPlayerAvailablePlays.forEach((index) => {
      this.lastMovesRecord?.push({ index: index, newStonesAmouns: 0 })
      this.lastMovesRecord?.push({
        index: opponentPlayerStore,
        newStonesAmouns: board[opponentPlayerStore] + board[index],
      })
      board[opponentPlayerStore] += board[index]
      board[index] = 0
    })

    let winningPlayer: PlayerSide | undefined //DRAW
    if (board[playingPlayerStore] > board[opponentPlayerStore]) {
      winningPlayer = playingPlayer
    } else if (board[playingPlayerStore] < board[opponentPlayerStore]) {
      winningPlayer = opponentPlayer
    }

    return {
      gameOver: true,
      nextTurnPlayer: PlayerSide.BOTTOM, // non-important
      boardConfig: board,
      winningPlayer: winningPlayer,
      movesRecord: this.lastMovesRecord,
    }
  }
}
