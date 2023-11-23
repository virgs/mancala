<template>
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="/favicon.ico" alt="Bootstrap" width="30" height="24" class="d-inline-block align-text-top">
                Mancala
            </a>
            <div>
                <BrainSelector :side="PlayerSide.TOP" :gameIsRunning="gameIsRunning" @brainSelected="brainSelected">
                </BrainSelector>
                <BrainSelector :side="PlayerSide.BOTTOM" :gameIsRunning="gameIsRunning" @brainSelected="brainSelected">
                </BrainSelector>
            </div>

            <div>
                <label for="customRange2" class="form-label"> ms</label>
                <input type="range" class="form-range" min="100" :step="200" max="2000" v-model="animationSpeed"
                    id="customRange2">
            </div>

            <button class="btn btn-success" @click="startStopGame">
                Start
            </button>
        </div>
    </nav>
</template>
<script lang="ts">
import type { Brain } from "@/engine/player/Brain"
import { HumanBrain } from "@/engine/player/HumanBrain"
import { Player } from "@/engine/player/Player"
import { PlayerSide } from "@/engine/player/PlayerSide"
import BrainSelector from "./BrainSelector.vue"

export default {
    name: 'NavBar',
    components: {
        BrainSelector
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
            players: {
                [PlayerSide.TOP]: new Player(PlayerSide.TOP, new HumanBrain()),
                [PlayerSide.BOTTOM]: new Player(PlayerSide.BOTTOM, new HumanBrain())
            },
            animationSpeed: 500
        }
    },
    watch: {
        animationSpeed() {
            this.$emit('animationSpeedChanged', this.animationSpeed)
        }
    },
    methods: {
        startStopGame() {
            if (this.gameIsRunning) {
                this.$emit('abortGame')
            } else {
                this.$emit('startGame', {
                    topPlayer: this.players[PlayerSide.TOP],
                    bottomPlayer: this.players[PlayerSide.BOTTOM],
                    animationSpeed: this.animationSpeed
                })
            }
        },
        brainSelected(selection: { side: PlayerSide, brain: Brain }) {
            this.players[selection.side] = new Player(selection.side, selection.brain)
        }
    }
}
</script>
<style scoped></style>
