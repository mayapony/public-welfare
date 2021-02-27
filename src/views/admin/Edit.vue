<template>
  <el-card class="edit">
    <el-row :gutter="20" type="flex" justify="space-between">
      <el-col :span="10">
        <el-input v-model="title" placeholder="请输入标题"></el-input>
      </el-col>
      <el-col>
        <el-button type="prime">保存至草稿箱</el-button>
      </el-col>
    </el-row>
    <editor class="editor-box" height="500px" />
  </el-card>
</template>

<script>
import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor.css'

import { Editor } from '@toast-ui/vue-editor'

export default {
  data() {
    return {
      title: '',
    }
  },
  components: {
    Editor,
  },
}
</script>

<style scoped>
.edit {
  margin-top: 5vh;
  width: 80%;
  margin-left: 18%;
}
.editor-box {
  margin-top: 2vh;
}
</style>