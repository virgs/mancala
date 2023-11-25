<template>
    <main>
        <NavBar
            :gameIsRunning="gameIsRunning"
            @startGame="startGame"
            @abortGame="abortGame"
            :animationSpeed="animationSpeed"
            @animationSpeedChanged="animationSpeedChanged"
        ></NavBar>
        <Board
            :gameIsRunning="gameIsRunning"
            :internalPockets="internalPockets"
            :initialStones="initialStones"
            :topPlayer="topPlayer"
            :bottomPlayer="bottomPlayer"
            :animationSpeed="animationSpeed"
            @gameOver="gameOver"
        />
        <GameOver :result="gameOverResult" @modalIsGone="gameOverModalIsGone"></GameOver>
    </main>
</template>

<script lang="ts">
import Board from '@/components/Board.vue'
import GameOver from '@/components/GameOver.vue'
import NavBar from './components/NavBar.vue'
import type { EndGameResult } from './engine/MancalaEngine'
import { Player } from './engine/player/Player'

export default {
    name: 'App',
    components: {
        NavBar,
        Board,
        GameOver,
    },
    data() {
        return {
            gameOverResult: undefined as undefined | EndGameResult,
            gameIsRunning: false,
            internalPockets: 6,
            initialStones: 4,
            animationSpeed: 500,
            topPlayer: undefined as Player | undefined,
            bottomPlayer: undefined as Player | undefined,
        }
    },
    methods: {
        gameOver(result: EndGameResult) {
            this.gameOverResult = result
        },
        gameOverModalIsGone() {
            this.gameIsRunning = false
        },
        startGame(settings: { topPlayer: Player; bottomPlayer: Player; animationSpeed: number }) {
            this.gameIsRunning = true
            this.topPlayer = settings.topPlayer
            this.bottomPlayer = settings.bottomPlayer
            this.animationSpeed = settings.animationSpeed
        },
        abortGame() {
            this.gameIsRunning = false
            this.topPlayer = undefined
            this.bottomPlayer = undefined
        },
        animationSpeedChanged(animationSpeed: number) {
            this.animationSpeed = animationSpeed
        },
    },
}
</script>
