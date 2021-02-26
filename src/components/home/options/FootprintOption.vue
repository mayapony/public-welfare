<template>
  <div class="footprint-option">
    <echarts class="echarts-box" />
    <el-collapse v-model="activeNames" @change="handleChange" class="container">
      <el-collapse-item name="1">
        <template slot="title">
          <p class="title">财务信息</p>
        </template>
        <p>
          累计公益收入总额：<span class="red">62.78亿元</span
          >(数据截至2019年12月31号)
        </p>
        <el-divider />
        <p>
          2021年 年度收入：<span class="red">48766247.10元</span>
          (数据截至2021年02月04日)
        </p>
        <el-divider />
        <p>
          2019年 年度收入：<span class="red">761292440.71元</span>
          公益支出：<span class="red">696699876.95</span>元
        </p>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import Echarts from '@/components/echarts/Echarts'

export default {
  name: 'footprint-option',
  components: {
    Echarts,
  },
  data() {
    return {
      activeNames: ['1'],
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
    },
  },
}
</script>

<style scoped>
.footprint-option {
  line-height: 1.6rem;
  background-color: #d1d1d1;
  /* display: flex;
  justify-content: space-evenly; */
}
.container {
  position: absolute;
  z-index: inherit;
  bottom: 5px;
  right: 20px;
  width: 33%;
}
.el-collapse.container {
  padding: 0;
}
.el-collapse.container p {
  margin: 0 10px;
  font-size: 12px;
}
span .red {
  color: red;
  font-weight: bold;
}
div .el-divider.el-divider--horizontal {
  margin: 5px auto;
  width: 94%;
}
p .title {
  font-weight: bold;
}
</style>