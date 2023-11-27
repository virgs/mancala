<template>
    <nav class="navbar w-100 border-bottom border-body" style="background-color: var(--nav-bar-color); max-height: 15vh">
        <div class="container-fluid">
            <div class="row w-100 g-1 justify-content-between">
                <div class="col-12 col-sm-6 col-lg-4" style="text-align: center; white-space: nowrap">
                    <BrainSelector :side="PlayerSide.TOP" :gameIsRunning="gameIsRunning" @brainSelected="brainSelected">
                    </BrainSelector>
                    <img src="@/assets/VS.svg" class="img-fluid" alt="versus" style="width: 2.5em !important" />
                    <BrainSelector :side="PlayerSide.BOTTOM" :gameIsRunning="gameIsRunning" @brainSelected="brainSelected">
                    </BrainSelector>
                </div>
                <div class="col-6 col-sm-3 col-lg-4">
                    <div class="d-flex" style="color: var(--vt-c-black-mute)">
                        <input type="range" class="form-range range-cust" :min="animationInterval.min" :step="200"
                            :max="animationInterval.max" v-model="settings.animationSpeed" style="margin: 5px" />
                        <font-awesome-icon icon="fa-solid fa-bolt" style="margin: 10px" />
                    </div>
                </div>
                <div class="col-6 col-sm-3 col-lg-4 d-flex justify-content-end">
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

export default {
    name: 'NavBar',
    components: {
        BrainSelector,
    },
    props: ['gameIsRunning'],
    setup() {
        return {
            PlayerSide,
        }
    },
    emits: ['startGame', 'abortGame', 'settingsChanged'],
    data() {
        const animationInterval = {
            max: 2100,
            min: 100,
        }
        const defaultSettings = {
            internalPockets: 6,
            seeds: 4,
            animationSpeed: 500,
            topPlayer: new Player(PlayerSide.TOP, new HumanBrain()),
            bottomPlayer: new Player(PlayerSide.BOTTOM, new HumanBrain()),
        }
        return {
            animationInterval: animationInterval,
            settings: defaultSettings
        }
    },
    watch: {
        settings: {
            handler() {
                this.settingsChanged()
            },
            deep: true
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
            const animationDelay = this.animationInterval.max + this.animationInterval.min - this.settings.animationSpeed

            this.$emit('settingsChanged', {
                topPlayer: this.settings.topPlayer,
                bottomPlayer: this.settings.bottomPlayer,
                animationDelay: animationDelay,
                internalPockets: this.settings.internalPockets,
                seeds: this.settings.seeds
            } as GameSettings)
        }
    },
}
</script>
<style scoped>
@keyframes rotation {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(180deg);
    }
}

.range-cust::-webkit-slider-thumb {
    background: var(--vt-c-black-mute);
}

.range-cust::-moz-range-thumb {
    background: var(--vt-c-black-mute);
}

.range-cust::-ms-thumb {
    background: var(--vt-c-black-mute);
}

.form-range::-webkit-slider-runnable-track {
    background-color: var(--vt-c-black-mute);
}
</style>
