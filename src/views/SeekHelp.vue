<template>
  <div class="seek-help">
    <el-tabs tab-position="left" class="tab-box" stretch type="border-card">
      <el-tab-pane label="申请表">申请表</el-tab-pane>
      <el-tab-pane label="证明文件">证明文件</el-tab-pane>
      <el-tab-pane label="流程查询">流程查询</el-tab-pane>
      <el-tab-pane label="申请记录"><apply-history /></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ApplyHistory from '@/components/seekhelp/ApplyHistory'
export default {
  name: 'seek-help',
  components: {
    ApplyHistory,
  },
}
</script>

<style scoped>
.seek-help {
  width: 90%;
  margin: 0 auto;
}

.tab-box {
  height: 100vh;
  margin-bottom: 5vh;
}
</style>