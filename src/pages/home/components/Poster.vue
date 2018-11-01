<template>
  <div id="slider">
    <div class="wrapper">
      <!--全部商品分类子组件-->
      <home-catalog :goodsList="goodsList"></home-catalog>
      <!--vue-awesome-swiper插件轮播-->
      <div class="lunb">
        <swiper :options="swiperOption" v-if="showSwiper">
          <swiper-slide v-for="item of posterList" :key="item.sort">
            <a :href="item.link" target="_blank"><img class="swiper_img" :src="item.img"/></a>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
      <!--签到板块子组件-->
      <home-sign :account="account" :noticeList="noticeList"></home-sign>
    </div>
  </div>
</template>

<script>
import HomeCatalog from './Catalog'
import HomeSign from './Sign'
import axios from 'axios'
export default {
  name: 'HomePoster',
  components: {
    HomeCatalog,
    HomeSign
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        paginationClickable: true,
        speed: 3000,
        autoplayDisableOnInteraction: false,
        mousewheelControl: true,
        autoplay: 1000,
        paginationBulletRender: function (swiper, index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>'
        }
      },
      goodsList: [],
      posterList: [],
      account: {},
      noticeList: []
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
        this.goodsList = data.goodsList
        this.posterList = data.posterList
        this.account = data.account
        this.noticeList = data.noticeList
      }
    }
  },
  computed: {
    showSwiper () {
      return this.posterList.length
    }
  },
  mounted () {
    this.getHomeInfo()
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
  }
</style>
