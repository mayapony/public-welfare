import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BMap from 'vue-bmap-gl'
import 'vue-bmap-gl/dist/style.css'
import ElementUI from 'element-ui'
import '@/assets/css/element-#EC4646/index.css'

import echarts from 'echarts'
import 'echarts/map/js/world.js'
import 'echarts/map/js/china.js'
import 'echarts/extension-src/bmap/bmap'

Vue.prototype.$echarts = echarts

Vue.use(ElementUI)
Vue.use(BMap)
BMap.initBMapApiLoader({
  // 百度的key
  ak: '3tCmxvp72Y4nu56BjwawIKisQ7jrPCyM',
  // 百度 sdk 版本，默认为 1.0
  v: '1.0',
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
