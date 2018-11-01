<template>
  <div>
    <Header></Header>
    <Searcher></Searcher>
    <Fixed></Fixed>
    <search-sorts :sortList="sortList" :brandList="brandList"></search-sorts>
    <search-category :sList="sList"></search-category>
    <search-pages></search-pages>
    <Ads></Ads>
    <Footer></Footer>
    <Scroll></Scroll>
  </div>
</template>

<script>
import SearchSorts from './components/Sorts'
import SearchCategory from './components/Category'
import SearchPages from './components/Pages'
import axios from 'axios'
export default {
  name: 'Search',
  data () {
    return {
      sList: []
    }
  },
  components: {
    SearchSorts,
    SearchCategory,
    SearchPages
  },
  methods: {
    getSearchInfo () {
      axios.get('/api/search.json')
        .then(this.getSearchInfoSucc)
    },
    getSearchInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sList = data.searchList
        this.sortList = data.sortList
        this.brandList = data.brandList
      }
    }
  },
  mounted () {
    this.getSearchInfo()
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/varible';
  .wrapper {
    width: $width;
    margin: 0 auto;
    background-color: inherit;
  }
</style>
