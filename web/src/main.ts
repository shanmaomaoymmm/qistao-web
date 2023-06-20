import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@icon-park/vue-next/styles/index.css'
import { Server } from '@icon-park/vue-next'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import fontawesome from '@/js/fontawesome'

library.add(fontawesome)

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
// iconpark
app.component('i-server', Server)

app.mount('#app')
