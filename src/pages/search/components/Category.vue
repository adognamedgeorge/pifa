<template>
  <div id="ca-main" class="wrapper">
    <div class="sm-recorder">
      <a href="">默认</a>
      <a href="">销量<i class="re-bg1"> </i></a>
      <a href="">价格<i class="re-bg2"> </i></a>
      <div>
        共<span>888</span>个商品
      </div>
    </div>

    <div class="search-item-box">
      <ul>
        <li class="item-box">
          <a class="item-bg"> </a>
          <div class="item-img">
            <a href="" target="_blank"><img src="http://i8.yunmayi.com/upload/2015/04/30/7b948795d28a540658f4fc6f6da26950.jpgXXXXX!!!!!_300x300.jpg"/></a>
          </div>
          <div class="item-title">
            <a href="" target="_blank">百事可乐碳酸饮料汽水，夏天必备夏</a>
          </div>
          <div class="item-price">
            <i>￥</i><strong>47.9</strong>/箱
            <span>规格:330ml*24瓶</span>
          </div>
          <div class="item-action">
            <a href="javascript:;">-</a>
            <input type="text" value="1" data-min="1"/>
            <a href="javascript:;">+</a>
            <a href="">进货</a>
          </div>
        </li>
        <li class="item-box">
          <a class="item-bg active"> </a>
          <div class="item-img">
            <a href="" target="_blank"><img src="http://i8.yunmayi.com/upload/2015/04/30/7b948795d28a540658f4fc6f6da26950.jpgXXXXX!!!!!_300x300.jpg"/></a>
          </div>
          <div class="item-title">
            <a href="" target="_blank">百事可乐碳酸饮料汽水，夏天必备夏</a>
          </div>
          <div class="item-price">
            <i>￥</i><strong>47.9</strong>/箱
            <span>规格:330ml*24瓶</span>
          </div>
          <div class="item-action">
            <a href="javascript:;">-</a>
            <input type="text" value="1" data-min="1"/>
            <a href="javascript:;">+</a>
            <a href="">进货</a>
          </div>
        </li>
      </ul>
    </div>

    <div class="search-pages">
      <ul>
        <li><a href="">上一页</a></li>
        <li><a href="">1</a></li>
        <li><a href="">2</a></li>
        <li><a href="">3</a></li>
        <li><a href="">4</a></li>
        <li><a href="">5</a></li>
        <li class="pages-dots">…</li>
        <li><a href="">126</a></li>
        <li><a href="">127</a></li>
        <li><a href="">下一页</a></li>
      </ul>
      <span>共127页，到<input type="text" placeholder="1"/>页<button>确定</button></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchCategory'
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/varible.scss';
  #ca-main {
    //background-color:$bgColor2;
    padding-top:30px;
    padding-bottom:30px;
    //@extend %wrapper;
    .sm-recorder {
      height:26px;
      background-color:rgba(245,245,245,1);
      margin-bottom:20px;
      padding:7px 10px;
      a {
        float:left;
        font-size:14px;
        color:rgba(153,153,153,1);
        display:inline-block;
        width:70px;
        height:26px;
        background:$color;
        text-align:center;
        line-height:26px;
        border:1px solid rgba(230,230,230,1);
        i {
          display:inline-block;
          width:16px;
          height:18px;
          vertical-align:middle;
          background:$Sprite;
        }
        .re-bg1 {background-position:-456px 0;}
        .re-bg2 {background-position:-473px 0;}
      }
      a:first-child {width:60px;}

      div {
        float:right;
        border:1px solid rgba(230,230,230,1);
        background-color:$color;
        min-width:82px;
        padding:0 9px;
        height:26px;
        font-size:14px;
        line-height:26px;
        color:rgba(153,153,153,1);
        text-align:center;
      }
    }

    .search-item-box {
      ul {
        display:inline-block;
        margin-bottom:10px;
        @extend %item;
        .item-box {
          margin-bottom:10px;
          margin-left:10px;
        }
        .item-box:nth-child(5n+1) {
          margin-left:0;
        }
      }
    }

    .search-pages {
      height:40px;
      ul {
        margin:0 auto;
        width:690px;
        li {
          float:left;
          width:40px;
          height:40px;
          line-height:40px;
          font-size:14px;
          text-align:center;
          color:rgba(51,51,51,1);
          border:1px solid rgba(230,230,230,1);
          a {
            display:block;
            width:100%;
            height:100%;
            color:rgba(51,51,51,1);
          }
        }
        li:first-child,li:last-child {width:80px;}
        li:nth-child(n+2) {border-left:none;}
        .pages-dots {border:none;border-right:1px solid rgba(230,230,230,1);}
      }
      span {
        margin-left:17px;
        height:40px;
        line-height:40px;
        color:rgba(153,153,153,1);
        font-size:14px;
        input {
          width:40px;
          height:40px;
          color:rgba(51,51,51,1);
          text-align:center;
          border:1px solid rgba(230,230,230,1);
          margin:0 5px;
        }
        button {
          border:1px solid rgba(230,230,230,1);
          background-color:$color;
          width:50px;
          height:40px;
          margin-left:5px;
          cursor:pointer;
          outline:none;
        }
        button:active {
          opacity:.5;
          filter:Alpha(opacity=50);
        }
      }
    }
  }
</style>
