<template>
  <div class="slideshow">
    <el-card class="card">
      <div slot="header">
        <span>切换幻灯片</span>
      </div>
      <el-upload
        class="upload-box"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
        show-file-list
        list-type="picture"
        :file-list="fileList"
        accept=""
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传.doc、.docx格式文件</div>
      </el-upload>
    </el-card>
    <el-card class="card">
      <div slot="header">
        <span>切换速度修改</span>
      </div>
      <div>
        <div class="change-speed">
          <el-row gutter="16">
            <el-col span="7">
              <el-input v-model="speed" placeholder="请输入速度" />
            </el-col>
            <el-col :span="5">
              <el-button type="primary">更新</el-button>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [
        {
          name: 'food.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
        {
          name: 'food2.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
      ],
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
  },
}
</script>

<style scoped>
.slideshow {
  flex-wrap: wrap;
  padding-left: 20px;
  padding-top: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.card {
  width: 95%;
  margin-bottom: 5vh;
}
</style>