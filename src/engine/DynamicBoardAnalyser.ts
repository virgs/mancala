import type { BoardConfig } from './BoardConfig'
import { PlayerSide } from './PlayerSide'
import { StaticBoardAnalyser } from './StaticBoardAnalyser'

export class DynamicBoardAnalyser {
    private readonly boardConfig: BoardConfig
    private readonly staticBoardAnalyser: StaticBoardAnalyser

    public constructor(board: BoardConfig) {
        this.staticBoardAnalyser = new StaticBoardAnalyser([...board])
        this.boardConfig = [...board]
    }

    public isGameOver(): PlayerSide | undefined {
        if (
            this.getAvailablePlaysForPlayer(PlayerSide.TOP).length > 0 ||
            this.getAvailablePlaysForPlayer(PlayerSide.BOTTOM).length > 0
        ) {
            return undefined
        }
        return this.checkPartialResultsForPlayer(PlayerSide.TOP)
            ? PlayerSide.TOP
            : PlayerSide.BOTTOM
    }

    public checkPartialResultsForPlayer(playerIdentifier: PlayerSide) {
        const topPlayerResult =
            this.boardConfig[
            this.staticBoardAnalyser.getPlayerStorePocketIndex(PlayerSide.TOP)
            ] -
            this.boardConfig[
            this.staticBoardAnalyser.getPlayerStorePocketIndex(PlayerSide.BOTTOM)
            ]
        return playerIdentifier === PlayerSide.TOP ? topPlayerResult : -topPlayerResult
    }

    public getAvailablePlaysForPlayer(playerIdentifier: PlayerSide): number[] {
        return this.boardConfig.reduce((acc, stones, pocketId) => {
            if (
                this.staticBoardAnalyser.checkPocketOwnership(playerIdentifier, pocketId) &&
                !this.staticBoardAnalyser.isPocketStore(pocketId) &&
                stones > 0
            ) {
                acc.push(pocketId)
            }
            return acc
        }, [] as number[])
    }
}
