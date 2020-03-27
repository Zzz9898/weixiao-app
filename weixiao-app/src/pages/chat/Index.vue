<template>
  <div>
    <van-nav-bar
      :title="receiverNickname"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="bottomInput" id="bottomInput" ref="input" :class="{'nav-hide': hideClass }">

      <van-field
        v-model="message"
        rows="1"
        autosize
        type="textarea"
        right-icon="smile-o"
        placeholder=""
        @focus="scrollFocus"
        @blur="scrollBlur"
      >
        <template #button>
          <van-button type="default" round size="mini" v-show="message === ''">+</van-button>
          <van-button type="info" round size="mini" v-show="message !== ''">发送</van-button>
        </template>
      </van-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatIndex',
  data () {
    return {
      show: false,
      message: '',
      receiverNickname: '接收者',
      receiverId: '',
      hideClass: false// 显示或者隐藏footer
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    scrollFocus (e) {
      this.hideClass = true
    },
    scrollBlur (e) {
      this.hideClass = false
    }
  },
  mounted: function () {
  }
}
</script>

<style scoped>
.bottomInput {
  position: fixed;
  bottom: 0;
  width: 100%;
  overflow:visible;
}
.van-button--mini {
  min-width: 40px;
}
.nav-hide {
  bottom: 80px !important;
}
</style>
