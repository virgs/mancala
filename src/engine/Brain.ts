import type { BoardConfig } from "./BoardConfig";
import { BoardPlayer } from "./BoardPlayer";
import { PlayerIdentifier } from "./PlayerIdentifier";

export enum BrainLevel {
  HUMAN = -1,
  BEGINNER = 0,
  MEDIUM = 5,
  HARD = 10,
  HARDCORE = 20,
}

export class Brain {
  readonly identifier: PlayerIdentifier;
  readonly brainLevel: BrainLevel;
  // private readonly depth: BrainLevel;

  public constructor(level: BrainLevel, playerIdentifier: PlayerIdentifier) {
    this.identifier = playerIdentifier;
    this.brainLevel = level;
    // this.depth = level;
  }

  public selectNextMove(board: BoardConfig): number {
    console.log('thinking')
    const availablePlays = new BoardPlayer(
      this.identifier,
      board.length,
    ).getAvailablePlays(board);
    return availablePlays[Math.floor(Math.random() * availablePlays.length)];
  }
}
