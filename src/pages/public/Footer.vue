<template>
  <div id="footer">
    <div class="wrapper">
      <div class="footer-info">
        <p class="footer-tel">加盟咨询热线：<i>400-069-2666</i></p>
        <p class="footer-link">
          <a href="">批发平台</a>
          <a href="">零售商城</a>
          <a href="">蚂蚁小店</a>
          <a href="">区域加盟</a>
          <a href="">供应商合作</a>
        </p>
        <p class="footer-add">公司地址：浙江省杭州市拱墅区祥符街道祥园路108号中国智慧信息产业园3期G座2号楼5楼</p>
        <p class="footer-copy">Copyright&#169;2014-2017版权归浙江云之涞网络科技有限公司所有<span>网站备案/许可证号：湘ICP备14000706号-1</span></p>
      </div>
      <div class="footer-login">
        <a href=""><img src="http://www.yunmayi.com/image/app.png"/><p>云蚂蚁app</p></a>
        <a href=""><img src="http://www.yunmayi.com/image/weixin.jpg"/><p>微信公众号</p></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/varible.scss';
  #footer {
    height:120px;
    padding-top:30px;
    padding-bottom:30px;
    overflow:hidden;
    background-color:$bgColor3;
    box-shadow:0 -1px 0 0 rgba(230,45,45,1);
    @extend %wrapper;
    .footer-info {
      display:inline-block;
      .footer-tel {
        font-size:20px;
        color:rgba(51,51,51,1);
        height:24px;
        line-height:24px;
        margin-bottom:20px;
        i {
          color:rgba(230,45,45,1);
        }
      }
      .footer-link {
        height:20px;
        line-height:20px;
        overflow:hidden;
        margin-bottom:10px;
        a {
          font-size:16px;
          display:inline-block;
          padding-right:40px;
          color:rgba(51,51,51,1);
          float:left;
        }
        a:hover {
          color:red;
        }
      }
      .footer-add,.footer-copy {
        height:18px;
        line-height:18px;
        font-size:14px;
        color:rgba(153,153,153,1);
        margin-bottom:10px;
      }
      .footer-copy span {
        padding-left:30px;
      }

    }
    .footer-login {
      float:right;
      display:inline-block;
      a {
        display:inline-block;
        width:80px;
        height:108px;
        margin-left:20px;
        font-size:14px;
        color:rgba(153,153,153,1);
        text-align:center;
        img {
          width:100%;
          display:inline-block;
        }
        p {
          padding-top:8px;
          height:20px;
          line-height:20px;
        }
      }
    }
  }
</style>
