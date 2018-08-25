<template>
  <div id="line">
    <div class="wrapper">
      <div class="line-img-box">
          <img src="http://pifa.yunmayi.com/statics/images/index/0502.jpg"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeAds'
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/varible.scss';
  #line {
    background-color:$color;
    @extend %wrapper;
    .line-img-box {
      height:84px;
      padding-top:8px;
      padding-bottom:8px;
        img {
          width:100%;
        }
    }
  }
</style>
