import type { BoardConfig } from './BoardConfig';


export type BoardMoveMakerRecord = {
    pitId: number
    seeds: number
}

export class BoardMoveMaker {
    private readonly board: BoardConfig;
    private readonly captureMovesRecord: BoardMoveMakerRecord[];

    public constructor(board: BoardConfig) {
        this.board = board;
        this.captureMovesRecord = [];
    }

    public getPitSeeds(pitId: number): number {
        return this.board[pitId];
    }

    public setPitSeeds(pitId: number, seeds: number): void {
        this.board[pitId] = seeds;
        this.captureMovesRecord.push({
            pitId: pitId,
            seeds: this.board[pitId],
        });
    }

    public incrementPitSeeds(pitId: number, seeds: number): void {
        this.setPitSeeds(pitId, seeds + this.board[pitId]);
    }

    public getCaptureMovesRecord(): BoardMoveMakerRecord[] {
        return this.captureMovesRecord;
    }
}
