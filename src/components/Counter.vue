<template>
    <div class="qty">
        <div class="d-flex" style="color: var(--vt-c-black-mute)">
            <input
                :disabled="disabled"
                type="range"
                class="form-range range-cust"
                :min="config.min"
                :step="config.step !== undefined ? config.step : 1"
                :max="config.max"
                v-model="counter"
                style="margin: 5px"
            />
            <font-awesome-icon :icon="icon" :style="style" :flip="flip" class="icon" />
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Counter',
    props: ['value', 'disabled', 'icon', 'iconColor', 'config', 'flip'],
    emits: ['input'],
    data() {
        return {
            counter: this.value,
        }
    },
    mounted() {
        console.log('show')
    },
    computed: {
        style() {
            let color = this.iconColor || 'var(--vt-c-black-soft)'
            if (this.disabled) {
                color = 'var(--disabled-color)'
            }
            return {
                margin: '10px',
                color: color,
            }
        },
    },
    watch: {
        counter() {
            this.$emit('input', Number(this.counter))
        },
    },
}
</script>

<style>
.icon {
    animation: show 750ms;
}

@keyframes show {
    0% {
        font-size: 1.2rem;
        color: var(--hihglighted-number-color);
    }

    50% {
        font-size: 1.1rem;
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
