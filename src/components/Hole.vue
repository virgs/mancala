<template>
    <div style="width: 100%; height: 100%; position: relative">
        <span :class="holeClass" :style="holeStyle" @mouseenter="mouseOver" @mouseleave="mouseLeft" @click="click">
            {{ stones }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { PlayerSide } from '@/engine/player/PlayerSide'
import { PlayerType } from '@/engine/player/PlayerType'
import { computed, ref, watch } from 'vue'
const emit = defineEmits(['nextActionSelected'])

const props = defineProps<{
    index: number
    store: boolean
    side: PlayerSide
    ownerPlayerType?: PlayerType
    stones: number
    playingPlayerSide: PlayerSide | undefined
}>()

const generateBorderRadius = () => Math.random() * 25 + 25 + '%'

const borders = {
    'border-bottom-left-radius': generateBorderRadius(),
    'border-top-left-radius': generateBorderRadius(),
    'border-bottom-right-radius': generateBorderRadius(),
    'border-top-right-radius': generateBorderRadius(),
}

const mouseIsOver = ref(false)
const stonesNumberChangedAnimation = ref(false)
const availableActionOption = ref(detectAvailableOption())

function click() {
    if (!props.store) {
        if (props.ownerPlayerType === PlayerType.HUMAN) {
            if (props.stones > 0) {
                if (props.side === props.playingPlayerSide) {
                    emit('nextActionSelected', props.side, props.index)
                }
            }
        }
    }
}

watch(
    () => props.playingPlayerSide,
    () => {
        availableActionOption.value = detectAvailableOption()
    }
)

watch(
    () => props.stones,
    () => {
        stonesNumberChangedAnimation.value = true
        setTimeout(() => (stonesNumberChangedAnimation.value = false), 200)
        availableActionOption.value = detectAvailableOption()
    }
)

function detectAvailableOption() {
    return (
        props.ownerPlayerType === PlayerType.HUMAN &&
        props.stones > 0 &&
        props.side === props.playingPlayerSide &&
        !props.store
    )
}

function mouseOver() {
    mouseIsOver.value = true
    availableActionOption.value = detectAvailableOption()
}

function mouseLeft() {
    mouseIsOver.value = false
    availableActionOption.value = detectAvailableOption()
}

const holeClass = computed(() => ({
    hole: true,
    stonesNumberChangedAnimation: stonesNumberChangedAnimation.value,
    availableOption: availableActionOption.value,
    hovered: mouseIsOver.value && availableActionOption.value,
}))

const holeStyle = computed(() => {
    const playerColor =
        props.side === PlayerSide.BOTTOM ? 'var(--bottom-player-color)' : 'var(--top-player-color)'
    return {
        ...borders,
        'border-color': playerColor,
        'box-shadow': 'inset 7px 7px 0px var(--wooden-half-shade), 1px 1px 10px ' + playerColor,
        'padding-top': props.store ? '20%' : '5%',
    }
})
</script>

<style scoped>
.hole {
    text-shadow: 2px 2px black;
    border-radius: 15%;
    font-family: var(--game-font-family);
    font-size: 1.5rem;
    font-weight: bolder;
    transform: translateY(70%);
    height: 40%;
    width: 75%;
    background-color: var(--wooden-shade);
    border: 3px solid;
    display: block;
    box-shadow: inset 5px 5px 0px var(--wooden-half-shade);
    transition: 200ms ease all;
}

.availableOption {
    border-color: var(--hihglighted-number-color) !important;

    box-shadow:
        inset 5px 5px 0px var(--wooden-half-shade),
        1px 1px 5px var(--hihglighted-number-color) !important;
    cursor: pointer;
}

.hovered {
    border: 5px solid;
    box-shadow:
        inset 7px 7px 0px var(--wooden-half-shade),
        1px 1px 20px var(--hihglighted-number-color) !important;
}

.stonesNumberChangedAnimation {
    color: var(--hihglighted-number-color);
    font-size: 2rem;
}
</style>
