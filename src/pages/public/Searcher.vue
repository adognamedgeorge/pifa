<template>
  <div id="search">
    <div class="wrapper">
      <div class="box">

        <div class="search_logo">
          <main>
            <a class="logo_img" href=""><img src="http://pifa.yunmayi.com/statics/images/new_log.png" title="云蚂蚁www.yunmayi.com"/></a>
            <a class="logo_font" href=""><img src="http://pifa.yunmayi.com/statics/images/index/04171124.png" title="云蚂蚁批发平台"/></a>
          </main>
        </div>

        <div class="search_form">
            <input type="text" placeholder="搜索商品关键字，品牌"/>
            <button type="submit">搜索</button>
        </div>
      <Cart></Cart>
        <div class="search_img">
          <img src="../../assets/imgs/2.png" alt="云蚂蚁app二维码" title="扫码下载云蚂蚁官方APP"/>
        </div>
      </div>

      <div class="search_bar">
        <section class="bar_section">
          <h2>全部商品分类</h2>
          <ul>
            <li v-for="item of goodsList" :key="item.id">
              <div class="li_box">
                <h3>
                  <a href="">{{item.name}}</a>
                </h3>
                <div class="li_content">
                  <a href="" v-for="item2 of item.items" :key="item2.id">{{item2.secName}}</a>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <ul class="search_bar_ul">
          <li><a href="">首页</a></li>
          <li v-for="item of goodsList" :key="item.id"><a href="">{{item.name}}</a></li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Link from './public_js/link.js'
export default {
  name: 'HomeSearcher',
  data () {
    return {
      cartNum: 0,
      cartList: [],
      newArr: [],
      goodsList: []
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
        this.cartNum = data.cartNum
        this.cartList = data.cartList
        this.goodsList = data.goodsList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
    const vm = this
    Link.$on('val', (dat) => {
      // vm.total = dat
      vm.newArr.push(dat)
    })
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/varible';
  #search {
    @extend %wrapper;
    height: 150px;
    background-color: $bgColor2;
    box-shadow: 0 -1px 0 0 rgba(217,217,217,1);
    border-bottom: 2px solid rgba(230,45,45,1);
    .box {
        height: 120px;
        .search_logo {
          width: 230px;
          height: 100px;
          float: left;
          padding-top: 20px;
          margin-right: 60px;
          main {
            width: 220px;
            height: 76px;
            padding: 0 6px 0 4px;
            a {
              float: left;
              display: inline-block;
              img {
                width: 100%;
                vertical-align: middle;
              }
            }
            a:first-child {width: 96px;}
            a:last-child {width: 124px; line-height: 76px; display: block;}
          }
        }

        .search_form {
          width: 546px;
          height: 36px;
          line-height: 36px;
          border: 2px solid rgba(230,45,45,1);
          float: left;
          margin-top: 47px;
          input {
            font-size: 14px;
            width: 452px;
            color: rgba(153,153,153,1);
            background-color: inherit;
            border: none;
            padding-left: 12px;
          }
          button {
            outline: none;
            border: none;
            background-color: rgba(230,45,45,1);
            width: 80px;
            height: 36px;
            float: right;
            font-size: 18px;
            color: rgba(255,255,255,1);
            cursor: pointer;
          }
          button:active { background-color: rgba(230,45,45,.6); color: rgba(255,255,255,.4);}
        }
        .search_img {
          width: 70px;
          height: 70px;
          float: left;
          margin-top: 31px;
          img {
            width: 100%;
            height: 100%;
          }
        }
    }
    .search_bar {
      height: 30px;
      line-height: 30px;
      width: 100%;
      float: left;
      .bar_section {
        background-color: rgba(230, 45, 45, 1);
        color: $color;
        display: inline-block;
        width: 230px;
        float: left;
        cursor: pointer;
        h2 {
          font-size: 16px;
          text-align: center;
        }
        ul {
          display: none;
          width: 228px;
          border: 1px solid #f2f2f2;
          box-shadow: 0 0 10px rgba(0,0,0,.2);
          overflow: hidden;
          padding-bottom: 20px;
          background-color: #ffffff;
          z-index: 999;
          position: absolute;
          .li_box {
            padding: 6px 0 4px 0;
            margin: 0 12px 0 15px;
            border-bottom: 1px dotted #979797;
            h3 {
              font-size: 14px;
              line-height: 24px;
              a {
                font-weight: bold;
                color: #333333;
              }
            }
            .li_content {
              height: 24px;
              line-height: 24px;
              overflow: hidden;
              a {
                display: inline-block;
                font-size: 12px;
                color: #727272;
                margin-right: 8px;
              }
            }
              a:hover {
                color: red;
              }
          }
        }
      }
      .bar_section:hover > ul {
        display: block;
      }

      .search_bar_ul {
        display: inline-block;
        width: 720px;
        height: 30px;
        overflow: hidden;
        li {
          float: left;
          padding-left: 30px;
          a {
            color: rgba(51, 51, 51, 1);
          }
          a:hover {
            color: #ff0000;
            background-color: #f2f2f2;
          }
        }
      }

      .search_bar_hide {
        width: 230px;
        height: 100px;
        background: red;
      }
    }
  }
</style>
