<template>
    <span class="dropdown">
        <button :disabled="gameIsRunning" class="btn dropdown-toggle text" type="button" data-bs-toggle="dropdown"
            aria-expanded="false" :style="labelText">
            <font-awesome-icon :icon="'fa-solid ' + currentBrainIcon" style="margin: 0 10px; border: none;" />
            <span>{{ currentBrainLabel }}</span>
        </button>
        <ul class="dropdown-menu">
            <li>
                <button @click="brainSelected()" class="dropdown-item text" :style="labelText">
                    <font-awesome-icon icon="fa-solid fa-brain" style="margin: 0 10px" />
                    <span>Human</span>
                </button>
            </li>
            <li>
                <hr class="dropdown-divider" />
            </li>
            <li v-for="(aiBrain, index) in availableAiBrainsLabel">
                <button @click="brainSelected(index)" class="dropdown-item text" :style="labelText">
                    <font-awesome-icon icon="fa-solid fa-robot" style="margin: 0 10px" />
                    <span>{{ aiBrain }}</span>
                </button>
            </li>
        </ul>
    </span>
</template>
<script lang="ts">
import { AiBrain } from '@/engine/ai/AiBrain'
import { getAiBrainLevels } from '@/engine/ai/AiBrainLevel'
import { HumanBrain } from '@/engine/player/HumanBrain'
import { PlayerSide } from '@/engine/player/PlayerSide'
import { PlayerType } from '@/engine/player/PlayerType'

export default {
    name: 'BrainSelector',
    props: ['gameIsRunning', 'side'],
    emits: ['brainSelected'],
    setup() {
        return { PlayerType }
    },
    data() {
        return {
            selectedBrain: new HumanBrain(),
        }
    },
    mounted() {
        this.brainSelected()
    },
    computed: {
        currentBrainIcon() {
            return this.selectedBrain.type === PlayerType.HUMAN ? 'fa-brain' : 'fa-robot'
        },
        currentBrainLabel() {
            if (this.selectedBrain.type === PlayerType.HUMAN) {
                return this.selectedBrain.getLabel()
            } else {
                return this.aiBrainLabel(this.selectedBrain.getLabel())
            }
        },
        availableAiBrainsLabel() {
            return getAiBrainLevels.map((text) => this.aiBrainLabel(text))
        },
        labelText() {
            const style: any = {
                color: 'var(--top-player-color)',
                direction: 'ltr',
                textAlign: 'left',
                border: 'none'
            }
            if (this.side === PlayerSide.TOP) {
                style.color = 'var(--bottom-player-color)'
                style.direction = 'rtl'
                style.textAlign = 'right'
            }
            return style;
        }
    },
    methods: {
        aiBrainLabel(text: string): string {
            return 'AI - ' + text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
        },
        brainSelected(index?: number) {
            if (index !== undefined) {
                this.selectedBrain = new AiBrain(index)
            } else {
                this.selectedBrain = new HumanBrain()
            }
            this.$emit('brainSelected', { brain: this.selectedBrain, side: this.side })
        },
    },
}
</script>
<style scoped>
.dropdown-toggle::after {
    margin: 0 10px;
}
</style>
