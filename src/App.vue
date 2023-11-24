<template>
    <main>
        <NavBar :gameIsRunning="gameIsRunning" @startGame="startGame" @abortGame="abortGame"
            :animationSpeed="animationSpeed" @animationSpeedChanged="animationSpeedChanged"></NavBar>
        <Board :gameIsRunning="gameIsRunning" :internalPockets="internalPockets" :initialStones="initialStones"
            :topPlayer="topPlayer" :bottomPlayer="bottomPlayer" :animationSpeed="animationSpeed" @gameOver="gameOver" />
    </main>
</template>

<script lang="ts">
import Board from '@/components/Board.vue'
import NavBar from './components/NavBar.vue'
import type { MoveRequest } from './engine/MancalaEngine'
import { Player } from './engine/player/Player'
import { PlayerSide } from './engine/player/PlayerSide'

export default {
    name: 'App',
    components: {
        NavBar,
        Board,
    },
    data() {
        return {
            gameIsRunning: false,
            internalPockets: 6,
            initialStones: 4,
            animationSpeed: 500,
            topPlayer: undefined as Player | undefined,
            bottomPlayer: undefined as Player | undefined,
        }
    },
    methods: {
        gameOver(result: { winningPlayer: PlayerSide; movesHistory: MoveRequest[] }) {
            this.gameIsRunning = false
            if (result.winningPlayer) {
                console.log('Player ' + result.winningPlayer + ' won')
            } else {
                console.log('It was a DRAW')
            }
            console.log('History', result.movesHistory)
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
