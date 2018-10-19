<template>
  <div id="line">
    <div class="wrapper">
      <div class="line_img_box">
        <img src="http://pifa.yunmayi.com/statics/images/index/0502.jpg"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ads'
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/varible.scss';
  #line {
    background-color:$bgColor2;
    overflow:hidden;
    @extend %wrapper;
    .line_img_box {
      height: 84px;
      padding-top: 8px;
      padding-bottom: 8px;
      img {
        /*width:100%;*/
      }
    }
  }
</style>
