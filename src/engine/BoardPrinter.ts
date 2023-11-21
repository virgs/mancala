import type { BoardConfig } from "./BoardConfig";

export class BoardPrinter {
    private readonly emptySpaceGap: string
    private readonly showId: boolean

    constructor(config?: { emptySpaceGap?: string; showId?: boolean }) {
        this.emptySpaceGap = config?.emptySpaceGap || '  '
        this.showId = config?.showId || false
    }

    public print(pockets: BoardConfig): void {
        const topPlayerPockets = pockets.filter((_pocket, index) => index < pockets.length / 2)
        const topPlayerInternalPocket = topPlayerPockets.filter(
            (_pocket, index) => index < topPlayerPockets.length - 1
        )
        const bottomPlayerPockets = pockets.filter((_pocket, index) => index >= pockets.length / 2)
        const bottomPlayerInternalPocket = bottomPlayerPockets.filter(
            (_pocket, index) => index < bottomPlayerPockets.length - 1
        )

        console.log(
            this.emptySpaceGap +
            topPlayerInternalPocket
                .reverse()
                .map((stones, index) => this.printHole(stones, pockets.length - index - 2))
                .join(this.emptySpaceGap)
        )

        console.log(
            [
                topPlayerPockets[topPlayerPockets.length - 1],
                bottomPlayerPockets[bottomPlayerPockets.length - 1],
            ]
                .map((stones, index) =>
                    this.printHole(stones, pockets.length - (index * pockets.length) / 2 - 1)
                )
                .join(
                    Array.from(Array(topPlayerInternalPocket.length))
                        .map(() => this.emptySpaceGap)
                        .join(this.emptySpaceGap)
                )
        )

        console.log(
            this.emptySpaceGap +
            bottomPlayerInternalPocket
                .map((stones, index) => this.printHole(stones, index))
                .join(this.emptySpaceGap)
        )
    }

    private printHole(stones: number, id: number): string {
        let text = stones.toString().padStart(2)
        if (this.showId) {
            text += `(${id})`.padStart(4)
        }
        return text
    }
}
