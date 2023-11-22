import type { BoardConfig } from './BoardConfig'
import { PlayerMovesAnalyser } from './PlayerMovesAnalyser'
import { StaticBoardAnalyser } from './StaticBoardAnalyser'
import { PlayerSide, getOppositePlayerSide } from './player/PlayerSide'

export interface MoveRequest {
    player: PlayerSide
    pocketId: number
}

export interface MoveResult {
    boardConfig: BoardConfig
    gameOver: boolean
    nextTurnPlayer?: PlayerSide
    winningPlayer?: PlayerSide
    movesRecord?: MoveRecord[]
}

interface GameOverResult {
    boardConfig: BoardConfig
    gameOver: boolean
    gameOverMovesRecord: MoveRecord[]
    winningPlayer?: PlayerSide
}

export class InvalidMove extends Error {
    constructor(message: string) {
        super(message)
    }
}

interface MoveRecord {
    index: number
    newStonesAmouns: number
}

type EngineSettings = {
    recordMoves?: boolean
    gameOverCaptureVariation?: boolean
}

export class MancalaEngine {
    private readonly staticBoardAnalyser: StaticBoardAnalyser
    private readonly engineSettings: Partial<EngineSettings>

    public constructor(board: BoardConfig, settings?: Partial<EngineSettings>) {
        this.staticBoardAnalyser = new StaticBoardAnalyser(board)
        this.engineSettings = settings || {}
    }

    public makeMove(move: MoveRequest, boardConfig: BoardConfig): MoveResult {
        this.validateMove(move, boardConfig)

        const { redistributionMovesRecord, currentPocketId, boardAfterRedistribution } =
            this.redistributeStones(move, boardConfig)

        const playingPlayer = move.player

        const { captureMovesRecord, boardAfterCapture } = this.checkCapture(
            playingPlayer,
            currentPocketId,
            boardAfterRedistribution
        )

        const gameOverResult = this.checkGameOver(playingPlayer, boardAfterCapture)
        if (gameOverResult.gameOver) {
            return {
                winningPlayer: gameOverResult.winningPlayer,
                nextTurnPlayer: playingPlayer, //non-important
                boardConfig: gameOverResult.boardConfig,
                gameOver: true,
                movesRecord: this.engineSettings.recordMoves
                    ? redistributionMovesRecord
                        .concat(captureMovesRecord)
                        .concat(gameOverResult.gameOverMovesRecord)
                    : undefined,
            }
        } else {
            const nextPlayerTurn = this.checkNextPlayerTurn(playingPlayer, currentPocketId)

            return {
                nextTurnPlayer: nextPlayerTurn,
                boardConfig: boardAfterCapture,
                gameOver: false,
                movesRecord: this.engineSettings.recordMoves
                    ? redistributionMovesRecord.concat(captureMovesRecord)
                    : undefined,
            }
        }
    }

    private redistributeStones(move: MoveRequest, board: number[]) {
        const newBoard = [...board]
        let currentPocketId = move.pocketId
        let remainingStones = newBoard[move.pocketId]
        newBoard[currentPocketId] = 0
        const redistributionMovesRecord = [
            {
                index: currentPocketId,
                newStonesAmouns: 0,
            },
        ]

        while (remainingStones > 0) {
            currentPocketId = this.staticBoardAnalyser.getNextPocketId(currentPocketId)
            if (
                this.staticBoardAnalyser.isPocketStore(currentPocketId) &&
                !this.staticBoardAnalyser.checkPocketOwnership(move.player, currentPocketId)
            ) {
                continue
            }
            ++newBoard[currentPocketId]
            redistributionMovesRecord.push({
                index: currentPocketId,
                newStonesAmouns: newBoard[currentPocketId],
            })
            --remainingStones
        }
        return { redistributionMovesRecord, currentPocketId, boardAfterRedistribution: newBoard }
    }

    private checkNextPlayerTurn(playingPlayer: PlayerSide, currentPocketId: number): PlayerSide {
        if (this.staticBoardAnalyser.checkPocketOwnership(playingPlayer, currentPocketId)) {
            if (this.staticBoardAnalyser.isPocketStore(currentPocketId)) {
                return playingPlayer
            }
        }
        return getOppositePlayerSide(playingPlayer)
    }

    private checkCapture(playingPlayer: PlayerSide, currentPocketId: number, board: number[]) {
        const newBoard = [...board]
        const captureMovesRecord = []
        if (this.staticBoardAnalyser.checkPocketOwnership(playingPlayer, currentPocketId)) {
            if (!this.staticBoardAnalyser.isPocketStore(currentPocketId)) {
                if (newBoard[currentPocketId] === 1) {
                    // It was empty
                    const oppositeSitePocketId =
                        this.staticBoardAnalyser.getOppositeSidePocketIndex(currentPocketId)
                    if (newBoard[oppositeSitePocketId] > 0) {
                        const storePocketIndex =
                            this.staticBoardAnalyser.getSideStorePocketIndex(playingPlayer)

                        const capturedOpponentStones = newBoard[oppositeSitePocketId]
                        newBoard[oppositeSitePocketId] = 0
                        captureMovesRecord.push({
                            index: oppositeSitePocketId,
                            newStonesAmouns: 0,
                        })

                        newBoard[storePocketIndex] += capturedOpponentStones
                        captureMovesRecord.push({
                            index: storePocketIndex,
                            newStonesAmouns: newBoard[storePocketIndex],
                        })

                        const capturedPlayerStones = newBoard[currentPocketId]
                        newBoard[currentPocketId] = 0
                        captureMovesRecord.push({
                            index: currentPocketId,
                            newStonesAmouns: 0,
                        })

                        newBoard[storePocketIndex] += capturedPlayerStones
                        captureMovesRecord.push({
                            index: storePocketIndex,
                            newStonesAmouns: newBoard[storePocketIndex],
                        })
                    }
                }
            }
        }
        return {
            captureMovesRecord,
            boardAfterCapture: newBoard,
        }
    }

    private validateMove(move: MoveRequest, newBoard: number[]) {
        if (!this.staticBoardAnalyser.checkPocketOwnership(move.player, move.pocketId)) {
            throw new InvalidMove(
                `Player '${move.player}' cannot select an opponent's pocket (${move.pocketId})`
            )
        }
        if (this.staticBoardAnalyser.isPocketStore(move.pocketId)) {
            throw new InvalidMove(
                `Player '${move.player}' cannot select a store (${move.pocketId})`
            )
        }
        if (newBoard[move.pocketId] === 0) {
            throw new InvalidMove(
                `Player '${move.player}' cannot select an empty pocket (${move.pocketId})`
            )
        }
    }

    private checkGameOver(playingPlayer: PlayerSide, board: number[]): GameOverResult {
        const playerMovesDetector = new PlayerMovesAnalyser(playingPlayer)
        if (
            playerMovesDetector.getAvailableMovesForPlayer(board).length !== 0 &&
            playerMovesDetector.getAvailableMovesForOpponentPlayer(board).length !== 0
        ) {
            return {
                boardConfig: board,
                winningPlayer: undefined,
                gameOverMovesRecord: [],
                gameOver: false,
            }
        }
        const opponentPlayer = getOppositePlayerSide(playingPlayer)
        const playingPlayerStore = this.staticBoardAnalyser.getSideStorePocketIndex(playingPlayer)
        const opponentPlayerStore = this.staticBoardAnalyser.getSideStorePocketIndex(opponentPlayer)

        const gameOverMovesRecord: MoveRecord[] = this.getGameOverMovesRecord(board, playingPlayer)

        let winningPlayer: PlayerSide | undefined //DRAW
        if (board[playingPlayerStore] > board[opponentPlayerStore]) {
            winningPlayer = playingPlayer
        } else if (board[playingPlayerStore] < board[opponentPlayerStore]) {
            winningPlayer = opponentPlayer
        }

        return {
            gameOver: true,
            boardConfig: board,
            gameOverMovesRecord: gameOverMovesRecord,
            winningPlayer: winningPlayer,
        }
    }

    private getGameOverMovesRecord(board: number[], playingPlayer: PlayerSide) {
        const gameOverMovesRecord: MoveRecord[] = []
        if (this.engineSettings.gameOverCaptureVariation) {
            const playingPlayerStore =
                this.staticBoardAnalyser.getSideStorePocketIndex(playingPlayer)
            board.forEach((index) => {
                if (
                    this.staticBoardAnalyser.checkPocketOwnership(playingPlayer, index) &&
                    index !== playingPlayerStore
                ) {
                    gameOverMovesRecord.push({ index: index, newStonesAmouns: 0 })
                    gameOverMovesRecord.push({
                        index: playingPlayerStore,
                        newStonesAmouns: board[playingPlayerStore] + board[index],
                    })
                    board[playingPlayerStore] += board[index]
                    board[index] = 0
                }
            })

            const opponentPlayer = getOppositePlayerSide(playingPlayer)
            const opponentPlayerStore =
                this.staticBoardAnalyser.getSideStorePocketIndex(opponentPlayer)
            board.forEach((index) => {
                if (
                    this.staticBoardAnalyser.checkPocketOwnership(opponentPlayer, index) &&
                    index !== opponentPlayerStore
                ) {
                    gameOverMovesRecord.push({ index: index, newStonesAmouns: 0 })
                    gameOverMovesRecord.push({
                        index: opponentPlayerStore,
                        newStonesAmouns: board[opponentPlayerStore] + board[index],
                    })
                    board[opponentPlayerStore] += board[index]
                    board[index] = 0
                }
            })
        }
        return gameOverMovesRecord
    }
}
