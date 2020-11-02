import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'echarts'
import VueECharts from 'vue-echarts'
// import { VueAxios } from './utils/request'
// import mockData from '../static/mock.json'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.component('v-chart', VueECharts)
// Vue.use(VueAxios)
// window.mockData = mockData

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
