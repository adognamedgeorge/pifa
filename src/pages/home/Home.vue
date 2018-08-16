<template>
  <div>
    <home-header></home-header>
    <home-searcher :c="cartNum"></home-searcher>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSearcher from './components/Searcher'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSearcher
  },
  data () {
    return {
      cartNum: ''
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
