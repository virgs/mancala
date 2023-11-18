import type { BoardConfig } from "./mankala";

export enum PlayerIdentifier {
    TOP = 'TOP',
    BOTTOM = 'BOTTOM'
}

export class Player {
    readonly identifier: PlayerIdentifier;
    private readonly boardLength: number;

    public constructor(identifier: PlayerIdentifier, boardLength: number) {
        this.identifier = identifier;
        this.boardLength = boardLength;
    }

    public getOppositePlayerIdentifier(): PlayerIdentifier {
        return (this.identifier === PlayerIdentifier.BOTTOM) ? PlayerIdentifier.TOP : PlayerIdentifier.BOTTOM
    }

    public checkPocketOwnership(pocketId: number): boolean {
        if (this.identifier === PlayerIdentifier.TOP && pocketId >= this.boardLength / 2) {
            return true
        }
        if (this.identifier === PlayerIdentifier.BOTTOM && pocketId < this.boardLength / 2) {
            return true;
        }
        return false;
    }

    public checkPlayerInternalPocketsAreEmpty(boardConfig: BoardConfig): boolean {
        return boardConfig
            .filter((_, index) => this.checkPocketOwnership(index))
            .every(pocket => pocket === 0)
    }

    public getPlayerStorePocketIndex(): number {
        return this.identifier === PlayerIdentifier.BOTTOM ? (this.boardLength / 2) - 1 : this.boardLength - 1;
    }

    public getOpponentStorePocketIndex(): number {
        return this.identifier === PlayerIdentifier.TOP ? (this.boardLength / 2) - 1 : this.boardLength - 1;
    }

}
