<template>
  <div id="app">
    <nav-bar v-if="$route.path != '/admin'"></nav-bar>
    <router-view />
    <el-backtop></el-backtop>
  </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar.vue'
export default {
  name: 'app',
  components: {
    NavBar,
  },
}
</script>

<style scoped>
@import url('./assets/css/navbar.css');
</style>
