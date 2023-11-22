import type { BoardConfig } from './BoardConfig'
import { PlayerSide } from './player/PlayerSide'

export class StaticBoardAnalyser {
    readonly boardLength: number
    readonly totalStones: number

    public constructor(board: BoardConfig) {
        this.boardLength = board.length
        this.totalStones = board.reduce((acc, stones) => acc + stones, 0)
    }

    public getSideStorePocketIndex(playerSide: PlayerSide): number {
        return playerSide === PlayerSide.TOP ? this.boardLength / 2 - 1 : this.boardLength - 1
    }

    public getOppositeSideStorePocketIndex(playerSide: PlayerSide): number {
        return playerSide !== PlayerSide.TOP ? this.boardLength / 2 - 1 : this.boardLength - 1
    }

    public getOppositeSidePocketIndex(pitId: number): number {
        return this.boardLength - 2 - pitId
    }

    public isPocketStore(pitId: number): boolean {
        return pitId === this.boardLength / 2 - 1 || pitId === this.boardLength - 1
    }

    public checkPocketOwnership(playerSide: PlayerSide, pitId: number): boolean {
        if (playerSide === PlayerSide.TOP && pitId < this.boardLength / 2) {
            return true
        }
        if (playerSide === PlayerSide.BOTTOM && pitId >= this.boardLength / 2) {
            return true
        }
        return false
    }

    public getNextPocketId(currentPocketId: number): number {
        return (currentPocketId + 1) % this.boardLength
    }
}
