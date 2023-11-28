import type { Player } from './engine/player/Player'

export interface GameSettings {
    topPlayer: Player
    bottomPlayer: Player
    animationDelay: number
    internalPockets: number
    seeds: number
}
