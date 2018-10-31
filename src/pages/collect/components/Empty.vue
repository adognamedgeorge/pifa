<template>
  <div>
    <!--收藏为空-->
    <section class="section3">
      <h1>收藏中心空空的，快去收藏喜爱的商品吧</h1>
      <a href="" target="_blank">去看看</a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CollectEmpty'
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/varible.scss';
.section3 {
  box-shadow: 0 -1px 0 0 rgba(242, 242, 242, 1);
  width: 500px;
  height: 134px;
  padding-top: 273px;
  background: $Sprite;
  background-position: -565px -65px;
  margin: 81px auto 0 auto;
  h1 {
    color: rgba(217, 217, 217, 1);
    font-size: 26px;
    font-weight: normal;
    height: 64px;
    line-height: 64px;
    margin-bottom: 20px;
  }
  a {
    background-color: rgba(230, 45, 45, 1);
    height: 50px;
    width: 180px;
    display: block;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    color: $color;
    margin: 0 auto;
  }
}
</style>
