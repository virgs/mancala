<template>
  <main>
    <MancalaView
      :top-player-brain-level="BrainLevel.BEGINNER"
      :bottom-player-brain-level="BrainLevel.HUMAN"
    />
  </main>
</template>

<script setup lang="ts">
import MancalaView from "@/components/Mancala.vue";
import { BrainLevel } from "@/engine/Brain";
</script>
