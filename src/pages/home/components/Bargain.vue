<template>
  <div id="special" class="category">
    <div class="wrapper">
      <div class="focus_within">
        <button class="button_first" v-show="showSpecial" :class="{selected: isTrue}" @click="btnSpeClick">{{spc_title}}</button>
        <button class="button_second" v-show="showRecd" :class="{selected: !isTrue}" @click="btnRecClick">{{rec_title}}</button>
      </div>
    </div>

    <div class="wrapper">
      <div class="sp_left">
        <img src="../../../assets/imgs/home_banner_discount@2x.png" v-show="showSpecial && isTrue"/>
        <img src="@/assets/imgs/home_banner_new@2x.png" v-show="showRecd && !isTrue"/>
      </div>
      <div class="sp_slid">
            <ul>
              <swiper :options="swiperOption" v-if="showSpecial && isTrue">
                  <swiper-slide v-for="item of list" :key="item.id">
                      <li class="item_box">
                        <a  href="javascript:;" class="item_bg" ></a>
                        <a  href="javascript:;" class="item_bg cover" v-if="item.isCollect"></a>
                        <div class="item_img">
                          <a href="" target="_blank"><img :src="item.img"/></a>
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

              <swiper :options="swiperOption" v-if="showRecd && !isTrue">
                <swiper-slide v-for="item of recList" :key="item.id">
                  <li class="item_box">
                    <a  href="javascript:;" class="item_bg" ></a>
                    <a  href="javascript:;" class="item_bg cover" v-if="item.isCollect"></a>
                    <div class="item_img">
                      <a href="" target="_blank"><img :src="item.img"/></a>
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
        <div class="btn fl iconfont swiper-button-prev" slot="prevButton"><i>&#xe600;</i></div>
        <div class="btn fr iconfont swiper-button-next" slot="nextButton"><i>&#xe600;</i></div>
      </div>
      <home-presale></home-presale>
      </div>
  </div>
</template>

<script>
import HomePresale from './Presale'
import axios from 'axios'
export default {
  name: 'HomeBargain',
  components: {
    HomePresale
  },
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        mousewheelControl: true,
        speed: 1000,
        loop: true,
        slidesPerView: 3,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next'
      },
      spc_title: '',
      rec_title: '',
      recList: [],
      changeShow: true,
      times: 0,
      isTrue: true
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/home.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.spc_title = data.specialPrice['name']
        this.recList = data.recommend['products']
        this.rec_title = data.recommend['name']
      }
    },
    changeList () {
      this.times++
      if (this.times === 30) {
        this.isTrue = false
      } else if (this.times === 60) {
        this.isTrue = true
        this.times = 0
      }
    },
    btnSpeClick () {
      this.isTrue = true
    },
    btnRecClick () {
      this.isTrue = false
    }
  },
  mounted () {
    this.getHomeInfo()
    setInterval(this.changeList, 500)
  },
  computed: {
    showSpecial () {
      return this.list.length
    },
    showRecd () {
      return this.recList.length
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
  .sp_slid /deep/ .swiper-button-prev, .swiper-button-next { background-image: none;}
  #special {
    /*height: 300px;*/
    padding-bottom: 30px;
    background-color: $bgColor3;
    @extend %wrapper;
    .wrapper {
      display: -webkit-flex;
      display: flex;
      /*display: -webkit-box;*/
      display: -moz-box;
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
    -webkit-flex: 1;
    -ms-flex: 1;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    flex: 1;
    position: relative;
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
      .btn{
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
  .selected {
    background-color: rgba(230,45,45,1) !important;
    color: rgba(255,255,255,1) !important;
  }
</style>
