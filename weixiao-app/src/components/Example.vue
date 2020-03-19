<template>
  <div style="text-align: justify;">
    <van-steps :active="active">
      <van-step>买家下单</van-step>
      <van-step>商家接单</van-step>
      <van-step>买家提货</van-step>
      <van-step>交易完成</van-step>
    </van-steps>
  </div>
</template>

<script>
export default {
  name: 'Example',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style>

</style>
