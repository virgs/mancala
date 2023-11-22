<template>
    <div class="container-lg text-center" id="boardContainer">
        <img
            src="@/assets/wooden-square-plank.png"
            class="img-fluid w-100"
            alt="wooden-square-plank"
        />
        <span
            v-if="animationRunning && accumulator >= 0"
            :class="accumulatorClass"
            :style="accumulatorStyle"
        >
            <span class="accumulatorNumber number">{{ accumulator }}</span>
        </span>
        <div class="container-fluid px-5 plank-board">
            <div class="row g-2 h-100">
                <div class="col">
                    <Hole
                        :stones="board[6]"
                        :index="6"
                        :playingPlayerSide="playingPlayer?.side"
                        :store="true"
                        :ownerPlayerType="topPlayer.brain.type"
                        @nextActionSelected="nextActionSelected"
                        :side="PlayerSide.TOP"
                    >
                    </Hole>
                </div>
                <div class="col-8">
                    <div class="row g-0 justify-content-center" style="height: 50%">
                        <div v-for="(pocket, index) in topInternalPockets" class="col mx-auto">
                            <Hole
                                :stones="pocket"
                                :index="topInternalPockets.length - 1 - index"
                                :store="false"
                                :ownerPlayerType="topPlayer.brain.type"
                                @nextActionSelected="nextActionSelected"
                                :playingPlayerSide="playingPlayer?.side"
                                :side="PlayerSide.TOP"
                            ></Hole>
                        </div>
                    </div>
                    <div class="row g-0 justify-content-center" style="height: 50%">
                        <div v-for="(pocket, index) in bottomInternalPockets" class="col mx-auto">
                            <Hole
                                :stones="pocket"
                                :index="index + bottomInternalPockets.length + 1"
                                :ownerPlayerType="bottomPlayer.brain.type"
                                :playingPlayerSide="playingPlayer?.side"
                                :store="false"
                                @nextActionSelected="nextActionSelected"
                                :side="PlayerSide.BOTTOM"
                            ></Hole>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <Hole
                        :stones="board[13]"
                        :index="13"
                        :playingPlayerSide="playingPlayer?.side"
                        :store="true"
                        :ownerPlayerType="bottomPlayer.brain.type"
                        @nextActionSelected="nextActionSelected"
                        :side="PlayerSide.BOTTOM"
                    >
                    </Hole>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { createBoard } from '@/engine/BoardConfig'
import { Player } from '@/engine/player/Player'
import { PlayerType } from '@/engine/player/PlayerType'
import Hole from './Hole.vue'
import { MancalaEngine, type MoveRequest, type MoveResult } from '@/engine/MancalaEngine'
import { PlayerSide } from '@/engine/player/PlayerSide'

let engine: MancalaEngine

export default {
    name: 'Mancala',
    props: ['gameSettings'],
    components: {
        Hole,
    },
    emits: ['animationIsRunning', 'aiIsThinking', 'gameOver', 'playingPlayer'],
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
        engine = new MancalaEngine(board, {
            recordMoves: true,
        })

        return {
            accumulator: 0,
            accumulatorColor: '',
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
            this.$emit('aiIsThinking', true)
            const nextMoveIndex = await this.playingPlayer!.selectNextMove(this.board)
            this.$emit('aiIsThinking', false)
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
            this.$emit('animationIsRunning', true)
            this.animationRunning = true
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
            this.$emit('animationIsRunning', false)
            if (actionResult.gameOver) {
                this.$emit('gameOver', actionResult.winningPlayer)
            } else {
                this.playingPlayer = this.getBrainFromSide(actionResult.nextTurnPlayer!)
                this.$emit('playingPlayer', this.playingPlayer)
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

.plank-board {
    position: absolute;
    top: 0;
    left: 10px;
    height: 100%;
}

.accumulator {
    text-shadow: 2px 2px black;
    border-radius: 15%;
    font-weight: bolder;
    display: block;

    border: none;
    padding-top: -10px;

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
@/engine/MancalaEngine@/engine/player/PlayerSide
