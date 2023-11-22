import type { BoardConfig } from './BoardConfig'
import { PlayerSide, getOppositePlayerSide } from './PlayerSide'
import { StaticBoardAnalyser } from './StaticBoardAnalyser'

export class PlayerMovesDetector {
    private readonly playerSide: PlayerSide

    public constructor(playerSide: PlayerSide) {
        this.playerSide = playerSide
    }

    public isGameOver(boardConfig: BoardConfig): boolean {
        return (
            this.getAvailableMovesForPlayer(boardConfig).length === 0 ||
            this.getAvailableMovesForOpponentPlayer(boardConfig).length === 0
        );
    }

    public checkPartialResultsForPlayer(boardConfig: BoardConfig): number {
        return boardConfig[new StaticBoardAnalyser(boardConfig).getSideStorePocketIndex(this.playerSide)]
    }

    public getAvailableMovesForPlayer(boardConfig: BoardConfig): number[] {
        const staticBoardAnalyser = new StaticBoardAnalyser(boardConfig)
        return boardConfig.reduce((acc, stones, pocketId) => {
            if (
                staticBoardAnalyser.checkPocketOwnership(this.playerSide, pocketId) &&
                !staticBoardAnalyser.isPocketStore(pocketId) &&
                stones > 0
            ) {
                acc.push(pocketId)
            }
            return acc
        }, [] as number[])
    }

    public getAvailableMovesForOpponentPlayer(boardConfig: BoardConfig): number[] {
        const staticBoardAnalyser = new StaticBoardAnalyser(boardConfig)
        return boardConfig.reduce((acc, stones, pocketId) => {
            if (
                staticBoardAnalyser.checkPocketOwnership(getOppositePlayerSide(this.playerSide), pocketId) &&
                !staticBoardAnalyser.isPocketStore(pocketId) &&
                stones > 0
            ) {
                acc.push(pocketId)
            }
            return acc
        }, [] as number[])
    }
}
