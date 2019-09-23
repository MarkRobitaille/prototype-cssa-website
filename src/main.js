import Vue from 'vue'
import App from './App.vue'

// Add BootstrapVue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Add Vue Router
import VueRouter from 'vue-router'
// Get our routes
import routes from './routes'

// Add Axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// Add FontAwesome icons and component
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSlack, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Use BootstrapVue
Vue.use(BootstrapVue)

// Use VueRouter
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})
 
// Use Axios
Vue.use(VueAxios, axios)

// Create library of emoticons and use FontAwesomeIcon
library.add(faEnvelope, faSlack, faFacebookSquare, faInstagram)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
