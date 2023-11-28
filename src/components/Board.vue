<template>
    <div class="container-lg text-center" id="boardContainer">
        <img :src="woodenPlank" class="img-fluid w-100" alt="wooden-square-plank" />
        <span v-if="animationRunning && accumulator >= 0" :class="accumulatorClass" :style="accumulatorStyle">
            <span class="accumulatorNumber number">{{ accumulator }}</span>
        </span>
        <div v-if="aiIsThinking" class="spinner-border" :style="spinningStyle" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div class="container-fluid plank-board p-0">
            <div class="row g-2 h-100 mx-5 pl-3" style="position: relative; left: 1.125rem">
                <div class="col">
                    <Pit
                        :seeds="board[topSideStorePit]"
                        :index="topSideStorePit"
                        :playingPlayerSide="playingPlayer?.side"
                        :store="true"
                        :ownerPlayerType="settings?.topPlayer?.brain.type"
                        @nextActionSelected="nextActionSelected"
                        :side="PlayerSide.TOP"
                    >
                    </Pit>
                </div>
                <div class="col-8">
                    <div class="row g-0 justify-content-center" style="height: 50%">
                        <div v-for="(pit, index) in topInternalPockets" class="col mx-auto">
                            <Pit
                                :seeds="pit"
                                :index="topInternalPockets.length - 1 - index"
                                :store="false"
                                :lastSelectedPitId="lastSelectedPitId"
                                :ownerPlayerType="settings?.topPlayer?.brain.type"
                                @nextActionSelected="nextActionSelected"
                                :playingPlayerSide="playingPlayer?.side"
                                :side="PlayerSide.TOP"
                            ></Pit>
                        </div>
                    </div>
                    <div class="row g-0 justify-content-center" style="height: 50%">
                        <div v-for="(pit, index) in bottomInternalPockets" class="col mx-auto">
                            <Pit
                                :seeds="pit"
                                :index="index + bottomInternalPockets.length + 1"
                                :lastSelectedPitId="lastSelectedPitId"
                                :ownerPlayerType="settings?.bottomPlayer?.brain.type"
                                :playingPlayerSide="playingPlayer?.side"
                                :store="false"
                                @nextActionSelected="nextActionSelected"
                                :side="PlayerSide.BOTTOM"
                            ></Pit>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <Pit
                        :seeds="board[bottomSideStorePit]"
                        :index="bottomSideStorePit"
                        :playingPlayerSide="playingPlayer?.side"
                        :store="true"
                        :ownerPlayerType="settings?.bottomPlayer?.brain.type"
                        @nextActionSelected="nextActionSelected"
                        :side="PlayerSide.BOTTOM"
                    >
                    </Pit>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { createBoard, type BoardConfig } from '@/engine/BoardConfig'
import { MancalaEngine, type EndGameResult, type MoveRequest, type MoveResult } from '@/engine/MancalaEngine'
import { StaticBoardAnalyser } from '@/engine/StaticBoardAnalyser'
import type { GameSettings } from '@/GameSettings'
import { Player } from '@/engine/player/Player'
import { PlayerSide } from '@/engine/player/PlayerSide'
import { PlayerType } from '@/engine/player/PlayerType'
import Pit from './Pit.vue'
import type { PropType } from 'vue'

import woodenPlank from '@/assets/wooden-square-plank.png'

let engine: MancalaEngine

export default {
    name: 'Board',
    props: {
        settings: Object as PropType<GameSettings>,
        gameIsRunning: Boolean,
    },
    components: {
        Pit,
    },
    emits: ['animationIsRunning', 'gameOver', 'playingPlayerChanged'],
    setup() {
        return {
            PlayerSide,
        }
    },
    data() {
        return {
            aiIsThinking: false,
            accumulator: 0,
            accumulatorColor: '',
            lastSelectedPitId: undefined as undefined | number,
            animationRunning: false,
            board: createBoard(6, 4) as BoardConfig,
            playingPlayer: undefined as Player | undefined,
            woodenPlank: woodenPlank,
        }
    },
    watch: {
        settings() {
            if (this.settings) {
                if (!this.gameIsRunning) {
                    this.board = createBoard(this.settings.internalPockets, this.settings.seeds)
                }
            }
        },
        gameIsRunning() {
            if (this.gameIsRunning && this.settings) {
                this.playingPlayer = this.settings?.topPlayer
                this.board = createBoard(this.settings.internalPockets, this.settings.seeds)
                engine = new MancalaEngine(this.board, {
                    recordMoves: true,
                })

                if (this.playingPlayer?.brain.type !== PlayerType.HUMAN) {
                    this.aiThinkAboutNextMove()
                }
            } else {
                this.lastSelectedPitId = undefined
                this.animationRunning = false
                this.accumulator = 0
                this.playingPlayer = undefined
            }
        },
    },
    computed: {
        bottomSideStorePit() {
            return new StaticBoardAnalyser(this.board).getSideStorePitId(PlayerSide.BOTTOM)
        },
        topSideStorePit() {
            return new StaticBoardAnalyser(this.board).getSideStorePitId(PlayerSide.TOP)
        },
        spinningStyle() {
            return {
                color:
                    this.playingPlayer?.side === PlayerSide.TOP
                        ? 'var(--top-player-color)'
                        : 'var(--bottom-player-color)',
            }
        },
        accumulatorClass() {
            return {
                'd-block': true,
                number: true,
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
            return this.board.filter((_pockets, index) => index < this.board.length / 2 - 1).reverse()
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
            this.updateBoard({
                playerSide: this.playingPlayer!.side,
                pitId: nextMoveIndex,
            })
        },
        sleep(sleepTime: number) {
            return new Promise<void>((resolve) => setTimeout(() => resolve(), sleepTime))
        },
        nextActionSelected(playerSide: PlayerSide, pocketId: number) {
            if (!this.animationRunning) {
                this.updateBoard({
                    playerSide: playerSide,
                    pitId: pocketId,
                })
            }
        },
        updateAnimationColor(playerSide: PlayerSide) {
            switch (playerSide) {
                case PlayerSide.TOP:
                    this.accumulatorColor = 'var(--top-player-color)'
                    break
                case PlayerSide.BOTTOM:
                    this.accumulatorColor = 'var(--bottom-player-color)'
                    break
            }
        },
        async updateBoard(nextAction: MoveRequest) {
            this.$emit('animationIsRunning', true)
            this.lastSelectedPitId = nextAction.pitId
            this.updateAnimationColor(nextAction.playerSide)
            this.animationRunning = true
            this.playingPlayer = undefined
            this.accumulator = this.board[nextAction.pitId]
            const result = engine.makeMove(nextAction, this.board)
            const animation = [...result.movesRecord!]
            for (let move of animation) {
                if (!this.gameIsRunning) {
                    return
                }
                this.board[move.pitId] = move.seeds
                await this.sleep(this.settings?.animationDelay || 100)
                --this.accumulator
            }
            this.finishUpdatingBoard(result)
        },
        finishUpdatingBoard(actionResult: MoveResult) {
            this.animationRunning = false
            this.$emit('animationIsRunning', false)
            if (actionResult.gameOver) {
                this.$emit('gameOver', {
                    winningPlayer: actionResult.winningPlayer,
                    movesHistory: engine.getMovesHistory(),
                    board: this.board,
                } as EndGameResult)
            } else {
                this.playingPlayer = this.getBrainFromSide(actionResult.nextTurnPlayer!)
                this.$emit('playingPlayerChanged', this.playingPlayer)
                if (this.playingPlayer.brain.type !== PlayerType.HUMAN) {
                    this.aiThinkAboutNextMove()
                }
            }
        },
        getBrainFromSide(side: PlayerSide): Player {
            if (this.settings?.topPlayer.side === side) {
                return this.settings?.topPlayer as Player
            } else {
                return this.settings?.bottomPlayer as Player
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

.spinner-border {
    position: absolute;
    top: 40%;
    left: 50%;
    border-width: thick;
    width: 3rem;
    height: 3rem;
}

.plank-board {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
}

.accumulator {
    border: none;
    padding-top: -10px;

    color: var(--hihglighted-number-color);
    background-color: var(--light-wooden-shade);
    box-shadow: inset -7px -7px 0px var(--wooden-half-shade);
    border-radius: 15%;

    position: absolute;
    top: 50%;
    left: 50%;
    height: 20%;
    width: 0;
    transform: translate(-50%, -55%);

    transition: ease all 500ms;
}

.accumulatorNumber {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
    font-size: larger;
}

.accumulator-hole-showing {
    width: 10%;
    border-top: 1px solid var(--wooden-half-shade);
    border-left: 1px solid var(--wooden-half-shade);
}
</style>
