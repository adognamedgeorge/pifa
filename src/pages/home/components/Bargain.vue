<template>
  <div id="special" class="category">
    <div class="wrapper">
    <div class="sp-left">
      <img src="../../../assets/imgs/home_banner_discount@2x.png"/>
    </div>
    <div class="sp-slid">
      <ul>
        <swiper :options="swiperOption" >
          <swiper-slide>
              <li class="item-box" v-for="item of list['products']" :key="item.id">
                <a  href="javascript:;" class="item-bg" ></a>
                <a  href="javascript:;" class="item-bg cover" v-if="item.isCollect"></a>
                <div class="item-img">
                  <a href="" target="_blank"><img src="http://i8.yunmayi.com/upload/2015/04/30/7b948795d28a540658f4fc6f6da26950.jpgXXXXX!!!!!_300x300.jpg"/></a>
                </div>
                <div class="item-title">
                  <a href="" target="_blank">{{item.title}}</a>
                </div>
                <div class="item-price">
                  <i>￥</i><strong>{{item.price}}</strong>/{{item.unit}}
                  <span>规格:{{item.spec}}</span>
                </div>
                <div class="item-action">
                  <a href="javascript:;">-</a>
                  <input type="text" :value="item.minSoldNum" data-min="1"/>
                  <a href="javascript:;">+</a>
                  <a style="cursor:pointer;">进货</a>
                </div>
              </li>
          </swiper-slide>
        </swiper>
      </ul>

      <a href=""><div class="btn fl iconfont"><i>&#xe600;</i></div></a>
      <a href=""><div class="btn fr iconfont"><i>&#xe600;</i></div></a>
    </div>
    <div class="sp-right">
      <div class="r-img">
        <a href=""><img src="http://i8.yunmayi.com/upload/2017/03/28/c7add6ce7033b01bfc9b399b4f34efd2.jpgXXXXX!!!!!_300x300.jpg"/></a>
      </div>
      <div class="r-title">
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBargain',
  props: {
    list: Object
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 8000,
        loop: true,
        speed: 4000
      }
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
    height:300px;
    padding-bottom:30px;
    background-color:$bgColor3;
    @extend %wrapper;
    .wrapper {
      display:flex;
      display:-ms-flexbox;
    }
  .sp-left {
    width:230px;
    height:300px;
    display:inline-block;
  img {
    width:100%;
  }
  }

  .sp-slid {
    height:300px;
    flex:1;
    -ms-flex:1;
    position:relative;
    width:720px;
    overflow:hidden;
    float:left;
  ul {
    /*height:300px;*/
  @extend %item;
  .item-box {
    box-shadow:-1px 0 0 0 $bgColor3 inset;
    padding-left:5px;
    padding-right:5px;
  }
  }
  .btn {
    display:none;
    position:absolute;
    top:38.33%;
    width:26px;
    height:70px;
    background-color:rgba(0,0,0,0.4);
    z-index:6;
    color:$color;
    font-weight:bold;
    line-height:70px;
    text-align:center;
  }
  .fl {left:0;border-radius:0 4px 4px 0;
  i {display:block;transform:rotate(180deg);-webkit-transform:rotate(180deg);}
  }
  .fr {right:0;border-radius:4px 0 0 4px;}
  }
  .sp-slid:hover {
  .btn {display:block;}
  }

  .sp-right {
    width:240px;
    height:300px;
    background-color:$color;
  .r-img {
    width:240px;
    height:240px;
  img {
    width:100%;
  }
  }
  .r-title {
    width:240px;
    height:60px;
    background:url("../../../assets/imgs/home_bg_yushou@2x.png") no-repeat;
  }
  }
  }
</style>
