import { createApp } from 'vue'
import App from './app/App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import router from './router/router'

library.add(fas)

createApp(App).use(router).component('VueIcon', FontAwesomeIcon).mount('#app')
