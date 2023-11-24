export enum PlayerType {
    HUMAN,
    AI,
}

export const getPlayerTypes = Object.keys(PlayerType).filter((item) => isNaN(Number(item)))
