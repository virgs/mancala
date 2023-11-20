<template>
  <main>
    <MancalaView :top-player="BrainLevel.BEGINNER" :bottom-player="BrainLevel.HUMAN" />
  </main>
</template>

<script setup lang="ts">
import MancalaView from "@/components/Mancala.vue";
import { BrainLevel } from "@/engine/Brain";
</script>