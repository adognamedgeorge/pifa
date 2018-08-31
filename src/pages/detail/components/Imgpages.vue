<template>
  <div class="wrapper">
    <header>
      <h3>商品详情</h3>
    </header>
    <section>
      <img src=""/>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DetailImgpages'
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/varible.scss';
  div {
    header {
      height:30px;
      margin-bottom:30px;
      border-bottom:2px solid rgba(230,45,45,1);
      h3 {
        width:100px;
        line-height:30px;
        font-size:16px;
        text-align:center;
        color:$bgColor3;
        background-color:rgba(230,45,45,1);
        font-weight:normal;
      }
    }
    section {padding-bottom:1%;}
  }
</style>
