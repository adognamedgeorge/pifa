<template>
  <div>
    <Header></Header>
    <Searcher></Searcher>
    <announce-notice></announce-notice>
  </div>
</template>

<script>
import AnnounceNotice from './components/Notice'
export default {
  name: 'Announce',
  components: {
    AnnounceNotice
  }
}
</script>

<style scoped>

</style>
