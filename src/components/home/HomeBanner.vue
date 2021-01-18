<template>
  <div class="home_banner">
    <el-carousel height="480px">
      <el-carousel-item v-for="item in images" :key="item">
        <!-- <div><img :src="item" alt="轮播图" /></div> -->
        <el-image style="" :src="item" fit="cover"> </el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props: ["images"],
};
</script>

<style>
@import url("../../assets/css/home/banner.css");
</style>