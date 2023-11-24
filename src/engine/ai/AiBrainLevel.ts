export enum AiBrainLevel {
    BEGINNER,
    MEDIUM,
    HARD,
    HARDCORE,
}

export const getAiBrainLevels = Object.keys(AiBrainLevel).filter((item) => isNaN(Number(item)))
