import AiWorker from './AiWorker?worker'
import type { SolverWorkerRequest, SolverWorkerResponse } from './AiWorker'
import type { BoardConfig } from '../BoardConfig'
import type { Brain } from '../player/Brain'
import { PlayerType } from '../player/PlayerType'
import type { PlayerSide } from '../player/PlayerSide'
import { AiBrainLevel } from './AiBrainLevel'

export class AiBrain implements Brain {
    private readonly brainLevel: AiBrainLevel
    private readonly aiWorker = new AiWorker()

    type = PlayerType.AI

    public constructor(level: AiBrainLevel) {
        this.brainLevel = level
    }

    public async selectNextMove(playingPlayerSide: PlayerSide, boardConfig: BoardConfig): Promise<number> {
        return new Promise((resolve) => {
            this.aiWorker.onmessage = async (event: MessageEvent<SolverWorkerResponse>) =>
                resolve(event.data.bestPocketIdToPlay[0])
            this.aiWorker.postMessage({
                playingPlayer: playingPlayerSide,
                brainLevel: this.brainLevel,
                boardConfig: JSON.stringify(boardConfig),
            } as SolverWorkerRequest)
        })
    }
}
