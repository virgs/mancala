import type { BoardConfig } from "./mankala";
import { Player, PlayerIdentifier } from "./player";

export interface Action {
    player: PlayerIdentifier;
    pocketId: number;
}

export interface ActionResult {
    boardConfig: BoardConfig,
    nextTurnPlayer: PlayerIdentifier,
}

export class InvalidAction extends Error {
    constructor(message: string) {
        super(message)
    }
}

export class BoardEngine {
    private readonly boardSize: number;
    private readonly debug: boolean;

    public constructor(boardSize: number, config?: {debug?: boolean}) {
        this.boardSize = boardSize;
        this.debug = config?.debug || false;
    }

    public move(action: Action, boardConfig: BoardConfig): ActionResult {
        if (this.debug) {
            console.log(`Player '${action.player}' selected pocket (${action.pocketId})`)
        }
        const newBoard = [...boardConfig]
        const playingPlayer = new Player(action.player, newBoard.length)

        if (!playingPlayer.checkPocketOwnership(action.pocketId)) {
            throw new InvalidAction(`Player '${action.player}' cannot select an opponent's pocket (${action.pocketId})`);
        }
        if (this.isPocketStore(action.pocketId)) {
            throw new InvalidAction(`Player '${action.player}' cannot select a store (${action.pocketId})`);
        }
        if (newBoard[action.pocketId] === 0) {
            throw new InvalidAction(`Player '${action.player}' cannot select an empty pocket (${action.pocketId})`);
        }

        let currentPocketId = action.pocketId;
        let remainingStones = newBoard[action.pocketId];
        newBoard[currentPocketId] = 0;
        while (remainingStones > 0) {
            currentPocketId = (currentPocketId + 1) % this.boardSize;
            if (this.isPocketStore(currentPocketId) && !playingPlayer.checkPocketOwnership(currentPocketId)) {
                console.log('skip')
                continue;
            }
            ++newBoard[currentPocketId];
            --remainingStones;
        }
        let nextPlayerTurn = playingPlayer.getOppositePlayerIdentifier()
        if (playingPlayer.checkPocketOwnership(currentPocketId)) {
            if (this.isPocketStore(currentPocketId)) {
                nextPlayerTurn = playingPlayer.identifier;
            } else {
                if (newBoard[currentPocketId] === 1) {
                    const oppositeSitePocketId = this.getOppositeSidePocketId(currentPocketId);
                    if (this.debug) {
                        console.log(`Player '${action.player}' move ended on empty pocket (${currentPocketId})\nCapturing pocket (${oppositeSitePocketId}) with ${newBoard[oppositeSitePocketId]} stones`)
                    }
                    const capturedStones = newBoard[oppositeSitePocketId];
                    newBoard[currentPocketId] += capturedStones;
                    newBoard[oppositeSitePocketId] = 0;
                }
            }
        }
        return { nextTurnPlayer: nextPlayerTurn, boardConfig: newBoard };
    }

    private checkGameOver(playerIdentifier: PlayerIdentifier, newBoard: number[]): number | undefined {
        let player = new Player(playerIdentifier, this.boardSize);
        if (player.checkPlayerInternalPocketsAreEmpty(newBoard)) {
            return newBoard[player.getPlayerStorePocketIndex()]
            // newBoard = Array.from(Array(this.boardSize))
            //     .map(() => 0);
            // newBoard[player.getPlayerStorePocketIndex()] = stonesInPlayerPocket;
            // newBoard[player.getOpponentStorePocketIndex()] = this.totalStones - stonesInPlayerPocket;
            // return stonesInPlayerPocket > this.totalStones - stonesInPlayerPocket ? player.identifier : player.getOppositePlayerIdentifier()
        }
        return undefined;
    }

    private getOppositeSidePocketId(currentPocketId: number): number {
        return (this.boardSize -2) - currentPocketId;
    }

    private isPocketStore(pocketId: number): boolean {
        return (pocketId === (this.boardSize / 2) - 1 || pocketId === this.boardSize - 1);
    }

}

