<template>
  <div id="special" class="category">
    <div class="wrapper">
      <div class="focus_within">
        <button class="button_first">限时特价</button>
        <button class="button_second">新品推荐</button>
      </div>
    </div>

    <div class="wrapper">
      <div class="sp_left">
        <img src="../../../assets/imgs/home_banner_discount@2x.png"/>
      </div>
      <div class="sp_slid">
            <ul>
              <swiper :options="swiperOption" v-if="showSwiper">
                  <swiper-slide v-for="item of list" :key="item.id">
                      <li  class="item_box">
                        <a  href="javascript:;" class="item_bg" ></a>
                        <a  href="javascript:;" class="item_bg cover" v-if="item.isCollect"></a>
                        <div class="item_img">
                          <a href="" target="_blank"><img src="http://i8.yunmayi.com/upload/2015/04/30/7b948795d28a540658f4fc6f6da26950.jpgXXXXX!!!!!_300x300.jpg"/></a>
                        </div>
                        <div class="item_title">
                          <a href="" target="_blank">{{item.title}}</a>
                        </div>
                        <div class="item_price">
                          <i>￥</i><strong>{{item.price}}</strong>/{{item.unit}}
                          <span>规格:{{item.spec}}</span>
                        </div>
                        <div class="item_action">
                          <a href="javascript:;">-</a>
                          <input type="text" :value="item.minSoldNum" data-min="1"/>
                          <a href="javascript:;">+</a>
                          <a>进货</a>
                        </div>
                    </li>
                  </swiper-slide>
              </swiper>
            </ul>

        <a href=""><div class="btn fl iconfont"><i>&#xe600;</i></div></a>
        <a href=""><div class="btn fr iconfont"><i>&#xe600;</i></div></a>
      </div>
      <div class="sp_right">
          <div class="r_img">
                <a href=""><img src="http://i8.yunmayi.com/upload/2017/03/28/c7add6ce7033b01bfc9b399b4f34efd2.jpgXXXXX!!!!!_300x300.jpg"/></a>
          </div>
          <div class="r_title">
          </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBargain',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 500,
        speed: 2000,
        loop: true,
        mousewheelControl: true,
        spaceBetween: -480,
        centerdSlides: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
  // computed: {
  //   pages () {
  //     const pages = []
  //     this.list['products'].forEach((item, index) => {
  //       const page = Math.floor(index / 3)
  //       if (!pages[page]) {
  //         pages[page] = []
  //       }
  //       pages[page].push(item)
  //     })
  //     return pages
  //   }
  // }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/varible.scss';
  #special {
    /*height: 300px;*/
    padding-bottom: 30px;
    background-color: $bgColor3;
    @extend %wrapper;
    .wrapper {
      display: flex;
      display: -ms-flexbox;
    }
  .sp_left {
    width: 230px;
    height: 300px;
    display: inline-block;
  img {
    width: 100%;
  }
  }

  .sp_slid {
    height: 300px;
    flex: 1;
    -ms-flex: 1;
    position: relative;
    /*width: 720px;*/
    overflow: hidden;
    float: left;
    ul {
      height: 300px;
      @extend %item;
      .item_box {
        box-shadow: -1px 0 0 0 $bgColor3 inset;
        padding-left: 5px;
        padding-right: 5px;
      }
     }
      .btn {
        display: none;
        position: absolute;
        top: 38.33%;
        width: 26px;
        height: 70px;
        background-color: rgba(0,0,0,0.4);
        z-index: 6;
        color: $color;
        font-weight: bold;
        line-height: 70px;
        text-align: center;
      }
      .fl { left: 0; border-radius: 0 4px 4px 0;
          i { display: block; transform: rotate(180deg); -webkit-transform: rotate(180deg); }
      }
      .fr { right: 0; border-radius: 4px 0 0 4px; }
      }
      .sp_slid:hover {
        .btn { display: block; }
      }

    .sp_right {
      width: 240px;
      height: 300px;
      background-color: $color;
      .r_img {
        width: 240px;
        height: 240px;
        img {
          width: 100%;
        }
      }
      .r_title {
        width: 240px;
        height: 60px;
        background: url("../../../assets/imgs/home_bg_yushou@2x.png") no-repeat;
      }
}
  }

  .focus_within {
    height: 36px;
    width: 100%;
    border-bottom: 2px solid rgba(230,45,45,1);
    margin:10px 0;

  }
  .focus_within button {
    width: 100px;
    height: 36px;
    font-size: 16px;
    display: inline-block;
    outline: none;
    box-sizing: border-box;
    background-color: inherit;
    color: rgba(230,45,45,1);
    border: 1px solid rgba(230,45,45,1);
    cursor: pointer;
    border-bottom: none;
    float: left;
  }
  .focus-within {
    background-color: rgba(230,45,45,1) !important;
    color: rgba(255,255,255,1) !important;
  }
</style>
