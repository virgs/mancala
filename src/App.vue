<template>
    <main>
        <NavBar :gameIsRunning="gameIsRunning" @startGame="startGame" @abortGame="abortGame"
            @settingsChanged="settingsChanged"></NavBar>
        <Board :gameIsRunning="gameIsRunning" :settings="settings" @gameOver="gameOver" />
        <GameOver :result="gameOverResult" @modalIsGone="gameOverModalIsGone"></GameOver>
        <GithubCorner></GithubCorner> 
    </main>
</template>

<script lang="ts">
import GithubCorner from '@/components/GithubCorner.vue'
import Board from '@/components/Board.vue'
import GameOver from '@/components/GameOver.vue'
import NavBar from './components/NavBar.vue'
import type { EndGameResult } from './engine/MancalaEngine'
import type { GameSettings } from './GameSettings'

export default {
    name: 'App',
    components: {
        NavBar,
        Board,
        GameOver,
        GithubCorner,
    },
    data() {
        return {
            gameOverResult: undefined as undefined | EndGameResult,
            gameIsRunning: false,
            settings: undefined as GameSettings | undefined,
        }
    },
    methods: {
        gameOver(result: EndGameResult) {
            this.gameOverResult = result
        },
        gameOverModalIsGone() {
            this.gameIsRunning = false
        },
        startGame() {
            this.gameIsRunning = true
        },
        abortGame() {
            this.gameIsRunning = false
        },
        settingsChanged(settings: GameSettings) {
            console.log(settings)
            this.settings = settings
        },
    },
}
</script>
