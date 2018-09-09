<template>
  <div>
    <Header></Header>
    <Searcher></Searcher>
    <home-poster :list="posterList"
                 :cat="category"
                 :user="user"
                 :acc="account"
                 :cou="couponNum"
                 :notice="noticeList">
    </home-poster>
    <home-bargain :list="recommend"></home-bargain>
    <home-category-i :cat="category"></home-category-i>
    <home-category-i-i></home-category-i-i>
    <home-category-i-i-i></home-category-i-i-i>
    <home-category-i-v></home-category-i-v>
    <home-category-v></home-category-v>
    <home-category-v-i></home-category-v-i>
    <home-category-v-i-i></home-category-v-i-i>
    <home-category-v-i-i-i></home-category-v-i-i-i>
    <home-category-i-x></home-category-i-x>
    <Ads></Ads>
    <Footer></Footer>
    <Scroll></Scroll>
  </div>
</template>

<script>
import HomePoster from './components/Poster'
import HomeBargain from './components/Bargain'
import HomeCategoryI from './components/CategoryI'
import HomeCategoryII from './components/CategoryII'
import HomeCategoryIII from './components/CategoryIII'
import HomeCategoryIV from './components/CategoryIV'
import HomeCategoryV from './components/CategoryV'
import HomeCategoryVI from './components/CategoryVI'
import HomeCategoryVII from './components/CategoryVII'
import HomeCategoryVIII from './components/CategoryVIII'
import HomeCategoryIX from './components/CategoryIX'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomePoster,
    HomeBargain,
    HomeCategoryI,
    HomeCategoryII,
    HomeCategoryIII,
    HomeCategoryIV,
    HomeCategoryV,
    HomeCategoryVI,
    HomeCategoryVII,
    HomeCategoryVIII,
    HomeCategoryIX
  },
  data () {
    return {
      user: {},
      account: {},
      couponNum: '',
      posterList: [],
      noticeList: [],
      category: [],
      recommend: {}
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/home.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.user = data.user
        this.account = data.account
        this.couponNum = data.couponNum
        this.posterList = data.posterList
        this.noticeList = data.noticeList
        this.category = data.category
        this.recommend = data.recommend
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="scss" scoped>
  #search {
    border:none !important;
    background-color:rgba(245,245,245,1) !important;
  }

  #search /deep/ .search_bar>h2 {
    background-color:rgba(255,255,255,1) !important;
    color:rgba(51,51,51,1) !important;
    text-align:unset !important;
    text-indent:20px;
  }
  #search /deep/ .search_logo {
    background-color:rgba(255,255,255,1);
  }
</style>
