<template>
  <div id="record-option">
    <el-card>
      <el-row
        type="flex"
        justify="space-around"
        v-for="o in 4"
        :key="o"
        class="box-row"
      >
        <el-col :span="7" v-for="o in 3" :key="o">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img
              src="https://crcf-website-photo.oss-cn-beijing.aliyuncs.com/attachment/20210127/deefeb0599694dfba4d708791e5aa193.jpg"
              class="image"
            />
            <div class="card-text">
              <p>
                中国红基会防疫消杀志愿服务队在北京顺义、大兴开展防疫消杀工作
              </p>
              <div class="card-time"><p>2021-01-27</p></div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<style scoped>
.box-row {
  margin-bottom: 2vh;
}

.image {
  padding: 10px;
  margin-bottom: 1vh;
  width: 100%;
  display: block;
}

.card-text p {
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