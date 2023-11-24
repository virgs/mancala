<template>
    <div class="container-lg text-center" id="boardContainer">
        <img src="@/assets/wooden-square-plank.png" class="img-fluid w-100" alt="wooden-square-plank" />
        <span v-if="animationRunning && accumulator >= 0" :class="accumulatorClass" :style="accumulatorStyle">
            <span class="accumulatorNumber number">{{ accumulator }}</span>
        </span>
        <div v-if="aiIsThinking" class="spinner-border" :style="spinningStyle" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div class="container-fluid px-5 plank-board">
            <div class="row g-2 h-100">
                <div class="col">
                    <Pit :seeds="board[topSideStorePit]" :index="topSideStorePit" :playingPlayerSide="playingPlayer?.side"
                        :store="true" :ownerPlayerType="topPlayer?.brain.type" @nextActionSelected="nextActionSelected"
                        :side="PlayerSide.TOP">
                    </Pit>
                </div>
                <div class="col-8">
                    <div class="row g-0 justify-content-center" style="height: 50%">
                        <div v-for="(pit, index) in topInternalPockets" class="col mx-auto">
                            <Pit :seeds="pit" :index="topInternalPockets.length - 1 - index" :store="false"
                                :lastSelectedPitId="lastSelectedPitId" :ownerPlayerType="topPlayer?.brain.type"
                                @nextActionSelected="nextActionSelected" :playingPlayerSide="playingPlayer?.side"
                                :side="PlayerSide.TOP"></Pit>
                        </div>
                    </div>
                    <div class="row g-0 justify-content-center" style="height: 50%">
                        <div v-for="(pit, index) in bottomInternalPockets" class="col mx-auto">
                            <Pit :seeds="pit" :index="index + bottomInternalPockets.length + 1"
                                :lastSelectedPitId="lastSelectedPitId" :ownerPlayerType="bottomPlayer?.brain.type"
                                :playingPlayerSide="playingPlayer?.side" :store="false"
                                @nextActionSelected="nextActionSelected" :side="PlayerSide.BOTTOM"></Pit>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <Pit :seeds="board[bottomSideStorePit]" :index="bottomSideStorePit"
                        :playingPlayerSide="playingPlayer?.side" :store="true" :ownerPlayerType="bottomPlayer?.brain.type"
                        @nextActionSelected="nextActionSelected" :side="PlayerSide.BOTTOM">
                    </Pit>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { createBoard, type BoardConfig } from '@/engine/BoardConfig'
import { MancalaEngine, type MoveRequest, type MoveResult } from '@/engine/MancalaEngine'
import { Player } from '@/engine/player/Player'
import { PlayerSide } from '@/engine/player/PlayerSide'
import { PlayerType } from '@/engine/player/PlayerType'
import Pit from './Pit.vue'
import { BoardPrinter } from '@/engine/BoardPrinter'
import { StaticBoardAnalyser } from '@/engine/StaticBoardAnalyser'

let engine: MancalaEngine

export default {
    name: 'Board',
    props: ['internalPockets', 'initialStones', 'topPlayer', 'bottomPlayer', 'animationSpeed', 'gameIsRunning'],
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
        }
    },
    watch: {
        gameIsRunning() {
            if (this.gameIsRunning) {
                this.playingPlayer = this.topPlayer

                this.board = createBoard(this.internalPockets, this.initialStones)
                engine = new MancalaEngine(this.board, {
                    recordMoves: true,
                })

                if (this.playingPlayer?.brain.type !== PlayerType.HUMAN) {
                    this.aiThinkAboutNextMove()
                }
            } else {
                this.board = createBoard(6, 4)
                this.lastSelectedPitId = undefined
                this.animationRunning = false;
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
                await this.sleep(this.animationSpeed)
                --this.accumulator
            }
            this.finishUpdatingBoard(result)
        },
        finishUpdatingBoard(actionResult: MoveResult) {
            this.animationRunning = false
            this.$emit('animationIsRunning', false)
            if (actionResult.gameOver) {
                new BoardPrinter().print(this.board)
                this.$emit('gameOver', {
                    winningPlayer: actionResult.winningPlayer,
                    movesHistory: engine.getMovesHistory(),
                })
            } else {
                this.playingPlayer = this.getBrainFromSide(actionResult.nextTurnPlayer!)
                this.$emit('playingPlayerChanged', this.playingPlayer)
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
    left: 10px;
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
