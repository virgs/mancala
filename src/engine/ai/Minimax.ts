import type { BoardConfig } from '../BoardConfig'
import { MancalaEngine } from '../MancalaEngine'
import { PlayerMovesAnalyser } from '../PlayerMovesAnalyser'
import { getOppositePlayerSide, type PlayerSide } from '../player/PlayerSide'
import { AiBrainLevel } from './AiBrainLevel'

export class Minimax {
    private readonly maxDepth: number
    private readonly aiBainLevel: AiBrainLevel
    private readonly playerSide: PlayerSide
    private readonly engine: MancalaEngine
    private readonly playerMovesAnalyser: PlayerMovesAnalyser
    private movesAnalysed: number

    public constructor(aiBainLevel: AiBrainLevel, playerSide: PlayerSide, board: BoardConfig) {
        this.aiBainLevel = aiBainLevel
        this.movesAnalysed = 0
        this.playerMovesAnalyser = new PlayerMovesAnalyser(playerSide)
        this.engine = new MancalaEngine(board)
        this.playerSide = playerSide
        this.maxDepth = 0
        switch (aiBainLevel) {
            case AiBrainLevel.EASY:
                this.maxDepth = 0
                break
            case AiBrainLevel.MEDIUM:
                this.maxDepth = 2
                break
            case AiBrainLevel.HARD:
                this.maxDepth = 8
                break
        }
    }

    public async selectBestMove(boardConfig: BoardConfig): Promise<number> {
        this.movesAnalysed = 0

        const availablePlays = this.playerMovesAnalyser.getAvailableMovesForPlayer(boardConfig)
        let choosenActionIndex = availablePlays[availablePlays.length - 1]

        if (availablePlays.length > 1 && this.maxDepth > 0) {
            availablePlays.reduce((bestScoreSoFar, moveIndex) => {
                const result = this.engine.makeMove({ playerSide: this.playerSide, pitId: moveIndex }, boardConfig)
                const playScore = this.evaluate(result.boardConfig, 0, -Infinity, Infinity, result.nextTurnPlayer)
                if (playScore > bestScoreSoFar) {
                    bestScoreSoFar = playScore
                    choosenActionIndex = moveIndex
                }
                return bestScoreSoFar
            }, -Infinity)
        }

        return choosenActionIndex
    }

    //https://www.hackerearth.com/blog/developers/minimax-algorithm-alpha-beta-pruning/
    private evaluate(
        boardConfig: BoardConfig,
        depth: number,
        alphaMax: number,
        betaMin: number,
        playingPlayerSide?: PlayerSide
    ): number {
        ++this.movesAnalysed
        const gameOver =
            this.playerMovesAnalyser.getAvailableMovesForPlayer(boardConfig).length === 0 ||
            this.playerMovesAnalyser.getAvailableMovesForOpponentPlayer(boardConfig).length === 0

        if (depth >= this.maxDepth || gameOver || playingPlayerSide === undefined) {
            return (
                this.playerMovesAnalyser.checkPlayerScore(boardConfig) -
                this.playerMovesAnalyser.checkOppositePlayerScore(boardConfig)
            )
        }

        if (playingPlayerSide === this.playerSide) {
            return this.maximize(boardConfig, depth, alphaMax, betaMin)
        } else {
            return this.minimize(boardConfig, depth, alphaMax, betaMin)
        }
    }

    private maximize(boardConfig: BoardConfig, depth: number, alphaMax: number, betaMin: number): number {
        let maxScore = -Infinity
        const availableMoves = this.playerMovesAnalyser.getAvailableMovesForPlayer(boardConfig)
        for (let moveIndex of availableMoves) {
            const moveMade = this.engine.makeMove({ playerSide: this.playerSide, pitId: moveIndex }, boardConfig)
            const evalScore = this.evaluate(moveMade.boardConfig, depth + 1, alphaMax, betaMin, moveMade.nextTurnPlayer)
            maxScore = Math.max(maxScore, evalScore)
            alphaMax = Math.max(alphaMax, evalScore)
            if (betaMin <= alphaMax) {
                break
            }
        }
        return maxScore
    }

    private minimize(boardConfig: BoardConfig, depth: number, alphaMax: number, betaMin: number): number {
        let minScore = Infinity
        const availableMoves = this.playerMovesAnalyser.getAvailableMovesForOpponentPlayer(boardConfig)
        for (let moveIndex of availableMoves) {
            const moveMade = this.engine.makeMove(
                { playerSide: getOppositePlayerSide(this.playerSide), pitId: moveIndex },
                boardConfig
            )
            const result = this.evaluate(moveMade.boardConfig, depth + 1, alphaMax, betaMin, moveMade.nextTurnPlayer)
            minScore = Math.min(minScore, result)
            betaMin = Math.min(betaMin, result)
            if (betaMin <= alphaMax) {
                break
            }
        }
        return minScore
    }
}
