import { Minimax } from './Minimax'
import type { AiBrainLevel } from './AiBrainLevel'
import type { PlayerSide } from '../player/PlayerSide'

export type SolverWorkerRequest = {
    playingPlayer: PlayerSide
    brainLevel: AiBrainLevel
    boardConfig: string
}

export type SolverWorkerResponse = {
    bestPocketIdToPlay: number
    error?: Error
}

let solver: Minimax

self.onmessage = async (event: MessageEvent<SolverWorkerRequest>) => {
    const request = event.data
    const boardConfig = JSON.parse(request.boardConfig)
    solver = new Minimax(request.brainLevel, request.playingPlayer, boardConfig)
    const bestMove = await solver.selectBestMove(boardConfig)
    self.postMessage({ bestPocketIdToPlay: bestMove })
}
