<template>
  <div id="slider">
    <div class="wrapper">
      <div class="mulu">
        <!--<h2>全部商品分类</h2>-->
        <div class="list">
          <ul>
            <li v-for="item of cat" :key="item.id">
              <div class="list_a">
                <a href="">{{item.name}}</a>
                <a href="" v-for="item2 of item['items']" :key="item2.id">{{item2.name}}</a>
              </div>

              <div class="mulu_hide">
                <p>{{item.name}}</p>
                <div>
                  <a href="" v-for="item2 of item.items" :key="item2.id">{{item2.name}}</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
    </div>

<!--vue-awesome-swiper插件轮播-->
    <div class="lunb">
      <swiper :options="swiperOption" v-if="showSwiper">
        <swiper-slide v-for="item of list" :key="item.sort">
          <a :href="item.link" target="_blank"><img class="swiper_img" :src="item.img"/></a>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>

    <div class="ads">
      <div class="ad1">
        <!--<div class="ad1_img"><img :src="this.user['photo']"/></div>-->
        <div class="today_date">
          <span class="today_date_month">{{nowMonth}}</span>
          <span class="today_date_day">{{nowDate}}</span>
        </div>

        <div class="ad1_text">
          <h3>Hi, <a href="" class="active">{{this.user['name']}}</a></h3>
          <p>签到可领取200积分</p>
        </div>
        <button><a>签到</a></button>
      </div>
      <ul class="ads_ul">
        <li><h3>{{this.acc['balance']}}</h3><a href="">余额</a></li>
        <li><h3>{{this.cou}}</h3><a href="">优惠券</a></li>
        <li><h3>{{this.acc['integral']}}</h3><a href="">积分</a></li>
      </ul>
      <div class="ad2">
        <ul>
          <li><a class="ad_bg1" href="">会员中心</a></li>
          <li><a class="ad_bg2" href="">领券中心</a></li>
          <li><a class="ad_bg3" href="">积分兑换</a></li>
        </ul>
      </div>
      <div class="ad3">
        <div class="ad_t">
          <h3>公告</h3>
          <a class="gengduo" href="">更多<i></i></a>
        </div>
        <div class="ad_b">
          <ul>
            <li v-for="item of notice" :key="item.id"><a href="">{{item.text}}</a></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePoster',
  props: {
    user: Object,
    acc: Object,
    cou: String,
    notice: Array,
    list: Array,
    cat: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 2000,
        paginationClickable: true,
        speed: 3000,
        paginationBulletRender: function (swiper, index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>'
        }
      }
    }
  },
  methods: {
    timeFormate (timeStamp) {
      let month = new Date(timeStamp).getMonth() + 1 < 10 ? '0' + (new Date(timeStamp).getMonth() + 1) : new Date(timeStamp).getMonth() + 1
      let date = new Date(timeStamp).getDate() < 10 ? new Date(timeStamp).getDate() : new Date(timeStamp).getDate()
      this.nowMonth = month + '月'
      this.nowDate = date
    },
    nowTimes () {
      this.timeFormate(new Date())
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  },
  created () {
    this.nowTimes()
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/varible.scss';
  #slider /deep/ .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    background-color: rgba(0, 0, 0, 0.8);
    opacity: .8;
    filter: Alpha(opacity=80);
    line-height: 20px;
    text-align: center;
    margin-right: 10px;
    margin-left: unset;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
  }
  #slider /deep/ .swiper-pagination-bullets {
    left: unset;
    width: unset;
    right: 20px;
  }
  #slider /deep/ .swiper-pagination-bullet-active { background-color: rgba(230,45,45,1); }

  #slider {
    height: 330px;
    padding-bottom: 10px;
    background-color: $bgColor3;
    @extend %wrapper;
    .wrapper {
      display: flex;
      display: -ms-flexbox;
    }
    .mulu {
      width: 230px;
      height: 330px;
      position: relative;
      .list {
        background-color: $bgColor2;
        height: 330px;
        ul:hover {
          height: unset;
          background-color: $bgColor2;
          box-shadow: 0 2px 4px rgba(0,0,0,.1);
        }
        ul {
          height: 324px;
          overflow: hidden;
          padding-top: 6px;
          background-color: $bgColor2;
          li {
            .list_a {
              height: 36px;
              line-height: 36px;
              padding: 0 18px 0 8px;
              overflow: hidden;
              a {
                font-size: 14px;
                padding-left: 12px;
                color: rgba(153, 153, 153, 1);
                float: left;
              }
              a:first-child {
                display: inline-block;
                width: 56px;
                color: rgba(51, 51, 51, 1);
              }
              a:hover {
                color: rgba(254, 229, 61, 1) !important;
              }
            }
            .list_a:hover {
              background-color: rgba(230, 45, 45, 1);
              a {
                color: $color;
              }
            }
            .mulu_hide {
              background-color: $color;
              width: 240px;
              height: 302px;
              position: absolute;
              left: 230px;
              bottom: 0;
              padding-left: 10px;
              padding-top: 28px;
              display: none;
              border: 1px solid rgba(230, 45, 45, 1);
              p {
                height: 18px;
                line-height: 18px;
                font-size: 14px;
                color: rgba(51, 51, 51, 1);
                margin-bottom: 16px;
              }
              div {
                max-width: 240px;
                overflow: hidden;
                a {
                  display: inline-block;
                  float: left;
                  font-size: 14px;
                  color: rgba(153, 153, 153, 1);
                  margin-right: 20px;
                  margin-bottom: 10px;
                }
                a:hover {
                  color: #e62d2d;
                }
              }
            }
          }
          li:hover {
            background-color: #e62d2d;
            >.list_a a {
              color:white;
            }
            div + div {
              display: block;
              z-index: 5;
            }
          }
        }
      }
    }

    .lunb {
      overflow: hidden;
      width: 700px;
      height: 320px;
      background: #fff;
      margin: 10px 10px 0 10px;
      .swiper_img {
        width: 100%;
        height: 100%;
      }
      .swiper_container {
        height: 100%;
        z-index: 0;
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
        display: -ms-flexbox;
        .ad1_img {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          margin: 14px 10px 5px 10px;
          background-color: rgba(224, 224, 224, 1);
          overflow: hidden;
          img { height: 100%; width: 100%; }
        }
        .ad1_text {
          height: 37px;
          flex: 1;
          -ms-flex: 1;
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
      .ads_ul {
        height: 42px;
        text-align: center;
        display: flex;
        display:-ms-flexbox;
        justify-content: space-around;
        padding: 0 10px 13px 10px;
        li {
          display: inline-block;
          float: left;
          width: 30%;
          h3 {
            font-size: 16px;
            color: rgba(51, 51, 51, 1);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
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
        padding-top: 17px;
        width: 240px;
        ul {
          height: 60px;
          text-align: center;
          margin: 0 auto;
          width: 228px;
          li {
            display: inline-block;
            padding: 0 14px 0 14px;
            float: left;
            a {
              background: $Sprite;
              display: block;
              width: 48px;
              padding-top: 44px;
              font-size: 12px;
              color: rgba(102,102,102,1);
            }
            .ad_bg1 {
              background-position: -151px 0;
            }
            .ad_bg2 {
              background-position: -247px 0;
            }
            .ad_bg3 {
              background-position: -199px 0;
            }
          }
        }
      }

      .ad3 {
        height: 98px;
        box-shadow: 0 0 0 1px rgba(242, 242, 242, 1);
        padding-top: 12px;
        padding-left: 10px;
        width: 230px;
        .ad_t {
          height: 20px;
          line-height: 20px;
          overflow: hidden;
          width: 223px;
          padding-right: 7px;
          h3 {
            font-size: 16px;
            color: rgba(51,51,51,1);
            display: inline-block;
          }
          a {
            display: inline-block;
          }
          .gengduo {
            font-size: 14px;
            color: rgba(153,153,153,1);
            float: right;
            i {
              display: inline-block;
              width: 16px;
              height: 16px;
              background: $Sprite;
              background-position: -16px 0;
              margin-bottom: -3px;
            }
          }
        }

        .ad_b {
          height: 65px;
          padding-top: 8px;
          overflow:auto;
          a {
            display: inline-block;
            width: 90%;
            font-size: 12px;
            color: rgba(102,102,102,1);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          a:hover {
            text-decoration: underline;
            color: #ff0000;
          }
        }
        //滚动条样式
        .ad_b::-webkit-scrollbar {
          width: 6px;
          background-color: $color;
        }
        .ad_b::-webkit-scrollbar-track {
          background-color: $color;
          -webkit-box-shadow: 1px 0 0 0 rgba(242,242,242,0.5) inset;
          border-radius: 3px;
        }
        .ad_b::-webkit-scrollbar-thumb {
          background: rgba(204,204,204,1);
          border-radius: 3px;
        }
      }
    }
  }
  .today_date {
    float: left;
    background: #e62d2d;
    width: 30px;
    height: 36px;
    padding: 2px;
    margin: 14px 10px 0 10px;
  }
  .today_date span {
    display: block;
  }
  .today_date_month {
    height: 16px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
    font-size:12px;
  }
  .today_date_day {
    height: 20px;
    line-height: 20px;
    text-align: center;
    background: #ffffff;
    color: #e62d2d;
    font-size: 18px;
    border-bottom-right-radius: 6px;
  }
</style>
