<template>
  <div>
    <Header></Header>
    <Searcher></Searcher>
    <collect-category :list="list"></collect-category>
  </div>
</template>

<script>
import CollectCategory from './components/Category'
import axios from 'axios'
export default {
  name: 'Collect',
  components: {
    CollectCategory
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    getColtInfo () {
      axios.get('/api/collect.json')
        .then(this.getColtInfoSucc)
    },
    getColtInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.list = data.collectList
      }
    }
  },
  mounted () {
    this.getColtInfo()
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
