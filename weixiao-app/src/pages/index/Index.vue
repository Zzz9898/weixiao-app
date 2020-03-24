<template>
  <div style="padding: 5px;">
    <van-search v-model="valueContent" shape="round" background="#B0E0E6" placeholder="请输入搜索关键词" @search="searchContent" show-action>
      <template #action>
        <div style="line-height: normal;">
          <van-icon name="add-o" size="20"/>
        </div>
      </template>
    </van-search>

    <van-collapse v-model="activeNames">
      <van-collapse-item title="筛选" name="1">
        <van-dropdown-menu>
          <van-dropdown-item v-model="sex" :options="option" ref="sexDrop" @change="changeSex"/>
          <van-dropdown-item title="类别" ref="category">
            <van-checkbox-group v-model="result" direction="horizontal">
              <van-checkbox v-for="item in categories" :key="item.id" :name="item.id" shape="square">{{item.categoryName}}</van-checkbox>
            </van-checkbox-group>
            <van-button block type="info" @click="onConfirm">确认</van-button>
          </van-dropdown-item>
        </van-dropdown-menu>
      </van-collapse-item>
    </van-collapse>

    <van-tabs @click="clickDepartment" v-model="tabValue">
      <van-tab v-for="item in department" :title="item.abridge" :key="item.id">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            v-show="flag"
          >
            <van-skeleton title avatar :row="5" :loading="isShow" v-for="item in list" :key="item.id">
              <div class="contentItem" style="display: flex;margin-top: 5px;background: white;padding: 5px;">
                <img :src="item.avatar" class="contentItem-img" />
                <div class="contentItem-content">
                  <h3 class="contentItem-publisher">{{item.nickname}}</h3>
                  <p class="contentItem-more">{{item.content}}</p>
                  <van-grid :border="false" :column-num="3">
                    <van-grid-item v-for="(image, index) in item.images" :key="index" @click="clickImages(item.images)">
                      <van-image :src="image"/>
                    </van-grid-item>
                  </van-grid>
                </div>
              </div>
              <div style="background: white;text-align: right;padding-right: 15px;">
                <van-icon name="like-o" :badge="item.lookNum" style="margin-right: 5px;" color="red"/>
                <van-icon name="comment-o" color="#DEB887" @click="showComment = true"/>
              </div>
              <div style="text-align: right;background: white;padding-right: 5px;">
                <span class="contentItem-other">时间：{{item.releaseTime}}</span>
              </div>
            </van-skeleton>
          </van-list>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>

    <van-popup
      v-model="showComment"
      closeable
      position="bottom"
      :style="style">
      <van-list
        v-model="commentListLoading"
        :finished="commentFinished"
        finished-text="我是有底线的~"
        @load="commentOnLoad"
      >
        <van-skeleton
          title
          avatar
          :row="2"
          :loading="commentLoading"
          v-for="item in commentList"
          :key="item.id"
      >
          <div style="display: flex;margin-top: 5px;background: white;padding: 5px;">
            <img :src="item.avatar" class="comment-img" />
            <div class="comment-content">
              <h3 class="comment-publisher">{{item.nickname}}</h3>
              <p class="comment-more">{{item.content}}</p>
            </div>
          </div>
          <div style="text-align: right;background: white;padding-right: 5px;">
            <span class="comment-other">时间：{{item.releaseTime}}</span>
          </div>
        </van-skeleton>
      </van-list>
      <van-field
        v-model="commentMessage"
        type="textarea"
        maxlength="100"
        placeholder="请输入评论"
        clearable
        show-word-limit
      >
        <template #button>
          <van-button size="small" type="primary">评论</van-button>
        </template>
      </van-field>
    </van-popup>

  </div>
</template>

<script>
import { ImagePreview } from 'vant'
import Department from '@/resources/Department'
import { getCategory } from '@/api/category'
import { getContent } from './api/Content'
export default {
  name: 'ContentIndex',
  data () {
    return {
      flag: false,
      valueContent: '',
      result: [],
      resultInit: [],
      departmentId: '',
      sex: 0,
      pageIndex: 0,
      pageSize: 6,
      tabValue: 0,
      totalRecords: '',
      activeNames: [],
      department: Department,
      isShow: true,
      showComment: false,
      value: '',
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      categories: [],
      option: [
        { text: '全部', value: 0 },
        { text: '男', value: 1 },
        { text: '女', value: 2 }
      ],
      commentList: [{
        id: '1',
        studentId: '1',
        avatar: 'https://img.yzcdn.cn/vant/logo.png',
        nickname: '评论人',
        content: '内容内容内容内容内容内容内容',
        releaseTime: '2020-03-04 10:45:42'
      },
      {
        id: '2',
        studentId: '2',
        avatar: 'https://img.yzcdn.cn/vant/logo.png',
        nickname: '评论人',
        content: '内容内容内容内容内容内容内容',
        releaseTime: '2020-03-04 10:45:42'
      },
      {
        id: '3',
        studentId: '3',
        avatar: 'https://img.yzcdn.cn/vant/logo.png',
        nickname: '评论人',
        content: '内容内容内容内容内容内容内容',
        releaseTime: '2020-03-04 10:45:42'
      }],
      commentLoading: false,
      style: {
        height: '70%'
      },
      commentListLoading: false,
      commentFinished: true,
      commentPageIndex: 0,
      commentPageSize: 0,
      commentMessage: ''
    }
  },
  methods: {
    onLoad () {
      if (this.refreshing) {
        this.pageIndex = 0
        this.list = []
        this.refreshing = false
      }
      this.getContents()
    },
    getContents () {
      const props = {
        valuecontent: this.valueContent,
        sex: this.sex,
        category: this.result.join(','),
        departmentid: this.tabValue,
        pageindex: this.pageIndex,
        pagesize: this.pageSize
      }
      getContent(props).then(res => {
        this.list = this.list.concat(res.data.entities)
        this.totalRecords = res.data.totalRecords
        this.pageindex++
        this.loading = false
        this.isShow = false
        if (this.list.length >= this.totalRecords) {
          this.finished = true
        }
      })
    },
    searchContent () {
      this.clearProps()
      this.getContents()
    },
    onRefresh () {
      this.finished = false
      this.loading = true
      this.onLoad()
    },
    clickImages (images) {
      ImagePreview({
        images: images,
        closeable: true
      })
    },
    clickDepartment (values) {
      this.result = this.resultInit
      this.departmentId = values
      this.clearProps()
      this.getContents()
    },
    onConfirm () {
      this.clearProps()
      this.getContents()
      this.$refs.category.toggle()
    },
    changeSex () {
      this.clearProps()
      this.getContents()
      this.$refs.sexDrop.toggle(false)
    },
    async getCategory () {
      await getCategory().then(res => {
        const data = res.data.entities
        this.result = data.map(item => item.id)
        this.resultInit = this.result
        this.categories = data
        this.flag = true
        this.onLoad()
      })
    },
    clearProps () {
      this.pageIndex = 0
      this.list = []
      this.loading = true
      this.isShow = true
      this.finished = false
    },
    commentOnLoad () {
    }
  },
  mounted: function () {
    this.getCategory()
  }
}
</script>

<style scoped>
.contentItem-content {
  padding-top: 6px;
  text-align: left;
}
.contentItem-publisher {
  margin: 0;
  font-size: 14px;
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
.van-checkbox-group--horizontal {
  margin: 5px;
}
.van-skeleton {
  margin-top: 5px;
}
.comment-content {
  padding-top: 6px;
  text-align: left;
}
.comment-publisher {
  margin: 0;
  font-size: 14px;
  line-height: 20px;
}
.comment-more {
  margin: 8px 0 0;
  font-size: 14px;
  line-height: 20px;
}
.comment-img {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  margin-right: 16px;
}
.comment-other {
  font-size: 8px;
}
</style>

<style>
.van-grid-item__content {
  padding: 0;
}
.van-cell__title,.van-cell__value {
  text-align: left;
}
.van-collapse-item__content {
  padding: 0;
}
.van-list {
  margin-bottom: 50px;
}
</style>
