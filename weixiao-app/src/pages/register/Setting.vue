<template>
  <div style="margin: 5px;">
    <van-form>
      <van-field name="switch" label="是否展示信息">
        <template #input>
          <span>否</span>&nbsp;
          <van-switch v-model="settingForm.isHide" size="20" @change="changeState"/>
          &nbsp;<span>是</span>
        </template>
      </van-field>
      <van-field name="switch" label="是否允许私聊">
        <template #input>
          <span>否</span>&nbsp;
          <van-switch v-model="settingForm.isChat" size="20" @change="change"/>
          &nbsp;<span>是</span>
        </template>
      </van-field>
      <van-field name="switch" label="是否展示性别">
        <template #input>
          <span>否</span>&nbsp;
          <van-switch v-model="settingForm.isSet" size="20" @change="change"/>
          &nbsp;<span>是</span>
        </template>
      </van-field>
      <van-field name="switch" label="是否显示院部">
        <template #input>
          <span>否</span>&nbsp;
          <van-switch v-model="settingForm.isAcademy" size="20" @change="change"/>
          &nbsp;<span>是</span>
        </template>
      </van-field>
    </van-form>
    <div style="margin: 16px;">
      <van-button round block type="info" plain @click="nextStep">
        下一步
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterSetting',
  data () {
    return {
      settingForm: {
        isHide: true,
        isChat: true,
        isSet: true,
        isAcademy: true
      }
    }
  },
  methods: {
    changeState (value) {
      console.log(value)
      this.settingForm.isChat = this.settingForm.isSet = this.settingForm.isAcademy = value
    },
    change (value) {
      if (this.settingForm.isChat === this.settingForm.isSet && this.settingForm.isSet === this.settingForm.isAcademy) {
        this.settingForm.isHide = value
      }
    },
    nextStep () {
      this.$emit('passSettingForm', this.settingForm)
      this.$parent.nextStep()
    }
  }
}
</script>

<style scoped>
.van-cell__value {
  margin-left: 10px;
}
span {
  margin: 2px;
}
form {
  margin-top: 30px !important;
}
</style>
