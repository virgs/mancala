import type { BoardConfig } from '../BoardConfig'
import type { Brain } from './Brain'
import { PlayerSide } from './PlayerSide'

export class Player {
    readonly side: PlayerSide
    readonly brain: Brain

    public constructor(side: PlayerSide, brain: Brain) {
        this.side = side
        this.brain = brain
    }

    public async selectNextMove(boardConfig: BoardConfig): Promise<number> {
        return this.brain.selectNextMove(this.side, boardConfig)
    }
}
