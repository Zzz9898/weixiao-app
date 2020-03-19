<template>
  <div>
    <van-image
      fit="contain"
      src="./static/images/index-register.jpg"
    />
    <van-steps
      :active="active"
      active-icon="success"
      active-color="#38f"
      style="text-align: justify;"
    >
      <van-step>账号密码</van-step>
      <van-step>个人信息</van-step>
      <van-step>其他设置</van-step>
      <van-step>注册完成</van-step>
    </van-steps>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style>

</style>
