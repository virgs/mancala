import { BoardPlayer } from "./BoardPlayer";
import type { BoardConfig } from "./Mancala";
import { PlayerIdentifier } from "./PlayerIdentifier";

export enum BrainLevel {
    HUMAN = -1,
    BEGINNER = 0,
    MEDIUM = 5,
    HARD = 10,
    HARDCORE = 20
}

export class Brain {
    readonly identifier: PlayerIdentifier;
    // private readonly depth: BrainLevel;

    public constructor(level: BrainLevel, playerIdentifier: PlayerIdentifier) {
        this.identifier = playerIdentifier;
        // this.depth = level;
    }

    public selectNextMove(board: BoardConfig): number {
        const availablePlays = new BoardPlayer(this.identifier, board.length).getAvailablePlays(board);
        return availablePlays[Math.floor(Math.random() * availablePlays.length)]
    }
}