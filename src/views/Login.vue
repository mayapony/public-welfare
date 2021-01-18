<template>
  <div id="login">
    <el-main height="">
      <div class="wrapper">
        <form class="form-signin">       
          <h2 class="form-signin-heading">请登录</h2>
          <input type="text" class="form-control" name="username" placeholder="账号" required="true" autofocus="true" />
          <input type="password" class="form-control" name="password" placeholder="密码" required="true"/>
          <!-- <label class="checkbox"> -->
            <!-- <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"> 记住我 -->
          <!-- </label> -->
          <button class="btn btn-lg btn-primary btn-block" type="submit">登录</button>   
          <div class="message">
            <router-link to='/forget'>忘记密码</router-link>|
            <router-link to='/register'>注册账号</router-link>
          </div>
        </form>
      </div>
      <!-- Main content -->
    </el-main>
    
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
@import url('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
@import url('../assets/css/login.css');
</style>