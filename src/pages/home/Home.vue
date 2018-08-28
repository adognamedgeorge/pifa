<template>
  <div>
    <Header></Header>
    <Searcher></Searcher>
    <home-poster :list="posterlist" :cat="category"></home-poster>
    <home-bargain></home-bargain>
    <home-category></home-category>
    <home-ads></home-ads>
    <Footer></Footer>
    <home-scroll></home-scroll>
  </div>
</template>

<script>
import HomePoster from './components/Poster'
import HomeBargain from './components/Bargain'
import HomeCategory from './components/Category'
import HomeAds from './components/Ads'
import HomeScroll from './components/Scroll'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomePoster,
    HomeBargain,
    HomeCategory,
    HomeAds,
    HomeScroll
  },
  data () {
    return {
      posterlist: [],
      category: []
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
