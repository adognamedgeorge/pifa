<template>
  <div>
    <Header></Header>
    <Searcher></Searcher>
    <Fixed></Fixed>
    <home-poster :user="user">
    </home-poster>
    <home-bargain :list="specialPrice"></home-bargain>
    <home-category></home-category>
    <Ads></Ads>
    <Footer></Footer>
    <Scroll :list="categories"></Scroll>
  </div>
</template>

<script>
import HomePoster from './components/Poster'
import HomeBargain from './components/Bargain'
import HomeCategory from './components/Category'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomePoster,
    HomeBargain,
    HomeCategory
  },
  data () {
    return {
      user: {},
      specialPrice: [],
      categories: []
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
        this.specialPrice = data.specialPrice['products']
        this.categories = data.categories
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
    border: none !important;
    background-color: rgba(245,245,245,1) !important;
  }

  #search /deep/ .search_bar > .bar_section {
    background-color: white !important;
  }
  #search /deep/ .search_bar > .bar_section h2 {
    background-color: rgba(255,255,255,1) !important;
    color: rgba(51,51,51,1) !important;
    text-align: unset !important;
    text-indent: 20px;
    float: left;
  }
  #search /deep/ .search_bar > .bar_section:hover > ul {
    display: none !important;
  }
  #search /deep/ .search_logo {
    background-color: rgba(255,255,255,1);
  }
</style>
