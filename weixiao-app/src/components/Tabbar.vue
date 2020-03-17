<template>
  <div id="app">
    <van-tabbar v-model="active"
    active-color="#07c160"
    inactive-color="#000">
      <van-tabbar-item name="home" icon="home-o" to="/">
        <span>首页1</span>
      </van-tabbar-item>
      <van-tabbar-item name="search" icon="search"  to="/index">
        <span>首页2</span>
      </van-tabbar-item>
      <van-tabbar-item name="find" icon="eye-o">首页3</van-tabbar-item>
      <van-tabbar-item name="chat" icon="chat-o">首页3</van-tabbar-item>
      <van-tabbar-item name="setting" icon="setting-o">首页4</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  data () {
    return {
      active: 'home'
    }
  }
}
</script>

<style>

</style>
