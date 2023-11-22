<template>
    <main>
        <MancalaView :gameSettings="gameSettings" @gameOver="gameOver" />
    </main>
</template>

<script setup lang="ts">
import MancalaView from '@/components/Mancala.vue'
import { reactive } from 'vue'
import type { MoveResult } from './engine/MancalaEngine'
import { HumanBrain } from './engine/player/HumanBrain'
import { AiBrain } from './engine/ai/AiBrain'
import { AiBrainLevel } from './engine/ai/AiBrainLevel'
import { Player } from './engine/player/Player'
import { PlayerSide } from './engine/player/PlayerSide'

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
./engine/MancalaEngine./engine/player/PlayerSide./engine/ai/AiBrain./engine/ai/AiBrainLevel
