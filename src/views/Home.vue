<template>
  <div id="home">
    <!-- 轮播图 -->
    <home-banner :images="images"></home-banner>
    <!--精品推荐部分-->
    <!-- <div id="home_option">
      <ul>
        <li><a href="#">时事热点</a></li>
        <li><a href="#">帮扶溯源</a></li>
        <li><a href="#">紧急援助</a></li>
        <li><a href="#">帮扶热点</a></li>
        <li><a href="#">资金公示</a></li>
        <li><a href="#">援助公示</a></li>
      </ul>
    </div> -->
    <home-option></home-option>
  </div>
</template>

<script>
import HomeBanner from '@/components/home/HomeBanner'
import HomeOption from '@/components/home/HomeOption'
export default {
  name: 'home',
  components: {
    HomeBanner,
    HomeOption,
  },
  data() {
    return {
      images: [],
    }
  },
  methods: {
    getImages() {
      let requireModule = require.context('../assets/img', false, /\.jpg$/)
      let images = []
      for (var i = 0; i < requireModule.keys().length; i++) {
        images.push(
          require('../assets/img/' +
            requireModule.keys()[i].substr(2, requireModule.keys()[i].length))
        )
      }
      console.info(images)
      return images
    },
  },
  created() {
    this.images = this.getImages()
  },
}
</script>

<style scoped>
#home {
  background-color: #f9f9f9;
  padding-bottom: 20px;
}
</style>