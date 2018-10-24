<template>
  <div id="sp_right" v-if="showSwiper">
    <div class="r_img">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item of list" :key="item.id">
          <a href=""><img :src="item.imgUrl"/></a>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    <div class="r_title">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePresale',
  data () {
    return {
      swiperOption: {
        autoplay: 5000,
        loop: true,
        speed: 3000,
        mousewheelControl: true,
        effect: 'cube',
        pagination: '.swiper-pagination',
        paginationClickable: true,
        cube: {
          shadow: false
        }
      },
      list: [
        {'imgUrl': 'http://i8.yunmayi.com/upload/2017/03/28/c7add6ce7033b01bfc9b399b4f34efd2.jpgXXXXX!!!!!_300x300.jpg', 'id': '1001'},
        {'imgUrl': 'http://pifa.yunmayi.com/upload/2015/10/21/165dfcb4125eec29a429f10ce8e45e5c.jpg', 'id': '1002'}
      ]
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
  #sp_right /deep/ .swiper-pagination {
    width: 100%;
    bottom: -13px;
  }
  #sp_right /deep/ .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background-color: orange;
    opacity: .8;
    filter: Alpha(opacity=80);
    line-height: 10px;
    cursor: pointer;
    margin-right: 2px;
    margin-left: 2px;
  }
  #sp_right /deep/ .swiper-pagination-bullet-active { background-color: red;}
  #sp_right {
    width: 240px;
    height: 300px;
    background-color: rgba(255,255,255,1);
  .r_img {
    width: 240px;
    height: 240px;
  img {
    width: 100%;
    height: 100%;
  }
  }
  .r_title {
    width: 240px;
    height: 60px;
    background: url("../../../assets/imgs/home_bg_yushou@2x.png") no-repeat;
  }
  }
</style>
