<template>
  <div class="container-lg text-center">
    <div class="row g-1 h-100">
      <div class="col">
        <Hole :stones="6" :owner="PlayerIdentifier.TOP"></Hole>
      </div>
      <div class="col-8">
        <div v-for="row in 2" class="row g-0 justify-content-center" style="height: 50%;">
          <div v-for="pocket in 6" class="col mx-auto">
            <Hole :stones="pocket" :owner="row === 1 ? PlayerIdentifier.TOP : PlayerIdentifier.BOTTOM"></Hole>
          </div>
        </div>
      </div>
      <div class="col">
        <Hole :stones="6" :owner="PlayerIdentifier.BOTTOM"></Hole>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Hole from "./Hole.vue";
import { BoardCreator } from "@/engine/board-creator";
import { Mancala } from '@/engine/mancala';
import { PlayerIdentifier } from "@/engine/player";
import { PlayerLevel, AiPlayer } from "@/engine/ai-player";

const props = defineProps<{
  topPlayer: PlayerLevel;
  bottomPlayer: PlayerLevel;
}>();

const boardConfig = new BoardCreator().create(6, 4);
const boardLength = boardConfig.length;
const mancala = new Mancala(new AiPlayer(PlayerIdentifier.BOTTOM, boardLength, props.bottomPlayer),
  new AiPlayer(PlayerIdentifier.TOP, boardLength, props.topPlayer), boardConfig)
mancala.update()

</script>

<style scoped>
.container-lg {
  transform: rotate3d(1, 0, 0, 25deg);
  border-bottom: 15px solid;
  border-color: #221201;
  border-radius: 10px;

  min-height: 50vh;
  height: 500px;
  max-height: 100vh;
  background-image: url('@/assets/wood-pattern.svg');
  /* The image used */
  background-position: center;
  /* Center the image */
  background-repeat: no-repeat;
  /* Do not repeat the image */
  background-size: cover;
  /* Resize the background image to cover the entire container */
}
</style>
