<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in list" :key="item.id" @click="getHotMore(item.id)">
        <van-image :src="item.url" fit="fill" width="100%" height="140"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      list: [{
        id: '1',
        url: 'http://192.168.190.234:8087/files/42/c43e9e3253b64eb59780bcf02d3c6c66-index-logo.jpg',
        title: 'logo'
      }, {
        id: '2',
        url: 'http://192.168.190.234:8087/files/42/c4993de07bd04fcf9e9ce1be67280efa-index-register.jpg',
        title: 'register'
      }, {
        id: '3',
        url: 'http://img.1ppt.com/uploads/allimg/1907/1_190718220558_1.jpg',
        title: 'other'
      }]
    }
  },
  methods: {
    getHotMore (id) {
      console.log(id)
    }
  }
}
</script>

<style>

</style>
