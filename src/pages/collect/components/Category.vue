<template>
  <div id="collect" class="wrapper">
    <section class="section1">
      <header>
        <label tabindex="0">全部商品</label>
        <label>失效商品</label>
        <input type="checkbox"/>
        <button>批量管理</button>
      </header>
      <div class="search-item-box">
        <ul>
          <li class="item-box">
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
    </section>

    <section class="section2">
        <h1>收藏中心空空的，快去收藏喜爱的商品吧</h1>
        <a href="" target="_blank">去看看</a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CollectCategory'
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/varible.scss';
    #collect {
      .section1 {
        header {
          height:50px;
          line-height:50px;
          margin-bottom:20px;
          box-shadow:0 1px 0 0 rgba(242,242,242,1);
          label {
            width:102px;
            color:rgba(51,51,51,1);
            font-size:16px;
            margin-right:21px;
            display:inline-block;
            text-align:center;
          }
          label:focus {
            border-bottom:2px solid red;
            color:rgba(230,45,45,1);
          }
          button {
            float:right;
            border:1px solid rgba(153,153,153,1);
            width:80px;height:30px;
            font-size:14px;
            color:rgba(153,153,153,1);
            margin-top:10px;
          }
        }
        .search-item-box {
          ul {
            margin-bottom:10px;
            display:inline-block;
            @extend %item;
            .item-box {
              margin-bottom:10px;
              margin-left:10px;
              border:1px solid rgba(242,242,242,1);
              width:228px;
            }
            .item-box:nth-child(5n+1) {
              margin-left:0;
            }
          }
        }
      }

      .section2 {
        width:500px;
        height:134px;
        padding-top:273px;
        background:$Sprite;
        background-position:-565px -65px;
        margin:81px auto 0 auto;
        h1 {
          color:rgba(217,217,217,1);
          font-size:26px;
          font-weight:normal;
          height:64px;
          line-height:64px;
          margin-bottom:20px;
        }
        a {
          background-color:rgba(230,45,45,1);
          height:50px;
          width:180px;
          display:block;
          text-align:center;
          line-height:50px;
          font-size:20px;
          color:$color;
          margin:0 auto;
        }
      }
    }
</style>
