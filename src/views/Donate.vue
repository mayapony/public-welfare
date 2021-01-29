<template>
  <div id="donate">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>我要捐赠</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="form-card" shadow="hover">
      <!-- <div slot="header">我要捐赠</div> -->
      <donate-notice></donate-notice>
      <el-divider></el-divider>
      <donate-online></donate-online>
      <el-divider></el-divider>
      <donate-bank></donate-bank>
    </el-card>
  </div>
</template>

<script>
import DonateNotice from '@/components/donate/DonateNotice'
import DonateOnline from '@/components/donate/DonateOnline'
import DonateBank from '@/components/donate/DonateBank'

export default {
  name: 'donate',
  components: {
    DonateNotice,
    DonateOnline,
    DonateBank,
  },
}
</script>

<style scoped>
.form-card {
  width: 85%;
  margin: 0 auto;
  margin-top: 2vh;
  padding: 20px;
}
#donate {
  padding-top: 20px;
  background-color: #f9f9f9;
  margin-bottom: 5vh;
}
html {
  background-color: #f9f9f9;
}
h2 {
  display: block;
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 10px;
  box-sizing: border-box;
  border-left: 5px solid #d71518;
  padding-left: 5px;
}
p {
  font-size: 1rem;
}
.red {
  color: #d71518;
}
.breadcrumb {
  margin-left: 8%;
  background-color: #f9f9f9;
}
</style>