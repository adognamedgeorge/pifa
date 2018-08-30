<template>
  <div>
    <Header></Header>
    <Searcher></Searcher>
    <search-sorts></search-sorts>
    <search-category></search-category>
    <Ads></Ads>
    <Footer></Footer>
    <Scroll></Scroll>
  </div>
</template>

<script>
import SearchSorts from './components/Sorts'
import SearchCategory from './components/Category'
export default {
  name: 'Search',
  components: {
    SearchSorts,
    SearchCategory
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
