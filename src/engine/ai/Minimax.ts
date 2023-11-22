import type { BoardConfig } from '../BoardConfig'
import { PlayerMovesAnalyser } from '../PlayerMovesAnalyser'
import { MancalaEngine } from '../MancalaEngine'
import type { PlayerSide } from '../player/PlayerSide'
import { AiBrainLevel } from './AiBrainLevel'

export class Minimax {
    private readonly maxDepth: number
    private readonly playerSide: PlayerSide
    private readonly engine: MancalaEngine
    private readonly playerMovesAnalyser: PlayerMovesAnalyser
    private movesAnalysed: number
    private aborted: boolean

    public constructor(aiBainLevel: AiBrainLevel, playerSide: PlayerSide, board: BoardConfig) {
        this.aborted = false
        this.movesAnalysed = 0
        this.playerMovesAnalyser = new PlayerMovesAnalyser(playerSide)
        this.engine = new MancalaEngine(board)
        this.playerSide = playerSide
        this.maxDepth = 0
        switch (aiBainLevel) {
            case AiBrainLevel.BEGINNER:
                this.maxDepth = 0
                break
            case AiBrainLevel.MEDIUM:
                this.maxDepth = 1
                break
            case AiBrainLevel.HARD:
                this.maxDepth = 3
                break
            case AiBrainLevel.HARDCORE:
                this.maxDepth = 9
                break
        }
    }

    public abort(): void {
        this.aborted = true
    }

    public async selectBestMove(boardConfig: BoardConfig): Promise<number[]> {
        this.movesAnalysed = 0
        console.log('thinking')

        const availablePlays = this.playerMovesAnalyser.getAvailableMovesForPlayer(boardConfig)
        let choosenActionIndex = availablePlays[availablePlays.length - 1]

        if (availablePlays.length > 1 && this.maxDepth > 0) {
            availablePlays.reduce((bestScoreSoFar, moveIndex) => {
                const result = this.engine.makeMove(
                    { player: this.playerSide, pocketId: moveIndex },
                    boardConfig
                )
                const playScore = this.evaluate(
                    result.boardConfig,
                    this.maxDepth,
                    result.nextTurnPlayer
                )
                if (playScore > bestScoreSoFar) {
                    bestScoreSoFar = playScore
                    choosenActionIndex = moveIndex
                }
                return bestScoreSoFar
            }, -Infinity)
        }

        console.log(
            'done thinking',
            this.maxDepth,
            availablePlays,
            choosenActionIndex,
            this.movesAnalysed
        )

        return [choosenActionIndex]
    }

    //https://www.hackerearth.com/blog/developers/minimax-algorithm-alpha-beta-pruning/
    private evaluate(
        boardConfig: BoardConfig,
        depth: number,
        playingPlayerSide?: PlayerSide
    ): number {
        ++this.movesAnalysed
        const gameOver =
            this.playerMovesAnalyser.getAvailableMovesForPlayer(boardConfig).length === 0 ||
            this.playerMovesAnalyser.getAvailableMovesForOpponentPlayer(boardConfig).length === 0

        if (depth <= 0 || gameOver || playingPlayerSide === undefined) {
            return this.playerMovesAnalyser.checkPlayerScore(boardConfig) -
                this.playerMovesAnalyser.checkOppositePlayerScore(boardConfig)
        }

        if (playingPlayerSide === this.playerSide) {
            // Maximizing
            const availableMoves = this.playerMovesAnalyser.getAvailableMovesForPlayer(boardConfig)

            const bestValue = availableMoves.reduce((acc, index) => {
                const result = this.engine.makeMove(
                    { player: playingPlayerSide, pocketId: index },
                    boardConfig
                )
                return Math.max(
                    acc,
                    this.evaluate(result.boardConfig, depth - 1, result.nextTurnPlayer)
                )
            }, -Infinity)
            return bestValue
        } else {
            // if (playingPlayer === this.identifier)  // Minimizing
            const availableMoves =
                this.playerMovesAnalyser.getAvailableMovesForOpponentPlayer(boardConfig)
            const worstValue = availableMoves.reduce((acc, index) => {
                const result = this.engine.makeMove(
                    { player: playingPlayerSide, pocketId: index },
                    boardConfig
                )
                return Math.min(
                    acc,
                    this.evaluate(result.boardConfig, depth - 1, result.nextTurnPlayer)
                )
            }, Infinity)
            return worstValue
        }
    }
}
