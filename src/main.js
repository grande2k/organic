import { createApp } from 'vue'
import App from './app/App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import router from './router/router'
import AOS from 'aos'
import 'aos/dist/aos.css'

library.add(fas, fab)

createApp(App).use(router, AOS.init({duration: 1000, once:true})).component('VueIcon', FontAwesomeIcon).mount('body')