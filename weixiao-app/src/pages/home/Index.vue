<template>
  <div class="animated fadeIn">
    <home-swiper></home-swiper>

    <van-notice-bar
      color="#1989fa"
      background="#F8F8FF"
      left-icon="volume-o"
    >
      {{notice}}
    </van-notice-bar>

    <home-icon></home-icon>

  </div>
</template>

<script>
import HomeIcon from './Icon'
import HomeSwiper from './Swiper'
export default {
  name: 'HomeIndex',
  components: {
    HomeSwiper,
    HomeIcon
  },
  data () {
    return {
      notice: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    }
  }
}
</script>

<style>

</style>
