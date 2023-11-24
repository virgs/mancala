import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBolt, faBrain, faHourglass, faPlay, faRobot, faStop } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faBrain, faRobot, faBolt, faPlay, faStop, faHourglass)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
