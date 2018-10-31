<template>
  <div class="section3">
    <h3>&#8212;&#8212; 我常购买 &#8212;&#8212;</h3>
    <div class="ul_scroll">
      <ul>
        <swiper :options="swiperOption" v-if="showSwiper">
          <swiper-slide v-for="item of ofList" :key="item.id">
            <li >
              <a href=""><img :src="item.imgUrl"/></a>
              <p><i>￥</i>{{item.price}}</p>
            </li>
          </swiper-slide>
        </swiper>
      </ul>
    </div>
    <footer>
      <span class="iconfont swiper-button-prev" slot="prevButton">&#xe62d;</span>
      <span class="iconfont swiper-button-next" slot="nextButton">&#xe62f;</span>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DetailOftenbuy',
  props: {
    ofList: Array
  },
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        autoplay: 4000,
        speed: 2000,
        loop: true,
        slidesPerView: 3,
        height: 510,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        autoplayDisableOnInteraction: false
      }
    }
  },
  computed: {
    showSwiper () {
      return this.ofList.length
    }
  }
}
</script>

<style lang="scss" scoped>
  .section3 /deep/ .swiper-button-prev, .swiper-button-next { background-image: none; top: 75%;}
  .section3 /deep/ .swiper-button-prev { left: 80px;}
  .section3 /deep/ .swiper-button-next { right: 80px;}
  .section3 {
    width: 230px;
    text-align: center;
    margin: 0 auto;
    float: left;
    height: 100%;
    font-size: 14px;
    color: rgba(153,153,153,1);
    h3 {
      height: 18px;
      line-height: 18px;
      overflow: hidden;
      font-weight: normal;
      font-size: 14px;
      margin-bottom: 10px;
    }
    .ul_scroll {
      height: 510px;
      overflow: hidden;
      ul {
        width: 160px;
        margin: 0 auto;
        li {
          width: 160px;
          height: 160px;
          margin-bottom: 10px;
          a {
            display: inline-block;
            width: 130px;
            height: 130px;
            img {
              height: 100%;
              width: 100%;
            }
          }
          p {
            height: 30px;
            line-height: 30px;
            font-size: 20px;
            color: rgba(230,45,45,1);
            i {
              font-size: 14px;
            }
          }
        }
        li:hover {
          box-shadow: 0 0 6px 2px #F4F4F4;
        }
      }
    }
    footer {
      height: 30px;
      line-height: 30px;
      position: relative;
      span {
        position: absolute;
        font-size: 24px;
        color: rgba(217,217,217,1);
        cursor: pointer;
      }
    }
  }
</style>
