import './assets/main.css'
import { useScreenOrientation } from '@vueuse/core'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.mount('#app')


const {
    isSupported,
    orientation,
    angle,
    lockOrientation,
} = useScreenOrientation()

console.log(isSupported.value, orientation.value, angle.value)
lockOrientation('landscape')