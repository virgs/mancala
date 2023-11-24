import type { BoardConfig } from './BoardConfig'

export class BoardPrinter {
    private readonly emptySpaceGap: string
    private readonly showId: boolean

    constructor(config?: { emptySpaceGap?: string; showId?: boolean }) {
        this.emptySpaceGap = config?.emptySpaceGap || '  '
        this.showId = config?.showId || false
    }

    public print(board: BoardConfig): void {
        const topPlayerPits = board.filter((_, index) => index < board.length / 2)
        const topPlayerInternalPits = topPlayerPits.filter((_, index) => index < topPlayerPits.length - 1)
        const bottomPlayerPits = board.filter((_, index) => index >= board.length / 2)
        const bottomPlayerInternalPits = bottomPlayerPits.filter((_, index) => index < bottomPlayerPits.length - 1)

        console.log(
            this.emptySpaceGap +
                topPlayerInternalPits
                    .reverse()
                    .map((stones, index) => this.printPit(stones, board.length - index - 2))
                    .join(this.emptySpaceGap)
        )

        console.log(
            [topPlayerPits[topPlayerPits.length - 1], bottomPlayerPits[bottomPlayerPits.length - 1]]
                .map((seeds, index) => this.printPit(seeds, board.length - (index * board.length) / 2 - 1))
                .join(
                    Array.from(Array(topPlayerInternalPits.length))
                        .map(() => this.emptySpaceGap)
                        .join(this.emptySpaceGap)
                )
        )

        console.log(
            this.emptySpaceGap +
                bottomPlayerInternalPits.map((seeds, index) => this.printPit(seeds, index)).join(this.emptySpaceGap)
        )
    }

    private printPit(seeds: number, id: number): string {
        let text = seeds.toString().padStart(2)
        if (this.showId) {
            text += `(${id})`.padStart(4)
        }
        return text
    }
}
