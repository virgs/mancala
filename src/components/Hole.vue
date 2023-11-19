<template>
  <div style="width: 100%; height: 100%; position: relative;">
    <span class="hole" :style="styleObject">
      {{ stones }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { PlayerIdentifier } from '@/engine/player';
import { reactive } from 'vue';

const props = defineProps<{
  stones: number;
  owner: PlayerIdentifier
}>();

const generateBorderRadius = () => ((Math.random() * 20) + 25) + '%';

const borders = {
  'border-bottom-left-radius': generateBorderRadius(),
  'border-top-left-radius': generateBorderRadius(),
  'border-bottom-right-radius': generateBorderRadius(),
  'border-top-right-radius': generateBorderRadius()
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

.hole:hover {
  border: 10px solid;
}
</style>
