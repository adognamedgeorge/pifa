<template>
  <div id="slider" class="wrapper">
    <div class="mulu">
      <!--<h2>全部商品分类</h2>-->
      <div class="list">
        <ul>
          <li>
            <div class="list-a">
              <a href="">酒水饮料</a><a href="">饮料</a><a href="">啤酒</a><a href="">果酒</a>
            </div>

            <div class="mulu-hide">
              <p>食品零食</p>
              <div>
                <a href="">膨化食品</a>
                <a href="">饼干点心</a>
                <a href="">方便食品</a>
                <a href="">干果蜜饯</a>
                <a href="">糖果巧克力</a>
                <a href="">早餐食品</a>
                <a href="">进口食品</a>
                <a href="">麻辣食品</a>
                <a href="">散称专区</a>
              </div>
            </div>
          </li>
          <li>
            <div class="list-a">
              <a href="">酒水饮</a><a href="">饮料</a><a href="">啤酒</a><a href="">果酒</a>
            </div>
            <div class="mulu-hide">
              <p>酒水饮料</p>
              <div>
                <a href="">一二三四</a>
                <a href="">饼干点心</a>
                <a href="">方便食品的</a>
                <a href="">干果蜜饯酒</a>
                <a href="">糖果巧克力</a>
              </div>
            </div>
          </li>
          <li>
            <div class="list-a">
              <a href="">酒水饮料</a><a href="">饮料</a><a href="">啤酒</a><a href="">果酒</a>
            </div>
            <div class="mulu-hide">
              <p>生活电器</p>
              <div>
                <a href="">膨食品</a>
                <a href="">饼干心</a>
                <a href="">方便食品的</a>
                <a href="">干果蜜饯</a>
                <a href="">糖果巧克力</a>
                <a href="">早餐食品</a>
                <a href="">进口食品的</a>

              </div>
            </div>
          </li>
          <li>
            <div class="list-a">
              <a href="">酒水饮料</a><a href="">饮料</a><a href="">啤酒</a><a href="">果酒</a>
            </div>
            <div class="mulu-hide">
              <p>运动户外</p>
              <div>
                <a href="">糖果巧克力</a>
                <a href="">早餐食品</a>
                <a href="">麻辣的食品</a>
                <a href="">散称专区</a>
              </div>
            </div>
          </li>
          <li>
            <div class="list-a">
              <a href="">酒水饮料</a><a href="">饮料</a><a href="">啤酒</a><a href="">果酒</a>
            </div>
            <div class="mulu-hide">
              <p>影音书籍</p>
              <div>
                <a href="">膨化食品</a>
                <a href="">饼干点心</a>
                <a href="">方便食品</a>
                <a href="">干果蜜饯</a>
                <a href="">糖果巧克力</a>
                <a href="">早餐食品</a>
              </div>
            </div>
          </li>
          <li>
            <div class="list-a">
              <a href="">酒水饮</a><a href="">饮料</a><a href="">啤酒</a><a href="">果酒</a>
            </div>
            <div class="mulu-hide">
              <p>成人用品</p>
              <div>
                <a href="">糖果巧克力</a>
                <a href="">早餐食品</a>
                <a href="">进口食品</a>
                <a href="">麻辣品</a>
                <a href="">散称区</a>
              </div>
            </div>
          </li>
          <li>
            <div class="list-a">
              <a href="">酒水饮料</a><a href="">饮料</a><a href="">啤酒</a><a href="">果酒</a>
            </div>
            <div class="mulu-hide">
              <p>当季流行</p>
              <div>
                <a href="">膨化食品</a>
                <a href="">饼干点心</a>
                <a href="">早餐食品</a>
                <a href="">进口食品</a>
                <a href="">麻辣食品</a>
                <a href="">散称专区</a>
              </div>
            </div>
          </li>
          <li>
            <div class="list-a">
              <a href="">酒水饮料</a><a href="">饮料</a><a href="">啤酒</a><a href="">果酒</a>
            </div>
            <div class="mulu-hide">
              <p>医药保健</p>
              <div>
                <a href="">饼干点心</a>
                <a href="">方便食品</a>
                <a href="">干果蜜饯</a>
                <a href="">早餐食品</a>
                <a href="">进口食品</a>
                <a href="">麻辣食品</a>
              </div>
            </div>
          </li>
          <li>
            <div class="list-a">
              <a href="">酒水饮料</a><a href="">饮料</a><a href="">啤酒</a><a href="">果酒</a>
            </div>

            <div class="mulu-hide">
              <p>家纺家饰</p>
              <div>
                <a href="">膨化食品</a>
                <a href="">饼干点心</a>
                <a href="">散称专区</a>
              </div>
            </div>
          </li>
        </ul>
      </div>

    </div>

    <div class="lunbo">
      <div class="lunbo-img">
        <swiper :option="swiperOption" v-if="showSwiper">
          <swiper-slide v-for="item of list" :key="item.sort">
            <a :href="item.link" target="_blank"><img :src="item.img"/></a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>

      <ul class="list-li"> </ul>
    </div>

    <div class="ads">
      <div class="ad1">
        <div class="ad1-img"><img src=""/></div>
        <div class="ad1-text">
          <h3>Hi, <a href="" class="active">云蚂蚁1234</a></h3>
          <p>签到可领取200积分</p>
        </div>
        <button><a>签到</a></button>
      </div>
      <ul class="ads-ul">
        <li><h3>1314.59</h3><a href="">余额</a></li>
        <li><h3>4</h3><a href="">优惠券</a></li>
        <li><h3>182310</h3><a href="">积分</a></li>
      </ul>
      <div class="ad2">
        <ul>
          <li><a class="ad-bg1" href="">会员中心</a></li>
          <li><a class="ad-bg2" href="">领券中心</a></li>
          <li><a class="ad-bg3" href="">积分兑换</a></li>
        </ul>
      </div>
      <div class="ad3">
        <div class="ad-t">
          <h3>公告</h3>
          <a class="gengduo" href="">更多<i></i></a>
        </div>
        <div class="ad-b">
          <ul>
            <li><a href="">8月爆品预售来袭</a></li>
            <li><a href="">【通知】6月27日订单配送通知</a></li>
            <li><a href="">法丽兹系列调价通知</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePoster',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        paginationClickable: true,
        coverflow: {
          rotate: 30,
          stretch: 10,
          depth: 60,
          modifier: 2,
          slideShadows: true
        }
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/varible.scss';
  #slider {
    height: 330px;
    margin-bottom: 10px;
    display: flex;
    display:-ms-flexbox;
    .mulu {
      width: 230px;
      height: 330px;
      position:relative;
      .list {
        background-color: $color;
        height: 324px;
        padding-top: 6px;
        ul li {
          .list-a {
            height: 36px;
            line-height: 36px;
            a {
              font-size: 14px;
              padding-right: 12px;
              color: rgba(153, 153, 153, 1);
            }
            a:first-child {
              display: inline-block;
              width: 56px;
              color: rgba(51, 51, 51, 1);
              padding-left: 20px;
            }
            a:hover {
              color: rgba(254, 229, 61, 1) !important;
            }
          }
          .list-a:hover {
            background-color: rgba(230, 45, 45, 1);
            a {
              color: $color;
            }
          }
          .mulu-hide {
            background-color: $color;
            width: 240px;
            height: 302px;
            position: absolute;
            left: 230px;
            bottom: 0;
            padding-left:10px;
            padding-top:28px;
            display: none;
            border:1px solid rgba(230,45,45,1);
            p {
              height:18px;
              line-height:18px;
              font-size:14px;
              color:rgba(51,51,51,1);
              margin-bottom:16px;
            }
            div {
              max-width:240px;
              overflow:hidden;
              a {
                display:inline-block;
                float:left;
                font-size:14px;
                color:rgba(153,153,153,1);
                margin-right:20px;
                margin-bottom:10px;
              }
            }
          }
        }
        li:hover {
          div+div {display:block; z-index: 5;}
        }
      }
    }

    .lunbo {
      width: 700px;
      height: 320px;
      margin: 10px 10px 0 10px;
      overflow: hidden;
      position: relative;
      background-size: 100% 100%;
      .lunbo-img {
        position:absolute;
        top:0;
        left:0;
        a {
          float:left;
          width:700px;
          height:320px;
          display:inline-block;
          img {
            width: 100%;
            height:100%;
          }
        }
      }

      .list-li {
        position: absolute;
        bottom: 10px;
        right: 10px;
      }
      .list-li li {
        float: left;
        width: 20px;
        height: 20px;
        background-color: rgba(0, 0, 0, 0.8);
        opacity:.8;
        filter:Alpha(opacity=80);
        line-height: 20px;
        text-align: center;
        border-radius: 50%;
        margin-right: 10px;
        color: #fff;
        font-size: 14px;
        cursor:crosshair;
      }
      .list-li .active {
        background-color:rgba(230,45,45,1);
      }
    }

    .ads {
      width: 240px;
      height: 320px;
      margin-top: 10px;
      background-color: $color;
      .ad1 {
        height: 63px;
        display: flex;
        display:-ms-flexbox;
        .ad1-img {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          margin: 14px 10px 5px 10px;
          background-color: rgba(224, 224, 224, 1);
        }
        .ad1-text {
          height: 37px;
          flex: 1;
          -ms-flex:1;
          color: rgba(153, 153, 153, 1);
          padding-top: 14px;
          padding-bottom: 4px;
          h3 {
            font-size: 14px;
          }
          p {
            font-size: 12px;
          }
        }
        button {
          width: 50px;
          height: 22px;
          font-size: 14px;
          color: $color;
          background-color: rgba(230, 45, 45, 1);
          margin-right: 10px;
          margin-top: 21px;
          border: none;
        }
      }
      .ads-ul {
        height: 42px;
        text-align: center;
        display: flex;
        display:-ms-flexbox;
        justify-content: space-around;
        padding-bottom: 13px;
        li {
          display: inline-block;
          float:left;
          h3 {
            font-size: 16px;
            color: rgba(51, 51, 51, 1);
          }
          a {
            font-size: 12px;
            color: rgba(153, 153, 153, 1);
          }
        }
      }
      .ad2 {
        height: 75px;
        box-shadow: 0 0 0 1px rgba(242, 242, 242, 1);
        padding-top:17px;
        width:240px;
        ul {
          height:60px;
          text-align:center;
          margin:0 auto;
          width:228px;
          li {
            display:inline-block;
            padding:0 14px 0 14px;
            float:left;
            a {
              background:$Sprite;
              display:block;
              width:48px;
              padding-top:44px;
              font-size:12px;
              color:rgba(102,102,102,1);
            }
            .ad-bg1 {
              background-position:-149px 0;
            }
            .ad-bg2 {
              background-position:-245px 0;
            }
            .ad-bg3 {
              background-position:-197px 0;
            }
          }
        }
      }

      .ad3 {
        height: 98px;
        box-shadow: 0 0 0 1px rgba(242, 242, 242, 1);
        padding-top:12px;
        padding-left:10px;
        width:230px;
        .ad-t {
          height:20px;
          line-height:20px;
          overflow:hidden;
          width:223px;
          padding-right:7px;
          h3 {
            font-size:16px;
            color:rgba(51,51,51,1);
            display:inline-block;

          }
          a {
            display:inline-block;
          }
          .gengduo {
            font-size:14px;
            color:rgba(153,153,153,1);
            float:right;
            i {
              display:inline-block;
              width:16px;
              height:16px;
              background:$Sprite;
              background-position:-16px 0;
              margin-bottom:-3px;
            }
          }

        }

        .ad-b {
          height:70px;
          padding-top:8px;
          a {
            font-size:12px;
            color:rgba(102,102,102,1);
          }
          a:hover {
            text-decoration:underline;
            color:#ff0000;
          }
        }
      }
    }
  }
</style>
