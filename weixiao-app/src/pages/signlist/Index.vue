<template>
  <div style="padding: 5px;">
    <van-nav-bar
      title="报名列表"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-field v-model="title" label="活动标题" readonly/>

    <van-field v-model="numText" label="人员列表" readonly/>

    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-row v-for="item in list" :key="item.id">
          <van-col span="8">
            <van-image round :src="item.avatar" />
          </van-col>
          <van-col span="8">
            {{item.academyName}}
          </van-col>
          <van-col span="8">
            {{item.truename}}
          </van-col>
        </van-row>
      </van-list>
    </van-pull-refresh>

  </div>
</template>

<script>
import { getSignList } from './api/signList'
export default {
  name: 'SignList',
  data () {
    return {
      title: 'title',
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      totalRecords: 0
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onLoad () {
      // if (this.refreshing) {
      //   this.pageIndex = 0
      //   this.list = []
      //   this.refreshing = false
      // }
      // this.signList()
    },
    onRefresh () {
      this.finished = false
      this.loading = true
      this.onLoad()
    },
    signList () {
      const paras = {
        id: this.$store.getters.id,
        pageindex: this.pageIndex,
        pagesize: this.pageSize
      }
      getSignList(paras).then(res => {
        this.list = res.data.entities
        this.totalRecords = res.data.totalRecords
        this.pageIndex++
        this.loading = false
        if (this.list.length >= this.totalRecords) {
          this.finished = true
        }
      })
    },
    initData () {
    }
  },
  computed: {
    numText () {
      return '共' + this.totalRecords + '人'
    }
  },
  mounted () {
    this.initData()
  }
}
</script>

<style scoped>

</style>
