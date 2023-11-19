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

const styleObject = reactive({
  'box-shadow': 'inset -10px -20px 18px' + props.owner === PlayerIdentifier.BOTTOM ? 'darkred' : 'darkblue'
})

</script>


<style scoped>
.hole {
  transform: translateY(50%);
  height: 50%;
  width: 90%;
  background-color: #6b451c;
  border-radius: 50%;
  border: 5px solid;
  border-color: #6b451c;
  display: inline-block;
  box-shadow: inset -10px -20px 18px darkblue;

  background-image: linear-gradient(rgb(50, 1, 1), rgb(0, 0, 0)), url('@/assets/wood-pattern.svg');
  background-blend-mode: soft-light;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
