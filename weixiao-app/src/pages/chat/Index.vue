<template>
  <div>
    <van-sticky>
      <van-nav-bar
        :title="receiverNickname"
        left-arrow
        @click-left="onClickLeft"
      />
    </van-sticky>

    <div style="padding-bottom: 0px;">
      <div class="chatBox-content" ref="container">
          <div class="chatBox-content-demo" id="chatBox-content-demo">

            <div v-for="(item, index) in chatHistory" :key="index" class="clearfloat">
              <div class="author-name">
                <small class="chat-date">{{item.dateTime}}</small>
              </div>

              <div v-if="item.type === 1" class="left">
                <div class="chat-avatars"><img :src="receiverAvatar" alt="头像"/></div>
                <div class="chat-message">
                  <van-image v-if="item.chatType === 3" :src="item.content" />
                  <span v-else>{{item.content}}</span>
                </div>
              </div>

              <div v-else class="right">
                <div class="chat-message">
                  <van-image v-if="item.chatType === 3" :src="item.content" />
                  <span v-else>{{item.content}}</span>
                </div>
                <div class="chat-avatars"><img :src="myAvatar" alt="头像"/></div>
              </div>
            </div>

              <!-- <div class="clearfloat">
                  <div class="author-name">
                      <small class="chat-date">2017-12-02 14:26:58</small>
                  </div>
                  <div class="right">
                      <div class="chat-message">嗯，适合做壁纸</div>
                      <div class="chat-avatars"><img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="头像"/></div>
                  </div>
              </div>
              <div class="clearfloat">
                  <div class="author-name">
                      <small class="chat-date">2017-12-02 14:26:58</small>
                  </div>
                  <div class="left">
                      <div class="chat-avatars"><img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="头像"/></div>
                      <div class="chat-message">
                          给你看张图
                      </div>
                  </div>
              </div>

              <div class="clearfloat">
                  <div class="author-name">
                      <small class="chat-date">2017-12-02 14:26:58</small>
                  </div>
                  <div class="left">
                      <div class="chat-avatars"><img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="头像"/></div>
                      <div class="chat-message">
                          给你看张图给你看张图给你看张图给你看张图给你看张图给你看张图给你看张图给你看张图给你看张图给你看张图给你看张图给你看张图给你看张图
                      </div>
                  </div>
              </div>
              <div class="clearfloat">
                  <div class="author-name">
                      <small class="chat-date">2017-12-02 14:26:58</small>
                  </div>
                  <div class="left">
                      <div class="chat-avatars"><img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="头像"/></div>
                      <div class="chat-message">
                          给你看张图
                      </div>
                  </div>
              </div>
              <div class="clearfloat">
                  <div class="author-name">
                      <small class="chat-date">2017-12-02 14:26:58</small>
                  </div>
                  <div class="left">
                      <div class="chat-avatars"><img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="头像"/></div>
                      <div class="chat-message">
                          给你看张图
                      </div>
                  </div>
              </div>
              <div class="clearfloat">
                  <div class="author-name">
                      <small class="chat-date">2017-12-02 14:26:58</small>
                  </div>
                  <div class="left">
                      <div class="chat-avatars"><img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="头像"/></div>
                      <div class="chat-message">
                          给你看张图
                      </div>
                  </div>
              </div>
              <div class="clearfloat">
                  <div class="author-name">
                      <small class="chat-date">2017-12-02 14:26:58</small>
                  </div>
                  <div class="left">
                      <div class="chat-avatars"><img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="头像"/></div>
                      <div class="chat-message">
                          给你看张图
                      </div>
                  </div>
              </div>

              <div class="clearfloat">
                  <div class="author-name">
                      <small class="chat-date">2017-12-02 14:26:58</small>
                  </div>
                  <div class="left">
                      <div class="chat-avatars"><img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="头像"/></div>
                      <div class="chat-message">
                          <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" alt=""/>
                      </div>
                  </div>
              </div>

              <div class="clearfloat">
                  <div class="author-name">
                      <small class="chat-date">2017-12-02 14:26:58</small>
                  </div>
                  <div class="right">
                      <div class="chat-message">嗯，适合做壁纸</div>
                      <div class="chat-avatars"><img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="头像"/></div>
                  </div>
              </div> -->

              <div style="height: 72px;"></div>

          </div>
      </div>
    </div>

    <div class="bottomInput" :class="{'nav-hide': hideClass }">

      <van-field
        v-model="message"
        rows="1"
        :autosize="inputSize"
        type="textarea"
        right-icon="smile-o"
        placeholder=""
        @focus="scrollFocus"
        @blur="scrollBlur"
        @keyup.27="scrollBlur"
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
  name: 'ChatPage',
  data () {
    return {
      show: false,
      message: '',
      myAvatar: '',
      receiverNickname: '',
      receiverId: '',
      receiverAvatar: '',
      inputSize: {
        maxHeight: 60,
        minHeight: 20
      },
      hideClass: false,
      chatHistory: [{
        type: 1,
        chatType: 1,
        content: '给你看张图',
        dateTime: '2017-12-02 14:26:58'
      }, {
        type: 1,
        chatType: 1,
        content: '给你看张图给你看张图给你看张图给你看张图给你看张图给你看张图给你看张图给你看张图给你看张图给你看张图给你看张图给你看张图给你看张图',
        dateTime: '2017-12-02 14:26:58'
      }, {
        type: 1,
        chatType: 1,
        content: '给你看张图',
        dateTime: '2017-12-02 14:26:58'
      }, {
        type: 1,
        chatType: 1,
        content: '给你看张图',
        dateTime: '2017-12-02 14:26:58'
      }, {
        type: 1,
        chatType: 1,
        content: '给你看张图',
        dateTime: '2017-12-02 14:26:58'
      }, {
        type: 1,
        chatType: 1,
        content: '给你看张图',
        dateTime: '2017-12-02 14:26:58'
      }, {
        type: 1,
        chatType: 3,
        content: 'https://img.yzcdn.cn/vant/cat.jpeg',
        dateTime: '2017-12-02 14:26:58'
      }, {
        type: 2,
        chatType: 1,
        content: '嗯，适合做壁纸',
        dateTime: '2017-12-02 14:26:58'
      }]
    }
  },
  updated () {
    this.$nextTick(function () {
      this.$refs.container.scrollTop = this.$refs.container.scrollHeight
    })
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    scrollFocus (e) {
      this.scrollToBottom()
      this.hideClass = true
    },
    scrollBlur (e) {
      this.hideClass = false
    },
    getReceiverInfo () {
      this.myAvatar = this.$route.params.myAvatar
      this.receiverId = this.$route.params.receiverId
      this.receiverNickname = this.$route.params.nickname
      this.receiverAvatar = this.$route.params.avatar
    },
    scrollToBottom () {
      this.$nextTick(() => {
        document.documentElement.scrollTop = this.$refs.container.scrollHeight
      })
    }
  },
  mounted: function () {
    this.getReceiverInfo()
    this.scrollToBottom()
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
  bottom: 72px !important;
}
</style>

<style scoped>
.chatBox-content{
    width: 100%;
}
.chatBox-content-demo{
    width: 100%;
    overflow-y: scroll;
    padding-bottom: 44px;
}
.clearfloat:after{
    display:block;
    clear:both;
    content:"";
    visibility:hidden;
    height:0
}
.clearfloat{
    zoom:1;
    margin: 10px 10px;
}
.clearfloat .right{
    float: right;
}
.author-name{
    text-align: center;
    margin: 15px 0 5px 0;
    color: #888;
}

.clearfloat .chat-message{
    max-width: 252px;
    text-align: left;
    padding: 8px 12px;
    border-radius: 6px;
    word-wrap:break-word;
    display: inline-block;
    position: relative;
}

.clearfloat .left .chat-message{
    background: #D9D9D9;
    min-height: 24px;
}
.clearfloat .left .chat-message:before{
    position: absolute;
    content: "";
    top: 8px;
    left: -6px;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid #D9D9D9;
}

.clearfloat .right{
    text-align: right;
}
.clearfloat .right .chat-message{
    background: #8c85e6;
    color: #fff;
    text-align: left;
    min-height: 24px;
}
.clearfloat .right .chat-message:before{
    position: absolute;
    content: "";
    top: 8px;
    right: -6px;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid #8c85e6;
}

.clearfloat .chat-avatars{
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #eee;
    vertical-align: top;
    overflow: hidden;
}
.clearfloat .chat-avatars>img{
    width: 30px;
    height: 30px;
}
.clearfloat .left .chat-avatars{
    margin-right: 10px;
}
.clearfloat .right .chat-avatars{
    margin-left: 10px;
}
.left {
  text-align: left;
}
</style>
