import type { BoardConfig } from '../BoardConfig'
import type { Brain } from './Brain'
import { PlayerSide } from '../PlayerSide'
import { PlayerType } from './PlayerType'

export class HumanBrain implements Brain {
    type = PlayerType.HUMAN

    selectNextMove(playingPlayer: PlayerSide, boardConfig: BoardConfig): Promise<number> {
        throw new Error('Human brain should read next move from input')
    }
}
