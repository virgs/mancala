<template>
    <div class="container-lg text-center" id="boardContainer">
        <img src="@/assets/wooden-square-plank.png" class="img-fluid w-100" alt="wooden-square-plank" />
        <span v-if="animationRunning && accumulator >= 0" :class="accumulatorClass" :style="accumulatorStyle">
            <span class="accumulatorNumber">{{ accumulator }}</span>
        </span>
        <div class="container-fluid px-5" style="position: absolute; top: 0; left: 0; height: 100%">
            <div class="row g-2 h-100">
                <div class="col">
                    <Hole :stones="board[6]" :index="6" :playingPlayerSide="playingPlayer?.side" :store="true"
                        :ownerPlayerType="topPlayer.brain.type" @nextActionSelected="nextActionSelected"
                        :side="PlayerSide.TOP">
                    </Hole>
                </div>
                <div class="col-8">
                    <div class="row g-0 justify-content-center" style="height: 50%">
                        <div v-for="(pocket, index) in topInternalPockets" class="col mx-auto">
                            <Hole :stones="pocket" :index="topInternalPockets.length - 1 - index" :store="false"
                                :ownerPlayerType="topPlayer.brain.type" @nextActionSelected="nextActionSelected"
                                :playingPlayerSide="playingPlayer?.side" :side="PlayerSide.TOP"></Hole>
                        </div>
                    </div>
                    <div class="row g-0 justify-content-center" style="height: 50%">
                        <div v-for="(pocket, index) in bottomInternalPockets" class="col mx-auto">
                            <Hole :stones="pocket" :index="index + bottomInternalPockets.length + 1"
                                :ownerPlayerType="bottomPlayer.brain.type" :playingPlayerSide="playingPlayer?.side"
                                :store="false" @nextActionSelected="nextActionSelected" :side="PlayerSide.BOTTOM"></Hole>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <Hole :stones="board[13]" :index="13" :playingPlayerSide="playingPlayer?.side" :store="true"
                        :ownerPlayerType="bottomPlayer.brain.type" @nextActionSelected="nextActionSelected"
                        :side="PlayerSide.BOTTOM">
                    </Hole>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { createBoard } from '@/engine/BoardConfig'
import { BoardEngine, type MoveRequest, type MoveResult } from '@/engine/BoardEngine'
import { PlayerSide } from '@/engine/PlayerSide'
import { Player } from '@/engine/player/Player'
import { PlayerType } from '@/engine/player/PlayerType'
import Hole from './Hole.vue'

let engine: BoardEngine

export default {
    name: 'Mancala',
    props: ['gameSettings'],
    components: {
        Hole,
    },
    setup() {
        return {
            PlayerSide,
        }
    },
    data() {
        const board = createBoard(
            this.gameSettings.internalPockets,
            this.gameSettings.initialStones
        )
        engine = new BoardEngine(board, {
            recordMoves: true,
        })

        return {
            accumulator: 0,
            accumulatorColor: '',
            aiIsThinking: false,
            animationRunning: false,
            board: board,
            playingPlayer: this.gameSettings.topPlayer as Player | undefined,
            topPlayer: this.gameSettings.topPlayer as Player,
            bottomPlayer: this.gameSettings.bottomPlayer as Player,
        }
    },
    mounted() {
        if (this.playingPlayer?.brain.type !== PlayerType.HUMAN) {
            this.aiThinkAboutNextMove()
        }
    },
    computed: {
        accumulatorClass() {
            return {
                accumulator: true,
                hole: true,
                'accumulator-hole-showing': this.accumulator >= 0,
            }
        },
        accumulatorStyle() {
            return {
                color: this.accumulatorColor,
                'border-color': this.accumulatorColor,
            }
        },
        topInternalPockets(): number[] {
            return this.board
                .filter((_pockets, index) => index < this.board.length / 2 - 1)
                .reverse()
        },
        bottomInternalPockets(): number[] {
            return this.board.filter(
                (_pockets, index) => index >= this.board.length / 2 && index < this.board.length - 1
            )
        },
    },
    methods: {
        async aiThinkAboutNextMove() {
            this.aiIsThinking = true
            const nextMoveIndex = await this.playingPlayer!.selectNextMove(this.board)
            this.aiIsThinking = false
            console.log('AI has selected move', nextMoveIndex)
            this.updateBoard({
                player: this.playingPlayer!.side,
                pocketId: nextMoveIndex,
            })
        },
        sleep(sleepTime: number) {
            return new Promise<void>((resolve) => setTimeout(() => resolve(), sleepTime))
        },
        nextActionSelected(playerSide: PlayerSide, pocketId: number) {
            if (!this.animationRunning) {
                this.updateBoard({
                    player: playerSide,
                    pocketId: pocketId,
                })
            }
        },
        async updateBoard(nextAction: MoveRequest) {
            switch (nextAction.player) {
                case PlayerSide.TOP:
                    this.accumulatorColor = 'var(--top-player-color)'
                    break
                case PlayerSide.BOTTOM:
                    this.accumulatorColor = 'var(--bottom-player-color)'
                    break
            }
            this.playingPlayer = undefined
            this.accumulator = this.board[nextAction.pocketId]
            this.animationRunning = true
            const result = engine.makeMove(nextAction, this.board)
            const animation = [...result.movesRecord!]
            for (let move of animation) {
                this.board[move.index] = move.newStonesAmouns
                await this.sleep(this.gameSettings.animationSpeedInMs)
                --this.accumulator
            }
            this.finishUpdatingBoard(result)
        },
        finishUpdatingBoard(actionResult: MoveResult) {
            this.animationRunning = false
            if (actionResult.gameOver) {
                if (actionResult.winningPlayer) {
                    console.log('Player ' + actionResult.winningPlayer + ' won')
                } else {
                    console.log('It was a DRAW')
                }
            } else {
                this.playingPlayer = this.getBrainFromSide(actionResult.nextTurnPlayer!)
                console.log(this.playingPlayer.side + ' turn' + ' ' + this.playingPlayer.brain.type)
                if (this.playingPlayer.brain.type !== PlayerType.HUMAN) {
                    this.aiThinkAboutNextMove()
                }
            }
        },
        getBrainFromSide(side: PlayerSide): Player {
            if (this.topPlayer.side === side) {
                return this.topPlayer as Player
            } else {
                return this.bottomPlayer as Player
            }
        },
    },
}
</script>

<style scoped>
.container-lg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.accumulator {
    border: none;
    padding-top: -10px;

    font-family: var(--game-font-family);
    color: var(--hihglighted-number-color);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
    font-size: 2.5rem;
    transition: ease all 500ms;
    height: 20%;
    width: 0;
    background-color: var(--light-wooden-shade);
    box-shadow: inset -7px -7px 0px var(--wooden-half-shade);
}

.accumulatorNumber {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
}

.accumulator-hole-showing {
    width: 10%;
    border-top: 1px solid var(--wooden-half-shade);
    border-left: 1px solid var(--wooden-half-shade);
}
</style>
