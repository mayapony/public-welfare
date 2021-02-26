<template>
  <div class="navbar">
    <el-menu
      :router="true"
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="/home">首页</el-menu-item>
      <el-submenu index="">
        <template slot="title">捐赠</template>
        <el-menu-item index="/donate">我要捐赠</el-menu-item>
        <el-menu-item index="/inquire">我要查询</el-menu-item>
      </el-submenu>
      <el-menu-item index="/seekhelp">我要求助</el-menu-item>
      <el-menu-item index="/login">登录</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>

<style scoped>
.navbar {
  padding: 0;
  border: none;
}
.el-menu-demo {
  width: 100%;
  background-color: #f2f2f2;
  border: none;
}
.el-menu {
}
</style>