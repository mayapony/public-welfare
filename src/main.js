import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import echarts from 'echarts'
import 'echarts/map/js/world.js'
import 'echarts/map/js/china.js'
import 'echarts/extension-src/bmap/bmap'

Vue.prototype.$echarts = echarts

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
