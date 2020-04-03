<template>
  <div>
    <van-nav-bar
      title="设置中心"
    />

    <div style="background: white;">
      <van-image :src="avatar" width="100" height="100" class="avatar"/>
    </div>

    <div class="thingItems">
      <van-grid :border="false" :column-num="3">
        <van-grid-item
          icon="star"
          text="1"
        />
        <van-grid-item
          icon="coupon"
          text="3"
        />
        <van-grid-item
          icon="flag-o"
          text="2"
        />
      </van-grid>
    </div>

    <div class="cellItems">
      <van-cell title="个人信息" is-link />
      <van-cell title="设置" is-link />
      <van-cell title="举报中心" is-link />
      <van-cell title="反馈" is-link />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingIndex',
  data () {
    return {
      avatar: this.$store.getters.faceImgMin
    }
  },
  mounted: function() {
  }
}
</script>

<style scoped>
.avatar {
  padding-top: 30px;
  padding-bottom: 15px;
}
.van-grid >>>.van-icon-star {
  color: red;
}
.van-grid >>>.van-icon-flag-o {
  color: #00a0ff;
}
.van-grid >>>.van-icon-coupon {
  color: #ffc060;
}
.cellItems {
  text-align: left;
}
</style>
