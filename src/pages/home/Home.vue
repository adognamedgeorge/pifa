<template>
  <div>
    <home-header></home-header>
    <home-searcher></home-searcher>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSearcher from './components/Searcher'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSearcher
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/varible.styl';
  .wrapper {
    width:$width;
    margin:0 auto;
    background-color:inherit;
  }
</style>
