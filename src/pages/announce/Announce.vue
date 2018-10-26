<template>
  <div id="main">
    <Header></Header>
    <Searcher></Searcher>
    <Fixed></Fixed>
    <announce-notice :url.sync="url"></announce-notice>
    <Footer></Footer>
  </div>
</template>

<script>
import AnnounceNotice from './components/Notice'
import axios from 'axios'
export default {
  name: 'Announce',
  data () {
    return {
      url: ''
    }
  },
  components: {
    AnnounceNotice
  },
  methods: {
    getAnceInfo () {
      axios.get('/api/announce.json')
        .then(this.getAnceInfoSucc)
    },
    getAnceInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.url = data.url
      }
    }
  },
  mounted () {
    this.getAnceInfo()
  }
}
</script>

<style lang="scss" scoped>
  #main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
