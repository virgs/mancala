//    5  4  3  2  1  0
// 6                    13
//    7  8  9 10 11 12
export type BoardConfig = number[]

export const createBoard = (internalPockets: number, initialStones: number): BoardConfig => {
    const pockets: number[] = []
    Array.from(Array(2).keys()).forEach(() => {
        Array.from(Array(internalPockets)).forEach(() => {
            pockets.push(initialStones)
        })
        pockets.push(0)
    })
    return pockets
}
