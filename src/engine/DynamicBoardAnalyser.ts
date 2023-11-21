import type { BoardConfig } from './BoardConfig'
import { PlayerIdentifier } from './PlayerIdentifier'
import { StaticBoardAnalyser } from './StaticBoardAnalyser'

export class DynamicBoardAnalyser {
    private readonly boardConfig: BoardConfig
    private readonly staticBoardAnalyser: StaticBoardAnalyser

    public constructor(board: BoardConfig) {
        this.staticBoardAnalyser = new StaticBoardAnalyser([...board])
        this.boardConfig = [...board]
    }

    public isGameOver(): PlayerIdentifier | undefined {
        if (
            this.getAvailablePlaysForPlayer(PlayerIdentifier.TOP).length > 0 ||
            this.getAvailablePlaysForPlayer(PlayerIdentifier.BOTTOM).length > 0
        ) {
            return undefined
        }
        return this.checkPartialResultsForPlayer(PlayerIdentifier.TOP)
            ? PlayerIdentifier.TOP
            : PlayerIdentifier.BOTTOM
    }

    public checkPartialResultsForPlayer(playerIdentifier: PlayerIdentifier) {
        const topPlayerResult =
            this.boardConfig[
                this.staticBoardAnalyser.getPlayerStorePocketIndex(PlayerIdentifier.TOP)
            ] -
            this.boardConfig[
                this.staticBoardAnalyser.getPlayerStorePocketIndex(PlayerIdentifier.BOTTOM)
            ]
        return playerIdentifier === PlayerIdentifier.TOP ? topPlayerResult : -topPlayerResult
    }

    public getAvailablePlaysForPlayer(playerIdentifier: PlayerIdentifier): number[] {
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
