import type { BoardConfig } from "./mancala";
import { Player, PlayerIdentifier } from "./player";

export enum PlayerLevel {
    HUMAN = -1,
    BEGINNER = 0,
    MEDIUM = 5,
    HARD = 10,
    HARDCORE = 20
}

export class AiPlayer extends Player {
    private readonly depth: PlayerLevel;

    public constructor(identifier: PlayerIdentifier, boardLength: number, level: PlayerLevel) {
        super(identifier, boardLength);
        this.depth = level;
    }

    public override selectNextMove(board: BoardConfig): number {
        const availablePlays = this.getAvailablePlays(board);
        return availablePlays[Math.floor(Math.random() * availablePlays.length)]
    }
}