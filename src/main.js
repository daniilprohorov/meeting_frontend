import Vue from 'vue'
// import Config from './Config.vue'
// import Result from './Result.vue'
import Main from './Main.vue'
import VueMaterial from 'vue-material'
import VueGlobalVar from 'vue-global-var'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import router from "./routes"
import axios from 'axios'
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios)
Vue.use(VueMaterial)
Vue.use(VueGlobalVar, {
  globals: {
    $config: null
  },
})
Vue.config.productionTip = false
// new Vue({
//   render: h => h(App),
// }).$mount('#app')



// const NotFound = { template: '<p>Страница не найдена</p>' }
// const Home = { template: '<p>главная</p>' }
// const About = { template: '<p>о нас</p>' }

new Vue({
  router,
  render: h => h(Main),

  created () {
      // config
    let config = {
      'city' : '',
      'categories' : [],
      'mon' : [],
      'tue' : [],
      'wed' : [],
      'thu' : [],
      'fri' : [],
      'sat' : [],
      'sun' : [],
      'days' : 1
    }
    if (localStorage.getItem('config') === null) {
      localStorage.setItem('config', JSON.stringify(config))
    }
    this.$config = JSON.parse(localStorage.getItem('config'))
  }
}).$mount('#app')

