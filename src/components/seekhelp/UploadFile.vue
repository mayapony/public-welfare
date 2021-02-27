<template>
  <el-upload
    class="upload-box"
    drag
    action="https://jsonplaceholder.typicode.com/posts/"
    multiple
    show-file-list
    :file-list="fileList"
    accept=""
  >
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    <div class="el-upload__tip" slot="tip">只能上传.doc、.docx格式文件</div>
  </el-upload>
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
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3)
    },
  },
}
</script>

<style>
.el-upload__input {
  visibility: hidden;
}
.upload-box {
  width: 50%;
}
</style>