<template>
  <div>
    <Header></Header>
    <Searcher></Searcher>
    <detail-imgzoom></detail-imgzoom>
    <detail-imgpages></detail-imgpages>
    <Footer></Footer>
  </div>
</template>

<script>
import DetailImgzoom from './components/Imgzoom'
import DetailImgpages from './components/Imgpages'
export default {
  name: 'Detail',
  components: {
    DetailImgzoom,
    DetailImgpages
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
