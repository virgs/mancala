import type { BoardConfig } from '../BoardConfig'
import { PlayerSide } from '../PlayerSide'
import type { PlayerType } from './PlayerType'

export interface Brain {
    type: PlayerType

    selectNextMove(playingPlayer: PlayerSide, boardConfig: BoardConfig): Promise<number>
}
