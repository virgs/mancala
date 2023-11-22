import type { BoardConfig } from './BoardConfig'
import { PlayerSide } from './PlayerSide'

export class StaticBoardAnalyser {
    readonly boardLength: number
    readonly totalStones: number

    public constructor(board: BoardConfig) {
        this.boardLength = board.length
        this.totalStones = board.reduce((acc, stones) => acc + stones, 0)
    }

    public getSideStorePocketIndex(playerIdentifier: PlayerSide): number {
        return playerIdentifier === PlayerSide.TOP ? this.boardLength / 2 - 1 : this.boardLength - 1
    }

    public getOppositeSideStorePocketIndex(currentPocketId: number): number {
        return this.boardLength - 2 - currentPocketId
    }

    public isPocketStore(pocketId: number): boolean {
        return pocketId === this.boardLength / 2 - 1 || pocketId === this.boardLength - 1
    }

    public checkPocketOwnership(identifier: PlayerSide, pocketId: number): boolean {
        if (identifier === PlayerSide.TOP && pocketId < this.boardLength / 2) {
            return true
        }
        if (identifier === PlayerSide.BOTTOM && pocketId >= this.boardLength / 2) {
            return true
        }
        return false
    }

    public getNextPocketId(currentPocketId: number): number {
        return (currentPocketId + 1) % this.boardLength
    }
}
