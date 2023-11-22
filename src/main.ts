import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.mount('#app')


if (screen) {
    if (screen.orientation) {
        if (screen.orientation.onchange) {
            screen.orientation.onchange = () => {
                console.log(screen.orientation.type)
            }
        }
    }
}