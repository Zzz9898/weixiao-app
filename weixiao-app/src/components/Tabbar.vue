<template>
  <div id="app">
    <van-tabbar v-model="active"
    active-color="#07c160"
    inactive-color="#000">
      <van-tabbar-item name="home" icon="home-o" to="/">
        <span>首页1</span>
      </van-tabbar-item>
      <van-tabbar-item name="search" icon="search">
        <span>首页2</span>
      </van-tabbar-item>
      <van-tabbar-item name="find" icon="eye-o" to="/index">
        <span>发现</span>
      </van-tabbar-item>
      <van-tabbar-item name="chat" icon="chat-o" to="/success">
        <span>首页4</span>
      </van-tabbar-item>
      <van-tabbar-item name="setting" icon="setting-o">
        <span>首页5</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  data () {
    return {
      active: 'find'
    }
  },
  methods: {
    getItemShow () {
      const name = this.$route.path
      console.log(name)
      if (name === '/home') {
        this.active = 'home'
      } else if (name === '/search') {
        this.active = 'search'
      } else if (name === '/index') {
        this.active = 'find'
      }
    }
  },
  mounted: function () {
    this.getItemShow()
  }
}
</script>

<style>

</style>
