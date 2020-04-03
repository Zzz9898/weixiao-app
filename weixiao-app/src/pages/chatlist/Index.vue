<template>
  <div style="height: 100%;">

    <van-sticky>
      <van-nav-bar
        title="消息"
      >
        <template #left>
          <van-image :src="avatar" width="32" height="32"/>
        </template>
        <template #right>
          <van-icon name="add-o" size="18" color="gray"/>
        </template>
      </van-nav-bar>

      <van-search v-model="value" shape="round" placeholder="请输入搜索关键词" />
    </van-sticky>

    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-swipe-cell v-for="item in chatList" :key="item.receiverId">
        <div class="contentItem animated fadeIn" style="display: flex;background: white;padding: 5px;" @click="toChat(item.receiverId, item.avatar, item.nickname)">
          <van-image round :src="item.avatar" class="contentItem-img" />
          <div class="contentItem-content">
            <h3 class="contentItem-publisher">{{item.nickname}}</h3>
            <p class="contentItem-more">{{item.lastMessage}}</p>
          </div>
          <div class="contentItem-time">
            2020-04-01 15:15
            <p style="padding: 0;margin: 0;">
              <van-tag round type="danger">1</van-tag>
            </p>
          </div>
        </div>
        <template #right>
          <van-button
            square
            text="删除"
            type="danger"
            class="delete-button"
            @click="deleteChatItem(item.receiverId)"
          />
        </template>
      </van-swipe-cell>
      <div class="van-list__finished-text">没有更多了</div>
    </van-pull-refresh>

  </div>
</template>

<script>
export default {
  name: 'ChatIndex',
  data () {
    return {
      value: '',
      id: this.$store.getters.id,
      avatar: this.$store.getters.faceImgMin,
      chatList: [],
      index: -1,
      isLoading: false
    }
  },
  methods: {
    deleteChatItem (receiverId) {
      this.chatList.map((item, ind) => {
        if (item.receiverId === receiverId) {
          this.index = ind
        }
      })
      if (this.index !== -1) {
        this.chatList.splice(this.index, 1)
        localStorage.setItem(this.id + '-chatList', JSON.stringify(this.chatList))
      }
    },
    onRefresh () {
      this.isLoading = true
      this.getChatList()
    },
    toChat (receiverId, avatar, nickname) {
      this.$router.push({
        name: 'Chat',
        params: {
          receiverId: receiverId,
          avatar: avatar,
          nickname: nickname
        }
      })
    },
    getChatList () {
      if (localStorage.getItem(this.id + '-chatList')) {
        const dataobj = [{
          receiverId: 99,
          avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
          nickname: 'nickname1',
          lastMessage: '消息消息',
          time: '2020-04-01 10:10:10'
        }, {
          receiverId: 98,
          avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
          nickname: 'nickname2',
          lastMessage: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
          time: '2020-04-01 10:10:18'
        }, {
          receiverId: 97,
          avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
          nickname: 'nickname3',
          lastMessage: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
          time: '2020-04-01 10:10:18'
        }, {
          receiverId: 96,
          avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
          nickname: 'nickname4',
          lastMessage: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
          time: '2020-04-01 10:10:18'
        }, {
          receiverId: 95,
          avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
          nickname: 'nickname5',
          lastMessage: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
          time: '2020-04-01 10:10:18'
        }]
        localStorage.setItem(this.id + '-chatList', JSON.stringify(dataobj))
      }
      this.chatList = JSON.parse(localStorage.getItem(this.id + '-chatList'))
      setTimeout(() => {
        this.isLoading = false
      }, 500)
    }
  },
  mounted: function () {
    this.getChatList()
  }
}
</script>

<style scoped>
.contentItem {
  padding: 12px !important;
}
.van-nav-bar__left >>> .van-image__img {
  margin-top: 12px;
}
.contentItem-content {
  text-align: left;
}
.contentItem-publisher {
  margin: 0;
  font-size: 14px;
  line-height: 20px;
}
.contentItem-more {
  margin: 2px 0 0 0;
  font-size: 14px;
  line-height: 20px;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}
.contentItem-img {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  margin-right: 8px;
}
.contentItem-time {
  text-align: right;
  margin-left: auto;
  font-size: 8px;
  line-height: 16px;
  flex-shrink: 0;
  width: 64px;
  bottom: 50px;
}
.delete-button {
  height: 100%;
}
.van-pull-refresh >>> .van-pull-refresh__track {
  padding-bottom: 50px;
}
.van-list__finished-text {
    color: #969799;
    font-size: 14px;
    line-height: 50px;
    text-align: center;
}
</style>
