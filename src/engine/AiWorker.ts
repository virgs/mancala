import type { BrainLevel } from './Brain'
import { Minimax } from './Minimax'
import type { PlayerIdentifier } from './PlayerIdentifier'

export type SolverWorkerRequest = {
    playingPlayer: PlayerIdentifier
    brainLevel: BrainLevel
    boardConfig: string
    abort?: boolean
}

export type SolverWorkerResponse = {
    bestPocketIdToPlay: number[]
    error?: Error
}

let solver: Minimax

self.onmessage = async (event: MessageEvent<SolverWorkerRequest>) => {
    if (event.data.abort) {
        solver.abort()
    } else {
        const request = event.data
        const boardConfig = JSON.parse(request.boardConfig)
        solver = new Minimax(request.brainLevel, request.playingPlayer, boardConfig)
        const bestMove = await solver.selectBestMove(boardConfig)
        self.postMessage({ bestPocketIdToPlay: bestMove })
    }
}
