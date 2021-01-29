<template>
  <div id="home_option">
    <el-tabs v-model="activeName" class="option_box">
      <el-tab-pane name="notice">
        <span slot="label"><span class="option">公告公示</span></span>
        <notice-option></notice-option>
      </el-tab-pane>
      <el-tab-pane name="record">
        <span slot="label"><span class="option">人道纪实</span></span>
        <record-option></record-option>
      </el-tab-pane>
      <el-tab-pane name="project">
        <span slot="label"><span class="option">公益项目</span></span>
        <project-option></project-option>
      </el-tab-pane>
      <el-tab-pane name="footprint">
        <span slot="label"><span class="option">天使足迹</span></span>
        <echarts></echarts>
      </el-tab-pane>
      <el-tab-pane name="image">
        <span slot="label"><span class="option">天使影像</span></span>
        天使影像
      </el-tab-pane>
      <el-tab-pane name="more">
        <span slot="label"><span class="option last">更多信息</span></span>
        更多信息
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import NoticeOption from '@/components/home/options/NoticeOption'
import RecordOption from '@/components/home/options/RecordOption'
import ProjectOption from '@/components/home/options/ProjectOption'
import Echarts from '@/components/Echarts'
export default {
  name: 'home-option',
  components: {
    NoticeOption,
    RecordOption,
    ProjectOption,
    Echarts,
  },
  data() {
    return {
      activeName: 'notice',
    }
  },
  methods: {},
}
</script>

<style scoped>
@import url('../../assets/css/home/option.css');
</style>