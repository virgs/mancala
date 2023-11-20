<template>
  <div style="width: 100%; height: 100%; position: relative;">
    <span :class="{hole: true, hovered: mouseIsOver}" :style="styleObject"
     @mouseenter="mouseOver" @mouseleave="mouseLeft">
      {{ stones }},{{ index }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { PlayerIdentifier } from '@/engine/PlayerIdentifier';
import { reactive, ref } from 'vue';

const props = defineProps<{
  stones: number;
  index: number;
  owner: PlayerIdentifier,
  playingPlayerIdentifier: PlayerIdentifier
}>();

const generateBorderRadius = () => ((Math.random() * 20) + 25) + '%';

const borders = {
  'border-bottom-left-radius': generateBorderRadius(),
  'border-top-left-radius': generateBorderRadius(),
  'border-bottom-right-radius': generateBorderRadius(),
  'border-top-right-radius': generateBorderRadius()
}

let mouseIsOver = ref(false);
function mouseOver() {
  mouseIsOver.value = true;
  console.log(true, mouseIsOver)
}

function mouseLeft() {
  mouseIsOver.value = false;
  console.log(true, mouseIsOver)
}

const styleObject = reactive({
  ...borders,
  'border-color': props.owner === PlayerIdentifier.BOTTOM ? 'darkred' : 'darkblue'
})

</script>


<style scoped>
.hole {
  transform: translateY(70%);
  height: 40%;
  width: 75%;
  background-color: #6f3e1c;
  border: 3px solid;
  display: inline-block;
  box-shadow: inset 7px 7px 0px #b97731;
}

.hovered {
  border: 10px solid;
}
</style>