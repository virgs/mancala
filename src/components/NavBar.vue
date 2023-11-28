<template>
    <nav class="navbar w-100 border-bottom border-body" style="background-color: var(--nav-bar-color)">
        <div class="container-fluid">
            <div class="row w-100 g-1 justify-content-between">
                <div class="col-12 col-sm-4 col-lg-3" style="text-align: center; white-space: nowrap">
                    <BrainSelector :side="PlayerSide.TOP" :gameIsRunning="gameIsRunning" @brainSelected="brainSelected">
                    </BrainSelector>
                    <img :src="versusIcon" class="img-fluid" alt="versus" style="width: 2.5em !important" />
                    <BrainSelector
                        :side="PlayerSide.BOTTOM"
                        :gameIsRunning="gameIsRunning"
                        @brainSelected="brainSelected"
                    >
                    </BrainSelector>
                </div>
                <div class="col-4 col-sm-2 col-lg-auto">
                    <Counter
                        :disabled="gameIsRunning"
                        :value="settings.seeds"
                        icon="fa-solid fa-egg"
                        :config="seedsCounter"
                        iconColor="var(--wooden-shade)"
                        @input="(value) => (settings.seeds = value)"
                    />
                </div>
                <div class="col-4 col-sm-2 col-lg-auto">
                    <Counter
                        :disabled="gameIsRunning"
                        :value="settings.internalPockets"
                        icon="fa-solid fa-rainbow"
                        flip="vertical"
                        :config="pitsCounter"
                        iconColor="var(--wooden-shade)"
                        @input="(value) => (settings.internalPockets = value)"
                    />
                </div>
                <div class="col-4 col-sm-2 col-lg-auto">
                    <Counter
                        :value="settings.animationSpeed"
                        icon="fa-solid fa-bolt"
                        :config="animationCounter"
                        iconColor="var(--bolt-color)"
                        @input="(value) => (settings.animationSpeed = value)"
                    />
                </div>
                <div class="col-12 col-sm-2 col-lg-3 d-flex justify-content-end">
                    <button v-if="gameIsRunning" @click="stopGame" class="btn btn-sm btn-danger">
                        <span class="text"> Abort </span>
                        <font-awesome-icon icon="fa-solid fa-stop" style="margin: 0 10px" />
                    </button>
                    <button v-else @click="startGame" class="btn btn-sm btn-success">
                        <span class="text"> Start </span>
                        <font-awesome-icon icon="fa-solid fa-play" style="margin: 0 10px" />
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>
<script lang="ts">
import type { Brain } from '@/engine/player/Brain'
import { HumanBrain } from '@/engine/player/HumanBrain'
import { Player } from '@/engine/player/Player'
import { PlayerSide } from '@/engine/player/PlayerSide'
import BrainSelector from './BrainSelector.vue'
import type { GameSettings } from '@/GameSettings'
import Counter from './Counter.vue'

import versusIcon from '@/assets/VS.svg'
import type { CounterData } from '@/CounterData'

const animationCounter: CounterData = {
    max: 2100,
    min: 100,
    step: 200,
}
const seedsCounter: CounterData = {
    max: 7,
    min: 3,
    step: 1,
}
const pitsCounter: CounterData = {
    max: 8,
    min: 5,
    step: 1,
}
const defaultSettings = {
    internalPockets: 6,
    seeds: 4,
    animationSpeed: 500,
    topPlayer: new Player(PlayerSide.TOP, new HumanBrain()),
    bottomPlayer: new Player(PlayerSide.BOTTOM, new HumanBrain()),
}

export default {
    name: 'NavBar',
    components: {
        BrainSelector,
        Counter,
    },
    props: ['gameIsRunning'],
    setup() {
        return {
            PlayerSide,
        }
    },
    emits: ['startGame', 'abortGame', 'settingsChanged'],
    data() {
        return {
            seedsCounter: seedsCounter,
            pitsCounter: pitsCounter,
            animationCounter: animationCounter,
            settings: defaultSettings,
            versusIcon: versusIcon,
        }
    },
    watch: {
        settings: {
            handler() {
                this.settingsChanged()
            },
            deep: true,
        },
    },
    methods: {
        startGame() {
            this.$emit('startGame')
        },
        stopGame() {
            this.$emit('abortGame')
        },
        brainSelected(selection: { side: PlayerSide; brain: Brain }) {
            const player = new Player(selection.side, selection.brain)
            if (selection.side === PlayerSide.TOP) {
                this.settings.topPlayer = player
            } else {
                this.settings.bottomPlayer = player
            }
        },
        settingsChanged() {
            const animationDelay = this.animationCounter.max + this.animationCounter.min - this.settings.animationSpeed

            this.$emit('settingsChanged', {
                topPlayer: this.settings.topPlayer,
                bottomPlayer: this.settings.bottomPlayer,
                animationDelay: animationDelay,
                internalPockets: this.settings.internalPockets,
                seeds: this.settings.seeds,
            } as GameSettings)
        },
    },
}
</script>
<style scoped></style>
@/CounterData
