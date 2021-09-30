import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import LvInput from './componentes/LvInput.vue'

createApp(App).use(store).use(router).use(store).component('lv-input', LvInput).
mount('#app')
