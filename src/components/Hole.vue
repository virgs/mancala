<template>
    <div style="width: 100%; height: 100%; position: relative">
        <span :class="holeClass" :style="holeStyle" @mouseenter="mouseOver" @mouseleave="mouseLeft" @click="click">
            {{ stones }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { BrainLevel } from '@/engine/Brain'
import { PlayerIdentifier } from '@/engine/PlayerIdentifier'
import { computed, ref, watch } from 'vue'
const emit = defineEmits(['nextActionSelected'])

const props = defineProps<{
    index: number
    store: boolean
    owner: PlayerIdentifier
    ownerBrain?: BrainLevel
    stones: number
    playingPlayerIdentifier: PlayerIdentifier | undefined
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
        if (props.ownerBrain === BrainLevel.HUMAN) {
            if (props.stones > 0) {
                if (props.owner === props.playingPlayerIdentifier) {
                    emit('nextActionSelected', props.owner, props.index)
                }
            }
        }
    }
}

watch(
    () => props.playingPlayerIdentifier,
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
        props.ownerBrain === BrainLevel.HUMAN &&
        props.stones > 0 &&
        props.owner === props.playingPlayerIdentifier &&
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
        props.owner === PlayerIdentifier.BOTTOM
            ? 'var(--bottom-player-color)'
            : 'var(--top-player-color)'
    return {
        ...borders,
        'border-color': playerColor,
        'box-shadow': 'inset 7px 7px 0px var(--wooden-half-shade), 1px 1px 10px ' + playerColor,
        'padding-top': props.store ? '20%' : '5%',
    }
})
</script>

<style scoped>
.availableOption {
    border-color: var(--hihglighted-number-color) !important;

    box-shadow:
        inset 7px 7px 0px var(--wooden-half-shade),
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
