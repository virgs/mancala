<template>
    <main>
        <MancalaView :gameSettings="gameSettings" @gameOver="gameOver" />
    </main>
</template>

<script setup lang="ts">
import MancalaView from '@/components/Mancala.vue'
import { reactive } from 'vue'
import type { MoveResult } from './engine/BoardEngine'
import { PlayerSide } from './engine/PlayerSide'
import { AiBrain } from './engine/player/AiBrain'
import { AiBrainLevel } from './engine/player/AiBrainLevel'
import { HumanBrain } from './engine/player/HumanBrain'
import { Player } from './engine/player/Player'

const gameSettings = reactive({
    gameIsRunning: true,
    internalPockets: 6,
    initialStones: 4,
    animationSpeedInMs: 250,
    topPlayer: new Player(PlayerSide.TOP, new AiBrain(AiBrainLevel.MEDIUM)),
    bottomPlayer: new Player(PlayerSide.BOTTOM, new HumanBrain()),
})

const gameOver = (result: MoveResult) => {
    if (result.winningPlayer) {
        console.log('Player ' + result.winningPlayer + ' won')
    } else {
        console.log('It was a DRAW')
    }

}
</script>
