export enum PlayerSide {
    TOP = 'TOP',
    BOTTOM = 'BOTTOM',
}

export const getOppositePlayerSide = (player: PlayerSide): PlayerSide => {
    return player === PlayerSide.TOP ? PlayerSide.BOTTOM : PlayerSide.TOP
}
