<template>
  <div id="login">
    <el-main height="">
      <div class="wrapper">
        <form class="form-signin">       
          <h2 class="form-signin-heading">注册账户</h2>
          <input type="text" class="form-control" name="username" placeholder="账号" required="true" autofocus="true" />
          <input type="password" class="form-control" name="password" placeholder="密码" required="true"/>      
          <input type="password" class="form-control" name="confirm-password" placeholder="确认密码" required="true"/>     
          <!-- <label class="checkbox"> -->
            <!-- <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"> 记住我 -->
          <!-- </label> -->
          <button class="btn btn-lg btn-primary btn-block" type="submit">确认注册</button>
          <div class="message">
            <p>已有账户？</p>
            <router-link to='/login'>去登陆</router-link>
          </div>
        </form>
      </div>
      <!-- Main content -->
    </el-main>
    
  </div>
</template>
<script>
export default {
  name: "register",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
@import url('../assets/css/login.css');
</style>