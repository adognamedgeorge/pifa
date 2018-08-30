<template>
  <div>
    <Header></Header>
    <Searcher></Searcher>
    <detail-imgzoom></detail-imgzoom>
    <Footer></Footer>
  </div>
</template>

<script>
import DetailImgzoom from './components/Imgzoom'
export default {
  name: 'Detail',
  components: {
    DetailImgzoom
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/varible.scss';
  .wrapper {
    width:$width;
    margin:0 auto;
    background-color:inherit;
  }
</style>
