export class BoardCreator {
    public create(internalPockets: number, initialStones: number): number[] {
        const pockets: number[] = [];
        let counter = 0;
        Array.from(Array(2).keys())
            .forEach(() => {
                Array.from(Array(internalPockets))
                .forEach(() => {
                    pockets.push(initialStones)
                    // pockets.push(counter++);
                });
                pockets.push(0);
                // pockets.push(counter++);
            });
        return pockets;
    }
}