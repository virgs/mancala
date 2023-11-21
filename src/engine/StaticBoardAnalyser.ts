import type { BoardConfig } from './BoardConfig'
import { PlayerIdentifier } from './PlayerIdentifier'

export class StaticBoardAnalyser {
    readonly boardLength: number
    readonly totalStones: number

    public constructor(board: BoardConfig) {
        this.boardLength = board.length
        this.totalStones = board.reduce((acc, stones) => acc + stones, 0)
    }

    public getPlayerStorePocketIndex(playerIdentifier: PlayerIdentifier): number {
        return playerIdentifier === PlayerIdentifier.TOP
            ? this.boardLength / 2 - 1
            : this.boardLength - 1
    }

    public isPocketStore(pocketId: number): boolean {
        return pocketId === this.boardLength / 2 - 1 || pocketId === this.boardLength - 1
    }

    public checkPocketOwnership(identifier: PlayerIdentifier, pocketId: number): boolean {
        if (identifier === PlayerIdentifier.TOP && pocketId < this.boardLength / 2) {
            return true
        }
        if (identifier === PlayerIdentifier.BOTTOM && pocketId >= this.boardLength / 2) {
            return true
        }
        return false
    }

    public getOppositeSidePocketId(currentPocketId: number): number {
        return this.boardLength - 2 - currentPocketId
    }

    public getNextPocketId(currentPocketId: number): number {
        return (currentPocketId + 1) % this.boardLength
    }
}
