import type { BoardConfig } from './BoardConfig'
import { BoardMoveMaker } from './BoardMoveMaker'
import { PlayerMovesAnalyser } from './PlayerMovesAnalyser'
import { StaticBoardAnalyser } from './StaticBoardAnalyser'
import { PlayerSide, getOppositePlayerSide } from './player/PlayerSide'

export interface MoveRequest {
    playerSide: PlayerSide
    pitId: number
}

export interface MoveHistory {
    playerSide: PlayerSide
    pitId: number
    capturedSeeds?: number
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

export interface MoveRecord {
    pitId: number
    seeds: number
}

type EngineSettings = {
    recordMoves?: boolean
    gameOverCaptureVariation?: boolean
}

export class MancalaEngine {
    private readonly staticBoardAnalyser: StaticBoardAnalyser
    private readonly engineSettings: Partial<EngineSettings>
    private readonly movesHistory: MoveHistory[]

    public constructor(board: BoardConfig, settings?: Partial<EngineSettings>) {
        this.staticBoardAnalyser = new StaticBoardAnalyser(board)
        this.movesHistory = []
        this.engineSettings = settings || {}
    }

    public makeMove(move: MoveRequest, boardConfig: BoardConfig): MoveResult {
        this.validateMove(move, boardConfig)
        const playingPlayer = move.playerSide
        this.movesHistory.push(move)

        const redistribution = this.redistributeSeeds(move, boardConfig)
        const lastIncrementedPitId = redistribution.getLastIncrementedPitId()
        const capture = this.checkCapture(playingPlayer, lastIncrementedPitId, redistribution.getBoard())

        const gameOverResult = this.checkGameOver(playingPlayer, capture.getBoard())
        if (gameOverResult) {
            return {
                winningPlayer: gameOverResult.winningPlayer,
                nextTurnPlayer: playingPlayer, //non-important
                boardConfig: gameOverResult.boardConfig,
                gameOver: true,
                movesRecord: this.engineSettings.recordMoves
                    ? redistribution
                          .getMovesRecord()
                          .concat(capture.getMovesRecord())
                          .concat(gameOverResult.gameOverMovesRecord)
                    : undefined,
            }
        } else {
            const nextPlayerTurn = this.checkNextPlayerTurn(playingPlayer, lastIncrementedPitId)

            return {
                nextTurnPlayer: nextPlayerTurn,
                boardConfig: capture.getBoard(),
                gameOver: false,
                movesRecord: this.engineSettings.recordMoves
                    ? redistribution.getMovesRecord().concat(capture.getMovesRecord())
                    : undefined,
            }
        }
    }

    private redistributeSeeds(move: MoveRequest, board: number[]): BoardMoveMaker {
        const boardMoveMaker = new BoardMoveMaker(board)
        let currentPitId = move.pitId
        let remainingStones = boardMoveMaker.setPitSeeds(currentPitId, 0)

        while (remainingStones > 0) {
            currentPitId = this.staticBoardAnalyser.getNextPitId(currentPitId)
            if (
                this.staticBoardAnalyser.isPitStore(currentPitId) &&
                !this.staticBoardAnalyser.checkPitOwnership(move.playerSide, currentPitId)
            ) {
                continue
            }
            boardMoveMaker.incrementPitSeeds(currentPitId)
            --remainingStones
        }
        return boardMoveMaker
    }

    public getMovesHistory(): MoveRequest[] {
        return this.movesHistory
    }

    private checkNextPlayerTurn(playingPlayer: PlayerSide, currentPitId: number): PlayerSide {
        if (this.staticBoardAnalyser.checkPitOwnership(playingPlayer, currentPitId)) {
            if (this.staticBoardAnalyser.isPitStore(currentPitId)) {
                return playingPlayer
            }
        }
        return getOppositePlayerSide(playingPlayer)
    }

    private checkCapture(playingPlayer: PlayerSide, currentPitId: number, board: number[]): BoardMoveMaker {
        const boardMoveMaker = new BoardMoveMaker(board)
        if (this.staticBoardAnalyser.checkPitOwnership(playingPlayer, currentPitId)) {
            if (boardMoveMaker.getPitSeeds(currentPitId) === 1) {
                if (!this.staticBoardAnalyser.isPitStore(currentPitId)) {
                    const oppositeSitePitId = this.staticBoardAnalyser.getOppositeSidePitId(currentPitId)
                    const oppositePitSeeds = boardMoveMaker.getPitSeeds(oppositeSitePitId)
                    if (oppositePitSeeds > 0) {
                        this.movesHistory.push({
                            playerSide: playingPlayer,
                            capturedSeeds: oppositePitSeeds,
                            pitId: oppositeSitePitId,
                        })
                        const storePitIndex = this.staticBoardAnalyser.getSideStorePitId(playingPlayer)
                        boardMoveMaker.transferSeeds(oppositeSitePitId, storePitIndex)
                        boardMoveMaker.transferSeeds(currentPitId, storePitIndex)
                    }
                }
            }
        }
        return boardMoveMaker
    }

    private validateMove(move: MoveRequest, board: number[]) {
        if (!this.staticBoardAnalyser.checkPitOwnership(move.playerSide, move.pitId)) {
            throw new Error(`Player '${move.playerSide}' cannot select an opponent's pit (${move.pitId})`)
        }
        if (this.staticBoardAnalyser.isPitStore(move.pitId)) {
            throw new Error(`Player '${move.playerSide}' cannot select a store (${move.pitId})`)
        }
        if (board[move.pitId] === 0) {
            throw new Error(`Player '${move.playerSide}' cannot select an empty pit (${move.pitId})`)
        }
    }

    private checkGameOver(playingPlayer: PlayerSide, board: number[]): GameOverResult | undefined {
        const playerMovesDetector = new PlayerMovesAnalyser(playingPlayer)
        if (
            playerMovesDetector.getAvailableMovesForPlayer(board).length !== 0 &&
            playerMovesDetector.getAvailableMovesForOpponentPlayer(board).length !== 0
        ) {
            return undefined
        }
        const playingPlayerScore = playerMovesDetector.checkPlayerScore(board)
        const opponentPlayerScore = playerMovesDetector.checkOppositePlayerScore(board)
        const gameOverMoves = this.getGameOverMovesRecord(board, playingPlayer)

        let winningPlayer: PlayerSide | undefined //DRAW
        if (playingPlayerScore > opponentPlayerScore) {
            winningPlayer = playingPlayer
        } else if (playingPlayerScore < opponentPlayerScore) {
            winningPlayer = getOppositePlayerSide(playingPlayer)
        }

        return {
            gameOver: true,
            boardConfig: gameOverMoves.getBoard(),
            gameOverMovesRecord: gameOverMoves.getMovesRecord(),
            winningPlayer: winningPlayer,
        }
    }

    private getGameOverMovesRecord(board: number[], playingPlayer: PlayerSide): BoardMoveMaker {
        const boardMoveMaker = new BoardMoveMaker(board)
        if (this.engineSettings.gameOverCaptureVariation) {
            const playingPlayerStore = this.staticBoardAnalyser.getSideStorePitId(playingPlayer)
            board.forEach((pitId) => {
                if (this.staticBoardAnalyser.checkPitOwnership(playingPlayer, pitId) && pitId !== playingPlayerStore) {
                    boardMoveMaker.transferSeeds(pitId, playingPlayerStore)
                }
            })

            const opponentPlayer = getOppositePlayerSide(playingPlayer)
            const opponentPlayerStore = this.staticBoardAnalyser.getSideStorePitId(opponentPlayer)
            board.forEach((pitId) => {
                if (
                    this.staticBoardAnalyser.checkPitOwnership(opponentPlayer, pitId) &&
                    pitId !== opponentPlayerStore
                ) {
                    boardMoveMaker.transferSeeds(pitId, opponentPlayerStore)
                }
            })
        }
        return boardMoveMaker
    }
}
