<template>
   <div id="main" class="wrapper">
     <header>
       <a href="#">全部商品</a>
       <span> </span>
       <a href="">食品零食</a>
       <span> </span>
       <a href="">糖果巧克力</a>
       <span> </span>
       <a href="">阿尔卑斯糖果巧克力斯糖果巧克力斯糖果巧克力</a>
     </header>

     <section>
       <div class="section1">
         <div class="img_zoom">
           <pic-zoom :url="imgUrl[ind]" :scale="2"></pic-zoom>
         </div>
         <ul>
           <li v-for="(item, index) of imgUrl" :key="index" @mouseover="changeInd(index)">
             <img :src="item"/>
           </li>
         </ul>
       </div>
       <!--商品参数-->
       <detail-describe :param="param" :list="list"></detail-describe>
       <!--经常购买的-->
       <detail-oftenbuy :ofList="ofList"></detail-oftenbuy>
     </section>
   </div>
</template>

<script>
import axios from 'axios'
import PicZoom from 'vue-piczoom'
import DetailDescribe from './Describe'
import DetailOftenbuy from './Oftenbuy'
export default {
  name: 'DetailImgzoom',
  data () {
    return {
      list: {},
      currentIndex: 0,
      ind: 0,
      imgUrl: [],
      param: {},
      ofList: []
    }
  },
  components: {
    DetailDescribe,
    DetailOftenbuy,
    PicZoom
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json')
        .then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.list = data.desList
        this.imgUrl = data.desList['imgUrl']
        this.param = data.desList['param']
        this.ofList = data.oftenList
      }
    },
    changeInd (index) {
      this.ind = index
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/varible.scss';
  #main {
    margin: 0 auto;
    header {
      height: 18px;
      line-height: 18px;
      padding-bottom: 30px;
      padding-top: 20px;
      font-size: 14px;
        a {
          color: rgba(153,153,153,1);
          float: left;
          max-width: 244px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        a:hover {
          color: rgba(230,45,45,1);
        }
        span {
          display: inline-block;
          width: 16px;
          height: 16px;
          background: $Sprite;
          background-position: -16px 0;
          float: left;
          margin-top: 1px;
        }
      }

    section {
      height: 583px;
      margin-bottom: 17px;
      .section1 {
        width: 450px;
        float: left;
        height: 100%;
        font-size: 14px;
        color: rgba(153,153,153,1);
        div {
          width: 450px;
          height: 450px;
          border: 1px solid rgba(230,230,230,1);
          margin-bottom: 30px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        ul {
          overflow: hidden;
          margin-bottom: 40px;
          height: 80px;
          li {
            float: left;
            width: 78px;
            height: 78px;
            border: 1px solid rgba(230,230,230,1);
            margin: 0 5px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          li:hover {
              border: 1px solid rgba(230,45,45,1);
          }
        }
      }
    }
  }
</style>
