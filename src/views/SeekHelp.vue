<template>
  <div class="seek-help">
    <el-tabs tab-position="left" class="tab-box" stretch type="border-card">
      <el-tab-pane label="申请表"><application /></el-tab-pane>
      <el-tab-pane label="提交文件"><upload-file /></el-tab-pane>
      <el-tab-pane label="申请记录"><apply-history /></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ApplyHistory from '@/components/seekhelp/ApplyHistory'
import Application from '@/components/seekhelp/Application'
import UploadFile from '@/components/seekhelp/UploadFile.vue'
export default {
  name: 'seek-help',
  components: {
    ApplyHistory,
    Application,
    UploadFile,
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