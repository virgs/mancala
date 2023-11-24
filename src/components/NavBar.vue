<template>
    <nav class="navbar w-100 border-bottom border-body" style="background-color: var(--nav-bar-color); max-height: 15vh;">
        <div class="container-fluid">
            <div class="row w-100 g-1 justify-content-between">
                <div class="col-12 col-sm-6 col-lg-4" style="text-align: center;">
                    <BrainSelector :side="PlayerSide.TOP" :gameIsRunning="gameIsRunning" @brainSelected="brainSelected">
                    </BrainSelector>
                    <img src="@/assets/VS.svg" class="img-fluid" alt="versus" style="width: 2.5em !important" />
                    <BrainSelector :side="PlayerSide.BOTTOM" :gameIsRunning="gameIsRunning" @brainSelected="brainSelected">
                    </BrainSelector>
                </div>
                <div class="col-6 col-sm-3 col-lg-4">
                    <div class="d-flex" style="color: var(--vt-c-black-mute);">
                        <input type="range" class="form-range range-cust" :min="animationInterval.min" :step="200"
                            :max="animationInterval.max" v-model="animationDelay" style="margin: 5px;" />
                        <font-awesome-icon icon="fa-solid fa-bolt" style="margin: 10px" />
                    </div>
                </div>
                <div class="col-6 col-sm-3 d-flex justify-content-end">
                    <button v-if="gameIsRunning" @click="stopGame" class="btn btn-sm btn-danger">
                        <span class="text">
                            Stop
                        </span>
                        <font-awesome-icon icon="fa-solid fa-stop" style="margin: 0 10px" />
                    </button>
                    <button v-else @click="startGame" class="btn btn-sm btn-success">
                        <span class="text">
                            Start
                        </span>
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

export default {
    name: 'NavBar',
    components: {
        BrainSelector,
    },
    props: ['gameIsRunning', 'animationSpeed'],
    setup() {
        return {
            PlayerSide,
        }
    },
    emits: ['startGame', 'abortGame', 'animationSpeedChanged'],
    data() {
        const animationInterval = {
            max: 2100,
            min: 100
        }
        return {
            animationInterval: animationInterval,
            timerInterval: undefined as number | undefined,
            timer: 0,
            players: {
                [PlayerSide.TOP]: new Player(PlayerSide.TOP, new HumanBrain()),
                [PlayerSide.BOTTOM]: new Player(PlayerSide.BOTTOM, new HumanBrain()),
            },
            animationDelay: this.animationSpeed,
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
        animationDelay() {
            const animationDelay = this.animationInterval.max + this.animationInterval.min - this.animationDelay
            this.$emit('animationSpeedChanged', animationDelay)
        },
    },
    methods: {
        startGame() {
            this.timer = 0
            this.timerInterval = setInterval(() => (this.timer += 1), 1000)
            this.$emit('startGame', {
                topPlayer: this.players[PlayerSide.TOP],
                bottomPlayer: this.players[PlayerSide.BOTTOM],
                animationSpeed: this.animationSpeed,
            })
        },
        stopGame() {
            clearInterval(this.timerInterval)
            this.timerInterval = 0
            this.$emit('abortGame')
        },
        brainSelected(selection: { side: PlayerSide; brain: Brain }) {
            this.players[selection.side] = new Player(selection.side, selection.brain)
        },
    },
}
</script>
<style scoped>
.fa-hourglass {
    transform: rotate(-90deg);
    transition: all 500ms ease;

}

.hourglass-rotation {
    transform: rotate(0deg);
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
