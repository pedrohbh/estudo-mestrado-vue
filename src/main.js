import { createApp } from 'vue'
import mitt from 'mitt'
import App from './App.vue'
import store from './store'
import router from './router'

import LvInput from './componentes/LvInput.vue'

const emitter = mitt()
const app = createApp(App)
app.use(router)
app.use(store)
app.component('lv-input', LvInput)
app.config.globalProperties.emitter = emitter
app.mount('#app')