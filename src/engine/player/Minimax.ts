import type { BoardConfig } from '../BoardConfig'
import { BoardEngine } from '../BoardEngine'
import { DynamicBoardAnalyser } from '../DynamicBoardAnalyser'
import type { PlayerSide } from '../PlayerSide'
import { AiBrainLevel } from './AiBrainLevel'

export class Minimax {
    private readonly maxDepth: number
    private readonly identifier: PlayerSide
    private readonly engine: BoardEngine
    private playsAnalysed: number
    private aborted: boolean

    public constructor(
        aiBainLevel: AiBrainLevel,
        playerSide: PlayerSide,
        board: BoardConfig
    ) {
        this.aborted = false
        this.playsAnalysed = 0
        this.engine = new BoardEngine(board)
        this.identifier = playerSide
        this.maxDepth = 0
        switch (aiBainLevel) {
            case AiBrainLevel.BEGINNER:
                this.maxDepth = 0
                break
            case AiBrainLevel.MEDIUM:
                this.maxDepth = 5
                break
            case AiBrainLevel.HARD:
                this.maxDepth = 9
                break
            case AiBrainLevel.HARDCORE:
                this.maxDepth = 50
                break
        }
    }

    public abort(): void {
        this.aborted = true
    }

    public async selectBestMove(boardConfig: BoardConfig): Promise<number[]> {
        this.playsAnalysed = 0
        console.log('thinking')

        const board = new DynamicBoardAnalyser(boardConfig)
        const availablePlays = board.getAvailablePlaysForPlayer(this.identifier)
        let choosenActionIndex = availablePlays[Math.floor(Math.random() * availablePlays.length)]

        if (availablePlays.length > 1) {
            availablePlays.reduce((bestScoreSoFar, moveIndex) => {
                const result = this.engine.makeMove(
                    { player: this.identifier, pocketId: moveIndex },
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
            this.playsAnalysed
        )

        return [choosenActionIndex]
    }

    //https://www.hackerearth.com/blog/developers/minimax-algorithm-alpha-beta-pruning/
    private evaluate(
        boardConfig: BoardConfig,
        depth: number,
        playingPlayerSide: PlayerSide
    ): number {
        ++this.playsAnalysed
        const board = new DynamicBoardAnalyser(boardConfig)
        const availablePlays = board.getAvailablePlaysForPlayer(playingPlayerSide)

        const gameOver = board.isGameOver()
        // if (this.aborted) {
        //     return -1;
        // }
        if (gameOver) {
            return gameOver === playingPlayerSide ? 100 : -100
        }
        if (depth <= 0 || gameOver === playingPlayerSide || availablePlays.length === 1) {
            return board.checkPartialResultsForPlayer(playingPlayerSide)
        }

        if (playingPlayerSide !== this.identifier) {
            // Minimizing
            const worstValue = availablePlays.reduce((acc, index) => {
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
        } else {
            // if (playingPlayer === this.identifier)  // Maximizing
            const bestValue = availablePlays.reduce((acc, index) => {
                const result = this.engine.makeMove(
                    { player: playingPlayerSide, pocketId: index },
                    boardConfig
                )
                return Math.max(
                    acc,
                    this.evaluate(result.boardConfig, depth - 1, result.nextTurnPlayer)
                )
            }, Infinity)
            return bestValue
        }
    }
}
