import { useScreenOrientation } from '@vueuse/core'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBolt, faBrain, faHourglass, faPlay, faRobot } from '@fortawesome/free-solid-svg-icons'
import { faCircleStop } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faBrain, faRobot, faBolt, faPlay, faCircleStop, faHourglass)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

const { isSupported, orientation, angle, lockOrientation } = useScreenOrientation()

console.log(isSupported.value, orientation.value, angle.value)
lockOrientation('landscape')
