<template>
  <div style="padding: 5px;">
    <van-search v-model="value" shape="round" background="#B0E0E6" placeholder="请输入搜索关键词" />
    <van-tabs @click="clickDepartment" v-model="tabValue">
      <van-tab v-for="item in department" :title="item.abridge" :key="item.id">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <van-skeleton title avatar :row="4" :loading="false" v-for="item in list" :key="item.contentId">
              <div class="contentItem" style="margin: 5px;">
                <img :src="item.avatar" class="contentItem-img" />
                <div class="contentItem-content">
                  <h3 class="contentItem-publisher">{{item.nickname}}</h3>
                  <p class="contentItem-more">{{item.content}}</p>
                  <van-grid :border="false" :column-num="3">
                    <van-grid-item v-for="(image, index) in item.images" :key="index" @click="clickImages">
                      <van-image :src="image"/>
                    </van-grid-item>
                  </van-grid>
                </div>
              </div>
              <div style="text-align: right;">
                <span class="contentItem-other">时间：{{item.releaseTime}}</span>
              </div>
            </van-skeleton>
          </van-list>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { ImagePreview } from 'vant'
import Department from '@/resources/Department'
export default {
  name: 'ContentIndex',
  data () {
    return {
      tabValue: '',
      value: '',
      department: Department,
      list: [{
        id: '1',
        contentId: '1',
        avatar: 'https://img.yzcdn.cn/vant/logo.png',
        nickname: '发布人',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
        releaseTime: '2020-03-04 10:45:42',
        images: [
          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3014871590,1877513669&fm=26&gp=0.jpg',
          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3014871590,1877513669&fm=26&gp=0.jpg',
          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3014871590,1877513669&fm=26&gp=0.jpg',
          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3014871590,1877513669&fm=26&gp=0.jpg']
      }, {
        id: '2',
        contentId: '2',
        avatar: 'https://img.yzcdn.cn/vant/logo.png',
        nickname: '发布人2',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
        releaseTime: '2020-03-04 10:45:42',
        images: [
          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3014871590,1877513669&fm=26&gp=0.jpg',
          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3014871590,1877513669&fm=26&gp=0.jpg',
          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3014871590,1877513669&fm=26&gp=0.jpg',
          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3014871590,1877513669&fm=26&gp=0.jpg']
      }],
      loading: false,
      finished: false,
      refreshing: false
    }
  },
  methods: {
    onLoad () {
      this.finished = true
    },
    onRefresh () {
      // 清空列表数据
      this.finished = false

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
    },
    clickImages () {
      ImagePreview({
        images: [
          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3014871590,1877513669&fm=26&gp=0.jpg',
          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3014871590,1877513669&fm=26&gp=0.jpg'
        ],
        closeable: true
      })
    },
    clickDepartment (values, title) {
      console.log(this)
      console.log(values, title)
      console.log(this.tabValue)
    }
  }
}
</script>

<style scoped>
.contentItem {
    display: flex;
}
.contentItem-content {
  padding-top: 6px;
  text-align: left;
}
.contentItem-publisher {
  margin: 0;
  font-size: 18px;
  line-height: 20px;
}
.contentItem-more {
  margin: 8px 0 0;
  font-size: 14px;
  line-height: 20px;
}
.contentItem-img {
flex-shrink: 0;
width: 32px;
height: 32px;
margin-right: 16px;
}
.contentItem-other {
  font-size: 8px;
}
</style>

<style>
.van-grid-item__content {
  padding: 0;
}
</style>
