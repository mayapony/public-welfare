<template>
  <el-row class="tac">
    <el-col :span="4">
      <el-menu
        router
        class="menu-box"
        :default-active="$route.path"
        @open="handleOpen"
        @close="handleClose"
        background-color="#263445"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="/admin/slideshow">
          <i class="el-icon-picture"></i>
          <span slot="title">轮播图替换</span>
        </el-menu-item>
        <el-menu-item index="/admin/manuscript">
          <i class="el-icon-document-copy"></i>
          <span slot="title">文稿替换</span>
        </el-menu-item>
        <el-menu-item index="/admin/drafts">
          <i class="el-icon-delete-solid"></i>
          <span slot="title">草稿箱</span>
        </el-menu-item>
        <el-menu-item index="/admin/edit">
          <i class="el-icon-document-add"></i>
          <span slot="title">文稿编写</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <router-view></router-view>
  </el-row>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>>

<style scoped>
.navbar {
  height: 100vh;
}
.menu-box {
  height: 100vh;
  margin: 0;
}
</style>