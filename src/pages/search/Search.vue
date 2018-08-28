<template>
  <div>
    <Header></Header>
    <Searcher></Searcher>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'Search'
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
