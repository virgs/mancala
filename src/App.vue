<template>
    <main>
        <Board :gameSettings="gameSettings" @gameOver="gameOver" />
    </main>
</template>

<script setup lang="ts">
import Board from '@/components/Board.vue'
import { reactive } from 'vue'
import { AiBrain } from './engine/ai/AiBrain'
import { AiBrainLevel } from './engine/ai/AiBrainLevel'
import { Player } from './engine/player/Player'
import { PlayerSide } from './engine/player/PlayerSide'

const gameSettings = reactive({
    gameIsRunning: true,
    internalPockets: 6,
    initialStones: 4,
    animationSpeedInMs: 50,
    topPlayer: new Player(PlayerSide.TOP, new AiBrain(AiBrainLevel.HARD)),
    bottomPlayer: new Player(PlayerSide.BOTTOM, new AiBrain(AiBrainLevel.HARDCORE)),
    // bottomPlayer: new Player(PlayerSide.BOTTOM, new HumanBrain()),
})

const gameOver = (winningPlayer: PlayerSide) => {
    if (winningPlayer) {
        console.log('Player ' + winningPlayer + ' won')
    } else {
        console.log('It was a DRAW')
    }
}
</script>
