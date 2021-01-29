<template>
  <div id="app">
    <el-header id="nav">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-header">
            <button class="navbar-toggler" data-toggle="open-navbar1">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <!-- <a href="#">
              <h4>Awesome<span>logo</span></h4>
            </a> -->
            <img src="./assets/img/图标.png" alt="" />
          </div>
          <div class="navbar-menu" id="open-navbar1">
            <ul class="navbar-nav">
              <router-link tag="li" to="/home" active-class="active"
                ><a>首页</a></router-link
              >
              <!-- <router-link tag="li" to="/school" active-class="active"><a>师大公益</a></router-link> -->
              <router-link tag="li" to="/inquire" active-class="active"
                ><a>捐赠查询</a></router-link
              >
              <router-link tag="li" to="/donate" active-class="active"
                ><a>我要捐赠</a></router-link
              >
              <router-link tag="li" to="/login" active-class="active"
                ><a>登录</a></router-link
              >
              <!-- TODO 下拉选项 用于登录后展示个人信息 -->
              <!-- <li class="navbar-dropdown">
                <a
                  href="#"
                  class="dropdown-toggler"
                  data-dropdown="my-dropdown-id"
                >
                  Categories <i class="fa fa-angle-down"></i>
                </a>
                <ul class="dropdown" id="my-dropdown-id">
                  <li><a href="#">Actions</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li class="separator"></li>
                  <li><a href="#">Seprated link</a></li>
                  <li class="separator"></li>
                  <li><a href="#">One more seprated link.</a></li>
                </ul>
              </li> -->
              <!-- <li class="navbar-dropdown">
                <a href="#" class="dropdown-toggler" data-dropdown="blog">
                  Blog <i class="fa fa-angle-down"></i>
                </a>
                <ul class="dropdown" id="blog">
                  <li><a href="#">Some category</a></li>
                  <li><a href="#">Some another category</a></li>
                  <li class="separator"></li>
                  <li><a href="#">Seprated link</a></li>
                  <li class="separator"></li>
                  <li><a href="#">One more seprated link.</a></li>
                </ul>
              </li> -->
            </ul>
          </div>
        </div>
      </nav>
    </el-header>
    <router-view />
    <el-backtop></el-backtop>
  </div>
</template>

<style scoped>
@import url('./assets/css/navbar.css');
</style>
