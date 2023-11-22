import type { BoardConfig } from './BoardConfig'
import type { MoveRecord } from './MancalaEngine'

export class BoardMoveMaker {
    private readonly board: BoardConfig
    private readonly movesRecord: MoveRecord[]

    public constructor(board: BoardConfig) {
        this.board = [...board]
        this.movesRecord = []
    }

    public getLastIncrementedPitId(): number {
        return this.movesRecord[this.movesRecord.length - 1].pitId
    }

    public getPitSeeds(pitId: number): number {
        return this.board[pitId]
    }

    public setPitSeeds(pitId: number, seeds: number): number {
        const previousSeedsValue = this.board[pitId]
        this.board[pitId] = seeds
        this.movesRecord.push({
            pitId: pitId,
            seeds: this.board[pitId],
        })
        return previousSeedsValue
    }

    public getBoard(): number[] {
        return this.board
    }

    public transferSeeds(fromPitId: number, toPitId: number): void {
        const seeds = this.board[fromPitId]
        this.setPitSeeds(fromPitId, 0)
        this.incrementPitSeeds(toPitId, seeds)
    }

    public incrementPitSeeds(pitId: number, seeds: number = 1): number {
        return this.setPitSeeds(pitId, seeds + this.board[pitId])
    }

    public getMovesRecord(): MoveRecord[] {
        return this.movesRecord
    }
}
