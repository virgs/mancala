<template>
  <div class="container-lg text-center">
    <img src="@/assets/wooden-square-plank.png" class="img-fluid w-100" alt="wooden-square-plank">
    <div class="container-fluid px-5" style="position: absolute; top: 0%; left: 0; height: -webkit-fill-available;">
      <div class="row g-2 h-100">
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
  transform: rotate3d(0, 0, 0, 25deg); /* Why is it necessary? */
}
</style>
