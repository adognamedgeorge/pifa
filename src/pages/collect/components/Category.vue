<template>
  <div id="collect">
    <div class="wrapper">
        <section class="section1">
          <header>
            <label tabindex="1">全部商品</label>
            <label tabindex="2">失效商品</label>
            <ul>
              <li><input type="checkbox" style="float:left;margin-right:4px;margin-top:17px;height:16px;width:16px;"/>全部</li>
              <li>删除</li>
              <li>批量进货</li>
              <li class="button">批量管理</li>
            </ul>
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
            </ul>
          </div>
        </section>

        <section class="section2" style="display:none">
            <h1>收藏中心空空的，快去收藏喜爱的商品吧</h1>
            <a href="" target="_blank">去看看</a>
        </section>

        <section class="section3">
          <span>共选择4件</span>
          <a href="">批量进货</a>
        </section>
      </div>

      <footer>
        <div class="footer1">
          <div class="wrapper">
            <span>共选择4件</span>
            <a href="">批量进货</a>
          </div>
        </div>
      </footer>
  </div>
</template>

<script>
export default {
  name: 'CollectCategory'
}
</script>

<style lang="scss" scoped>
  body,html {height:100%;}
  @import '~@/assets/styles/varible.scss';
    #collect {
      @extend %wrapper;
      .section1 {
        header {
          height:50px;
          line-height:50px;
          margin-bottom:20px;
          box-shadow:0 1px 0 0 rgba(242,242,242,1);
          -webkit-box-shadow:0 1px 0 0 rgba(242,242,242,1);
          label {
            width:102px;
            color:rgba(51,51,51,1);
            font-size:16px;
            margin-right:21px;
            display:inline-block;
            text-align:center;
          }
          label:focus {
            color:rgba(230,45,45,1);
            border:yellow;
            background:red;
          }
          ul {
            display:inline-block;
            float:right;
            li {
              float:left;
              margin-left:20px;
              color:rgba(153,153,153,1);
              font-size:14px;
              position:relative;
            }
            li:nth-child(2),li:nth-child(3) {padding-left:20px;}
            li:nth-child(2)::before,li:nth-child(3)::before {
              position:absolute;
              content:'';
              background:$Sprite;
              height: 20px;
              width: 20px;
              left: -4px;
              bottom: 13px;
            }
            li:nth-child(2)::before {background-position:-437px 0;}
            li:nth-child(3)::before {background-position:-490px 0;}
            li:last-child {
              width:78px;height:28px;
              border:1px solid rgba(153,153,153,1);
              text-align:center;
              line-height:28px;
              margin-top:10px;
            }

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
            .item-box:hover {transform:unset;box-shadow:unset;}
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

      .section3 {
        height:50px;
        line-height:50px;
        border:1px solid rgba(242,242,242,1);
        span {
          color:rgba(51,51,51,1);
          font-size:16px;
        }
        a {
          display:inline-block;
          background:rgba(230,45,45,1);
          width:120px;
          float:right;
          color:$color;
          text-align:center;
        }
      }

      footer {
        height:50px;
        width:100%;
        padding-top:20px;
        position:fixed;
        left:0;
        bottom:0;
        .footer1 {
          box-shadow:0 -4px 10px 0 rgba(153,153,153,0.1);
          .wrapper {
            height:50px;
            line-height:50px;
            visibility:hidden;
            span {
              color:rgba(51,51,51,1);
              font-size:16px;
            }
            a {
              display:inline-block;
              background:rgba(230,45,45,1);
              width:120px;
              float:right;
              color:$color;
              text-align:center;
            }
          }
        }
      }
      footer:hover {
        .wrapper {visibility:visible;}
      }
    }
</style>
