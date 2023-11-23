<template>
    <div class="dropdown">
        <button :disabled="gameIsRunning" class="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            {{ currentBrainLabel }}
        </button>
        <ul class="dropdown-menu">
            <li><button @click="brainSelected()" class="dropdown-item">Human</button></li>
            <li>
                <hr class="dropdown-divider">
            </li>
            <li v-for="(aiBrain, index) in availableAiBrainsLabel">
                <button @click="brainSelected(index)" class="dropdown-item">{{ aiBrain }}</button>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import { AiBrain } from '@/engine/ai/AiBrain';
import { getAiBrainLevels } from '@/engine/ai/AiBrainLevel';
import { HumanBrain } from '@/engine/player/HumanBrain';
import { PlayerType } from '@/engine/player/PlayerType';


export default {
    name: 'BrainSelector',
    props: ['gameIsRunning', 'side'],
    emits: ['brainSelected'],
    data() {
        return {
            selectedBrain: new HumanBrain()
        }
    },
    mounted() {
        this.brainSelected()
    },
    computed: {
        currentBrainLabel() {
            if (this.selectedBrain.type === PlayerType.HUMAN) {
                return this.selectedBrain.getLabel()
            } else {
                return this.aiBrainLabel(this.selectedBrain.getLabel())
            }
        },
        availableAiBrainsLabel() {
            return getAiBrainLevels
                .map(text => this.aiBrainLabel(text))
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
                this.selectedBrain = new HumanBrain();
            }
            this.$emit('brainSelected', { brain: this.selectedBrain, side: this.side })
        }
    }
}
</script>
<style scoped></style>
