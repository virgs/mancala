export enum PlayerIdentifier {
    TOP = 'TOP',
    BOTTOM = 'BOTTOM',
}

export const getOppositePlayer = (player: PlayerIdentifier): PlayerIdentifier => {
    return player === PlayerIdentifier.TOP ? PlayerIdentifier.BOTTOM : PlayerIdentifier.TOP
}
