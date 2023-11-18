import type { BoardConfig } from "./mancala";
import { Player, PlayerIdentifier } from "./player";

export interface Action {
    player: PlayerIdentifier;
    pocketId: number;
}

export interface ActionResult {
    boardConfig: BoardConfig,
    gameOver: boolean,
    nextTurnPlayer?: PlayerIdentifier,
    winningPlayer?: PlayerIdentifier,
}

export class InvalidAction extends Error {
    constructor(message: string) {
        super(message)
    }
}

export class BoardEngine {
    private readonly boardSize: number;
    private readonly debug: boolean;

    public constructor(boardSize: number, config?: { debug?: boolean }) {
        this.boardSize = boardSize;
        this.debug = config?.debug || false;
    }

    public move(action: Action, boardConfig: BoardConfig): ActionResult {
        if (this.debug) {
            console.log(`Player '${action.player}' selected pocket (${action.pocketId})`)
        }
        const newBoard = [...boardConfig]
        const playingPlayer = new Player(action.player, newBoard.length)

        this.validateAction(playingPlayer, action, newBoard);

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

        const oppositePlayer = new Player(playingPlayer.getOppositePlayerIdentifier(), newBoard.length);
        const gameOver = playingPlayer.getAvailablePlays(newBoard).length === 0 || oppositePlayer.getAvailablePlays(newBoard).length === 0
        if (gameOver) {
            return this.gameOverProcedure(newBoard, playingPlayer, oppositePlayer)
        }

        return { nextTurnPlayer: nextPlayerTurn, boardConfig: newBoard, gameOver: false };
    }

    private validateAction(playingPlayer: Player, action: Action, newBoard: number[]) {
        if (!playingPlayer.checkPocketOwnership(action.pocketId)) {
            throw new InvalidAction(`Player '${action.player}' cannot select an opponent's pocket (${action.pocketId})`);
        }
        if (this.isPocketStore(action.pocketId)) {
            throw new InvalidAction(`Player '${action.player}' cannot select a store (${action.pocketId})`);
        }
        if (newBoard[action.pocketId] === 0) {
            throw new InvalidAction(`Player '${action.player}' cannot select an empty pocket (${action.pocketId})`);
        }
    }

    private gameOverProcedure(board: number[], playingPlayer: Player, oppositePlayer: Player): ActionResult {
        const playingPlayerAvailablePlays = playingPlayer.getAvailablePlays(board);
        const stonesInPlayingPlayerSide = playingPlayerAvailablePlays
            .reduce((acc, item) => acc + board[item], board[playingPlayer.getPlayerStorePocketIndex()]);


        const oppositePlayerAvailablePlays = oppositePlayer.getAvailablePlays(board);
        const stonesInOppositePlayerSide = oppositePlayerAvailablePlays
            .reduce((acc, item) => acc + board[item], board[oppositePlayer.getPlayerStorePocketIndex()]);


        const newBoard = Array
            .from(Array(board.length))
            .map(() => 0);

        newBoard[playingPlayer.getPlayerStorePocketIndex()] = stonesInPlayingPlayerSide;
        newBoard[oppositePlayer.getPlayerStorePocketIndex()] = stonesInOppositePlayerSide;
        let winningPlayer: PlayerIdentifier | undefined; //DRAW
        if (stonesInPlayingPlayerSide > stonesInOppositePlayerSide) {
            winningPlayer = playingPlayer.identifier
        } else if (stonesInPlayingPlayerSide < stonesInOppositePlayerSide) {
            winningPlayer = oppositePlayer.identifier
        }

        return { gameOver: true, winningPlayer: winningPlayer, boardConfig: newBoard }
    }

    private getOppositeSidePocketId(currentPocketId: number): number {
        return (this.boardSize - 2) - currentPocketId;
    }

    private isPocketStore(pocketId: number): boolean {
        return (pocketId === (this.boardSize / 2) - 1 || pocketId === this.boardSize - 1);
    }

}

