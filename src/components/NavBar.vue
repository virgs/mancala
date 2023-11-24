<template>
    <nav class="navbar border-bottom border-body" style="background-color: var(--nav-bar-color)">
        <div class="container">
            <div>
                <BrainSelector :side="PlayerSide.TOP" :gameIsRunning="gameIsRunning" @brainSelected="brainSelected">
                </BrainSelector>
                <BrainSelector :side="PlayerSide.BOTTOM" :gameIsRunning="gameIsRunning" @brainSelected="brainSelected">
                </BrainSelector>
            </div>

            <div style="color: var(--vt-c-black-mute);">
                <input type="range" class="form-range range-cust" :min="animationInterval.min" :step="200"
                    :max="animationInterval.max" v-model="animationSpeed" id="customRange2" />
                <font-awesome-icon icon="fa-solid fa-bolt" style="margin: 0 10px" />
            </div>
            <button class="btn text" @click="startStopGame">
                <div v-if="gameIsRunning" class="btn-success">
                    <span>
                        Stop
                    </span>
                    <font-awesome-icon icon="fa-regular fa-circle-stop" />
                </div>
                <div v-else class="btn-danger">
                    <span>
                        Start
                    </span>
                    <font-awesome-icon icon="fa-solid fa-play" style="margin: 0 10px" />
                </div>
            </button>
            <div class="text" style="color: var(--vt-c-black-mute); text-align: left; width: 10%;">
                <font-awesome-icon icon="fa-solid fa-hourglass" :class="[gameIsRunning && 'hourglass-rotation']"
                    style="margin: 0 10px" />
                <span>
                    {{ timerLabel }}
                </span>
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
    emits: ['startGame', 'abortGame', 'animationSpeedChanged'],
    data() {
        return {
            animationInterval: {
                max: 2100,
                min: 100
            },
            timerInterval: undefined as number | undefined,
            timer: 0,
            players: {
                [PlayerSide.TOP]: new Player(PlayerSide.TOP, new HumanBrain()),
                [PlayerSide.BOTTOM]: new Player(PlayerSide.BOTTOM, new HumanBrain()),
            },
            animationSpeed: 500,
        }
    },
    computed: {
        timerLabel() {
            let minutes = Math.trunc(this.timer / 60)
            let seconds = this.timer % 60
            return minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')
        },
    },
    watch: {
        gameIsRunning() {
            if (!this.gameIsRunning) {
                clearInterval(this.timerInterval)
                this.timerInterval = 0
            }
        },
        animationSpeed() {
            const animationDelay = this.animationInterval.max + this.animationInterval.min - this.animationSpeed
            console.log(animationDelay)
            this.$emit('animationSpeedChanged', animationDelay)
        },
    },
    methods: {
        startStopGame() {
            if (this.gameIsRunning) {
                clearInterval(this.timerInterval)
                this.timerInterval = 0
                this.$emit('abortGame')
            } else {
                this.timer = 0
                this.timerInterval = setInterval(() => (this.timer += 1), 1000)
                this.$emit('startGame', {
                    topPlayer: this.players[PlayerSide.TOP],
                    bottomPlayer: this.players[PlayerSide.BOTTOM],
                    animationSpeed: this.animationSpeed,
                })
            }
        },
        brainSelected(selection: { side: PlayerSide; brain: Brain }) {
            this.players[selection.side] = new Player(selection.side, selection.brain)
        },
    },
}
</script>
<style scoped>
.hourglass-rotation {
    animation: rotation 1000ms infinite;
}

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
