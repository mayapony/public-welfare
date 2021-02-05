<template>
  <div ref="map" id="map-box" style="height: 600px; width: 1024px"></div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china'
import 'echarts/extension/bmap/bmap'
import loadBMap from './load'
import option from '../../public/data'
export default {
  name: 'echarts',
  data() {
    return {
      myCharts: undefined,
    }
  },
  mounted() {
    loadBMap('3tCmxvp72Y4nu56BjwawIKisQ7jrPCyM').then(() => {
      // 配置option
      this.myCharts = echarts.init(this.$refs.map)
      this.myCharts.setOption(option)
    })
  },
}
</script>

<style scoped>
</style>