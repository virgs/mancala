import { BoardPrinter } from "./board-printer";
import type { Player, PlayerIdentifier } from "./player";
import { BoardEngine, type Action, type ActionResult } from "./board-engine";



export type BoardConfig = number[]

export class Mancala {
    private readonly bottomPlayer: Player;
    private readonly topPlayer: Player;
    private readonly boardPrinter = new BoardPrinter({ showId: false });
    private readonly engine;

    private board: BoardConfig;

    constructor(bottomPlayer: Player, topPlayer: Player, boardConfig: BoardConfig) {
        this.bottomPlayer = bottomPlayer;
        this.topPlayer = topPlayer;
        this.board = boardConfig
        this.engine = new BoardEngine(boardConfig.length, { debug: true })
    }

    public update() {
        let playingPlayer = this.bottomPlayer;
        let result: ActionResult;
        do {
            const nextMove = playingPlayer.selectNextMove(this.board);
            const action: Action = {player: playingPlayer.identifier, pocketId: nextMove}
            result = this.engine.move(action, this.board);
            playingPlayer = this.getPlayerFromIdentifier(result.nextTurnPlayer!)
            this.board = [...result.boardConfig];
            this.boardPrinter.print(this.board)
            const resultClone = JSON.parse(JSON.stringify(result))
            delete resultClone.boardConfig
            console.log(resultClone);
        } while (!result.gameOver)
        console.log(`Game is over. Winner: ${result.winningPlayer}`)
    }

    private getPlayerFromIdentifier(identifier: PlayerIdentifier): Player {
        return this.topPlayer.identifier === identifier ? this.topPlayer : this.bottomPlayer;
    }

}