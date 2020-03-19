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
    <van-button v-show="showButton" type="default" size="mini" @click="nextStep" round plain color="#A9A9A9" class="stepButton">跳过</van-button>
    <register-user v-show="active === 0" class="animated bounceInRight"></register-user>
    <register-info v-show="active === 1" class="animated bounceInRight"></register-info>
    <div style="margin: 16px;" v-show="showButton">
      <van-button round block type="info" plain @click="nextStep">
        下一步
      </van-button>
    </div>
  </div>
</template>

<script>
import RegisterUser from './Register'
import RegisterInfo from './Info'
export default {
  name: 'Register',
  data () {
    return {
      active: 1,
      showButton: true
    }
  },
  components: {
    RegisterUser,
    RegisterInfo
  },
  methods: {
    nextStep () {
      this.showButton = true
      this.active = this.active + 1
      if (this.active >= 3) {
        this.showButton = false
      }
    }
  }
}
</script>

<style>
.stepButton {
  background: #F0F8FF;
  float: right;
  margin: 5px;
}
</style>
