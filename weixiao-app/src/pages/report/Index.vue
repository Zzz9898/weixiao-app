<template>
  <div style="margin: 5px;">
    <van-nav-bar
      title="举报管理"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
export default {
  name: 'Report',
  data () {
    return {
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>
