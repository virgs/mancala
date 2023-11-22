import type { BoardConfig } from './BoardConfig'
import { PlayerSide, getOppositePlayerSide } from './player/PlayerSide'
import { StaticBoardAnalyser } from './StaticBoardAnalyser'

export class PlayerMovesAnalyser {
    private readonly playerSide: PlayerSide

    public constructor(playerSide: PlayerSide) {
        this.playerSide = playerSide
    }

    public checkPlayerScore(boardConfig: BoardConfig): number {
        return boardConfig[new StaticBoardAnalyser(boardConfig).getSideStorePitId(this.playerSide)]
    }

    public checkOppositePlayerScore(boardConfig: BoardConfig): number {
        return boardConfig[new StaticBoardAnalyser(boardConfig).getOppositeSideStorePitId(this.playerSide)]
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
