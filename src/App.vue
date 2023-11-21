<template>
  <main>
    <MancalaView :gameSettings="gameSettings" />
  </main>
</template>

<script setup lang="ts">
import MancalaView from '@/components/Mancala.vue'
import { reactive } from 'vue'
import { AiBrain } from './engine/player/AiBrain';
import { Player } from './engine/player/Player';
import { PlayerSide } from './engine/PlayerSide';
import { AiBrainLevel } from './engine/player/AiBrainLevel';

const gameSettings = reactive({
  gameIsRunning: true,
  internalPockets: 6,
  initialStones: 4,
  animationSpeedInMs: 50,
  topPlayer: new Player(PlayerSide.TOP, new AiBrain(AiBrainLevel.BEGINNER)),
  bottomPlayer: new Player(PlayerSide.BOTTOM, new AiBrain(AiBrainLevel.MEDIUM)),
})
</script>
@/engine/AiBrain@/engine/player/Brain
import { AiBrainLevel } from './engine/player/AiBrainLevel';
