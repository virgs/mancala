export enum AiBrainLevel {
    EASY,
    MEDIUM,
    HARD,
}

export const getAiBrainLevels = Object.keys(AiBrainLevel).filter((item) => isNaN(Number(item)))
