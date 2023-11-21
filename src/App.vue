<template>
  <main>
    <MancalaView :gameSettings="gameSettings" />
  </main>
</template>

<script setup lang="ts">
import MancalaView from '@/components/Mancala.vue';
import { BrainLevel } from '@/engine/Brain';
import { reactive } from 'vue';

const gameSettings = reactive({
  gameIsRunning: true,
  internalPockets: 6,
  initialStones: 4,
  animationSpeedInMs: 50,
  topPlayerBrainLevel: BrainLevel.BEGINNER,
  bottomPlayerBrainLevel: BrainLevel.HARD,
})
</script>
