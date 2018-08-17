<template>
  <div id="header" class="wrapper">
    <p class="h-left">
      <a href="">云蚂蚁官网</a>Hi,<a href="" class="active">{{this.user['name']}}</a><a href="">退出</a>
    </p>

    <div class="h-right">
      <ul>
        <li><a href="">批发首页</a></li>
        <li><a href="">会员中心</a></li>
        <li><a href="">当面付申请</a></li>
        <li><a href="">快递代收</a></li>
        <li><a href="">进货单</a></li>
        <li><a href="">收藏夹</a></li>
        <li><a href="">帮助中心</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    user: Object
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/varible.scss';
  #header {
    height:30px;
    font-size:12px;
    text-align:center;
    line-height:30px;
    @extend %wrapper;
  .h-left {
    float:left;
    padding-left:0;
    color:rgba(102,102,102,1);
  a {
    color:rgba(102,102,102,1);
    padding-right:20px;
  }
  a.active {
    color:rgba(230,45,45,1);
    text-indent:4px;
    display:inline-block;
  }
  }
  .h-right {
    float:right;
    padding-right:0;

  li {
    display:inline-block;
    float:left;
    padding-left:20px;
  a {
    color:rgba(102,102,102,1);
  }
  }
  }
  }

</style>
