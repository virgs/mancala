<template>
  <div style="width: 100%; height: 100%; position: relative">
    <span :class="holeClass" :style="holeStyle" @mouseenter="mouseOver" @mouseleave="mouseLeft" @click="click">
      {{ stones }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { BrainLevel } from "@/engine/Brain";
import { PlayerIdentifier } from "@/engine/PlayerIdentifier";
import { computed, reactive, ref, watch } from "vue";
const emit = defineEmits(["nextActionSelected"]);

const props = defineProps<{
  index: number;
  store: boolean;
  owner: PlayerIdentifier;
  ownerBrain?: BrainLevel;
  stones: number;
  playingPlayerIdentifier: PlayerIdentifier;
}>();

const generateBorderRadius = () => Math.random() * 25 + 25 + "%";

const borders = {
  "border-bottom-left-radius": generateBorderRadius(),
  "border-top-left-radius": generateBorderRadius(),
  "border-bottom-right-radius": generateBorderRadius(),
  "border-top-right-radius": generateBorderRadius(),
};

const mouseIsOver = ref(false);
const stonesNumberChangedAnimation = ref(false);
const availableActionOption = ref(detectAvailableOption());

function click() {
  if (!props.store) {
    if (props.stones > 0) {
      if (props.owner === props.playingPlayerIdentifier) {
        emit("nextActionSelected", props.owner, props.index);
      }
    }
  }
}

watch(
  () => props.playingPlayerIdentifier,
  () => {
    availableActionOption.value = detectAvailableOption();
  },
);

watch(
  () => props.stones,
  () => {
    stonesNumberChangedAnimation.value = true;
    setTimeout(() => stonesNumberChangedAnimation.value = false, 200);
    availableActionOption.value = detectAvailableOption();
  },
);

function detectAvailableOption() {
  return (
    props.ownerBrain === BrainLevel.HUMAN && 
    props.stones > 0 &&
    props.owner === props.playingPlayerIdentifier &&
    !props.store
  );
}

function mouseOver() {
  mouseIsOver.value = true;
  availableActionOption.value = detectAvailableOption();
}

function mouseLeft() {
  mouseIsOver.value = false;
  availableActionOption.value = detectAvailableOption();
}

const holeClass = computed(() => ({
  hole: true,
  stonesNumberChangedAnimation: stonesNumberChangedAnimation.value,
  availableOption: availableActionOption.value,
  hovered: mouseIsOver.value && availableActionOption.value,
}));

const holeStyle = computed(() => ({
  ...borders,
  "border-color": props.owner === PlayerIdentifier.BOTTOM ? "darkred" : "darkblue",
}));
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

.availableOption {
  border-color: rgb(237, 233, 31) !important;
  cursor: pointer;
}

.hovered {
  border: 5px solid;
}

.stonesNumberChangedAnimation {
  font-size: larger;
}
</style>
