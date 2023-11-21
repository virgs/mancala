import AiWorker from '@/engine/AiWorker?worker'
import type { SolverWorkerRequest, SolverWorkerResponse } from './AiWorker'
import type { BoardConfig } from './BoardConfig'
import { PlayerIdentifier } from './PlayerIdentifier'

export enum BrainLevel {
    HUMAN,
    BEGINNER,
    MEDIUM,
    HARD,
    HARDCORE,
}

export class Brain {
    readonly identifier: PlayerIdentifier
    readonly brainLevel: BrainLevel
    private readonly aiWorker = new AiWorker()

    public constructor(level: BrainLevel, playerIdentifier: PlayerIdentifier, boardSize: number) {
        this.identifier = playerIdentifier
        this.brainLevel = level
    }

    public async selectNextMove(boardConfig: BoardConfig): Promise<number> {
        return new Promise((resolve) => {
            this.aiWorker.onmessage = async (event: MessageEvent<SolverWorkerResponse>) =>
                resolve(event.data.bestPocketIdToPlay[0])
            this.aiWorker.postMessage({
                playingPlayer: this.identifier,
                brainLevel: this.brainLevel,
                boardConfig: JSON.stringify(boardConfig),
            } as SolverWorkerRequest)
        })
    }
}
