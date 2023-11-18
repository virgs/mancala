import { BoardPrinter } from "./board-printer";
import type { Player } from "./player";
import { BoardEngine } from "./board-engine";



export type BoardConfig = number[]

export class Mankala {
    // private readonly players: Player[]
    private readonly boardPrinter = new BoardPrinter({showId: false});
    private readonly engine;

    private board: BoardConfig;

    constructor(first: Player, second: Player, boardConfig: BoardConfig) {
        // this.players = [first, second]
        this.board = boardConfig
        // const totalStonesSum = boardConfig
            // .reduce((acc, stones) => acc + stones, 0);
        this.engine = new BoardEngine(boardConfig.length, {debug: true})

        this.boardPrinter.print(this.board);
        console.log(`Next player to play '${first.identifier}'`)

        let result = this.engine.move({ player: first.identifier, pocketId: 5 }, boardConfig);
        this.boardPrinter.print(result.boardConfig)
        console.log(`Next player to play '${result.nextTurnPlayer}'`)
        
        result = this.engine.move({ player: result.nextTurnPlayer, pocketId: 8 }, result.boardConfig);
        this.boardPrinter.print(result.boardConfig)
        console.log(`Next player to play '${result.nextTurnPlayer}'`)
        
        result = this.engine.move({ player: result.nextTurnPlayer, pocketId: 12 }, result.boardConfig);
        this.boardPrinter.print(result.boardConfig)
        console.log(`Next player to play '${result.nextTurnPlayer}'`)
        
        result = this.engine.move({ player: result.nextTurnPlayer, pocketId: 0 }, result.boardConfig);
        this.boardPrinter.print(result.boardConfig)
        console.log(`Next player to play '${result.nextTurnPlayer}'`)
    }
}