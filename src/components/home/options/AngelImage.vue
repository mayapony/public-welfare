<template>
  <div id="angel-image">
    <el-card class="card-box" shadow="hover" v-for="item in 3" :key="item">
      <div class="content">
        <el-image
          src="https://gitee.com/mayapony/pic-dog/raw/master/imgs/微信图片_20210203095607.png"
        ></el-image>
        <p class="describe_text">“抗疫”血浆 生命火种</p>
        <hr class="text_divider" />
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style scoped>
#angel-image {
  display: flex;
  justify-content: space-around;
}

.card-box {
  width: 30%;
  margin-bottom: 10px;
}

.describe_text {
  margin: 0;
  line-height: 1.6rem;
}

.text_divider {
  margin: 5px 0;
  width: 15%;
  border: 1px solid red;
  background-color: red;
}
</style>