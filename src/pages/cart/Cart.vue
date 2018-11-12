<template>
  <div id="cart">
    <Header></Header>
    <Searcher :logoFont="logoFont"></Searcher>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      logoFont: '购物车'
    }
  }
}
</script>

<style lang="scss" scoped>
#cart /deep/ .search_img {
  display: none;
}
#cart /deep/ .search_cart {
  display: none;
}
#cart /deep/ .search_bar {
    display: none;
  }
#cart /deep/ .search_form {
  float: right !important;
  overflow: hidden;
}
#cart /deep/ .logo_font {
  img {
    display: none;
  }
}
#cart /deep/ .logo_text {
  display: block !important;
}
</style>
