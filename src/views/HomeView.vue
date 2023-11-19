<template>
  <main>
    <MancalaView :top-player="PlayerLevel.BEGINNER" :bottom-player="PlayerLevel.HUMAN" />
  </main>
</template>

<script setup lang="ts">
import MancalaView from "@/components/Mancala.vue";
import { PlayerLevel } from "@/engine/ai-player";
</script>