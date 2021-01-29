<template>
  <div class="project-option">
    <el-carousel height="450px" type="card" arrow="never">
      <el-carousel-item v-for="item in 4" :key="item">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img
            src="https://crcf-website-photo.oss-cn-beijing.aliyuncs.com/attachment/20210127/deefeb0599694dfba4d708791e5aa193.jpg"
            class="image"
          />
          <div class="card-text">
            <p class="card-text-content">
              中国红基会防疫消杀志愿服务队在北京顺义、大兴开展防疫消杀工作
            </p>
            <div class="card-time">
              <p class="card-text-content">2021-01-27</p>
            </div>
          </div>
        </el-card>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content:
        '2021年1月22日，1名医务工作者获得中国红十字基金会字节跳动医务工作者人道救助基金（以下简称“医务人道救助基金”）提供的人道救助',
    }
  },
}
</script>

<style scoped>
.image {
  padding: 10px;
  margin-bottom: 1vh;
  width: 100%;
  display: block;
}

.card-text-content {
  width: 100%;
  display: block;
  text-align: center;
  line-height: 1.6rem;
  margin-bottom: 0;
}
.card-text {
  text-align: center;
}
.card-time {
  margin: 0;
  padding-top: 1vh;
  display: inline-block;
  border-top: 1px solid #000;
}
</style>