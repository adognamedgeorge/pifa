<template>
  <div>
    <home-header :user="user"></home-header>
    <home-searcher :c="cartNum" :cat="category"></home-searcher>
    <home-poster :list="posterlist" :cat="category"></home-poster>
    <home-category></home-category>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSearcher from './components/Searcher'
import HomePoster from './components/Poster'
import HomeCategory from './components/Category'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSearcher,
    HomePoster,
    HomeCategory
  },
  data () {
    return {
      cartNum: '',
      user: {},
      category: [],
      posterlist: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cartNum = data.cartNum
        this.user = data.user
        this.category = data.category
        this.posterlist = data.posterlist
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/varible';
  .wrapper {
    width:$width;
    margin:0 auto;
    background-color:inherit;
  }
</style>
