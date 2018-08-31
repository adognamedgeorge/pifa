<template>
  <div>
    <Header></Header>
    <Searcher></Searcher>
    <collect-category></collect-category>
  </div>
</template>

<script>
import CollectCategory from './components/Category'
export default {
  name: 'Collect',
  components: {
    CollectCategory
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
