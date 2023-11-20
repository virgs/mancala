<template>
  <main>
    <MancalaView :gameSettings="gameSettings" />
  </main>
</template>

<script setup lang="ts">
import MancalaView from "@/components/Mancala.vue";
import { BrainLevel } from "@/engine/Brain";
import { reactive } from "vue";

const gameSettings = reactive({
  gameIsRunning: true,
  animationSpeedInMs: 500,
  topPlayerBrainLevel: BrainLevel.BEGINNER,
  bottomPlayerBrainLevel: BrainLevel.HUMAN
})
</script>
