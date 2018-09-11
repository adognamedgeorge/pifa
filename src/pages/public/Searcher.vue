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

        <div class="search_cart">
          <span class="cart-p"><a class="cart-bg1" href=""> </a>进货单<i> </i></span>
          <span class="cart-span" >{{this.cartNum}}</span>
          <a class="cart-bg2" style="cursor:pointer;" @click="getData">{{this.total}}</a>

          <div class="cart-hide">
            <section class="cart_hide_section1" v-show="!cartNum">
                <p>当前您还未进货，快去抢购吧</p>
            </section>

            <section class="cart_hide_section2" v-show="cartNum">
              <h3>新加入的商品</h3>
              <ul>
                <li v-for="item of cartList" :key="item.id">
                  <a class="ch-img" href=""><img src="../../assets/imgs/4.png"/></a>
                  <div class="ch-content">
                    <p class="ch-text"><a href="#">{{item.title}}</a></p>
                    <div>
                      <a href="javascript:;">-</a>
                      <input type="text" value="8" data-min="0"/>
                      <a href="javascript:;">+</a>
                      <span>￥<strong>49.5</strong></span>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="hide-footer">
                共计<span>￥<strong>198</strong></span>
                <a href="" target="_blank">去结算</a>
              </div>
            </section>
          </div>
        </div>

        <div class="search_img">
          <img src="../../assets/imgs/2.png" alt="云蚂蚁app二维码" title="扫码下载云蚂蚁官方APP"/>
        </div>
      </div>

      <div class="search_bar">
        <h2>全部商品分类</h2>
        <ul>
          <li><a href="">首页</a></li>
          <li v-for="item of cat" :key="item.id"><a href="">{{item.name}}</a></li>
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
      cat: [],
      cartList: [],
      total: 0
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
        this.cat = data.category
        this.cartList = data.cartList
      }
    },
    getData () {
      const arr = [0]
      arr.push(this.total)
      console.log(arr)
    }
  },
  mounted () {
    this.getHomeInfo()
    const vm = this
    Link.$on('val', (dat) => {
      vm.total = dat
    })
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/varible';
  #search {
    @extend %wrapper;
    height:150px;
    background-color:$bgColor2;
    box-shadow:0 -1px 0 0 rgba(217,217,217,1);
    border-bottom:2px solid rgba(230,45,45,1);
    .box {
        height:120px;
        .search_logo {
          width:230px;
          height:100px;
          float:left;
          padding-top:20px;
          margin-right:60px;
          main {
            width:220px;
            height:76px;
            padding:0 6px 0 4px;
            a {
              float:left;
              display:inline-block;
              img {
                width:100%;
                vertical-align:middle;
              }
            }
            a:first-child {width:96px;}
            a:last-child {width:124px;line-height:76px;display:block;}
          }
        }

        .search_form {
          width:546px;
          height:36px;
          line-height:36px;
          border:2px solid rgba(230,45,45,1);
          float:left;
          margin-top:47px;
          input {
            font-size:14px;
            color:rgba(153,153,153,1);
            background-color:inherit;
            border:none;
            padding-left:12px;
          }
          button {
            outline:none;
            border:none;
            background-color:rgba(230,45,45,1);
            width:80px;height:36px;
            float:right;
            font-size:18px;
            color:rgba(255,255,255,1);
            cursor:pointer;
          }
          button:active {background-color:rgba(230,45,45,.6);color:rgba(255,255,255,.4);}
        }

        .search_cart {
          width:148px;
          height:38px;
          margin:47px 56px 33px 50px;
          float:left;
          border:1px solid rgba(0,0,0,0.2);
          position:relative;
          z-index:1;
          font-size:14px;
          span {
            display:inline-block;
          }

          .cart-p {
            color: rgba(51, 51, 51, 1);
            line-height: 26px;
            height: 33px;
            padding-top:7px;
            text-indent:6px;
            padding-left:22px;
            float:left;
            .cart-bg1 {
              background: $Sprite;
              background-position: -32px 0;
              width: 24px;
              height: 24px;
              display:inline-block;
              float:left;
            }
            i {
              width: 1px;
              height: 13px;
              background: rgba(0, 0, 0, 0.2);
              display: inline-block;
              margin:0 6px -2px 6px;
            }
          }

          .cart-span {
            color: rgba(230, 45, 45, 1);
            line-height:40px;
            overflow:hidden;
            max-width:27px;
            float:left;
          }

          .cart-bg2 {
            width: 16px;
            height: 16px;
            background:$Sprite;
            background-position: 0 0;
            display:inline-block;
            float:left;
            margin-top:13px;
          }
          .cart-bg2:hover {
            transform:rotate(180deg);
            -webkit-transform:rotate(180deg);
            +div {
              max-height:276px;
            }
          }
          .cart-hide {
            width:238px;
            max-height:0;
            background:$color;
            box-shadow:0 2px 8px 0 rgba(0,0,0,0.1);
            padding-right:2px;
            overflow:hidden;
            transition:max-height .6s linear;
            -webkit-transition:max-height .6s linear;
            -moz-transition:max-height .6s linear;
            .cart_hide_section1 {
              height:200px;
              color:rgba(153,153,153,1);
              font-size:14px;
              text-align:center;
              margin-top:41px;
            }
            h3 {
              height:14px;
              line-height:14px;
              padding-top:7px;
              padding-bottom:9px;
              padding-left:10px;
              font-size:14px;
              color:rgba(0,0,0,0.8);
            }
            ul {
              height:210px;
              overflow:auto;
              li {
                height:40px;
                padding:15px 0 15px 10px;
                box-shadow:0 1px 0 0 rgba(242,242,242,1);
                .ch-img {
                  width:38px;
                  height:38px;
                  border:1px solid rgba(230,230,230,1);
                  background-color:rgba(216,216,216,1);
                  float:left;
                  margin-right:10px;
                  img {
                    width:100%;
                    height:100%;
                  }
                }
                .ch-content {
                  width:151px;
                  height:40px;
                  float:left;
                  padding-right:9px;
                  .ch-text {
                    height:16px;
                    line-height:16px;
                    overflow:hidden;
                    /*white-space:nowrap;*/
                    /*text-overflow:ellipsis;*/
                    margin-bottom:4px;
                    width:151px;
                    position:relative;
                    a {
                      font-size:12px;
                      color:rgba(153,153,153,1);
                    }
                  }
                  .ch-text::after {
                    content:'...';
                    position:absolute;
                    bottom:0;
                    right:-1px;
                    font-size:12px;
                    color:rgba(153,153,153,1);
                    background-color:$color;
                  }

                  div {
                    a {
                      width:16px;
                      height:16px;
                      border:1px solid rgba(196,196,196,1);
                      color:rgba(102,102,102,1);
                      font-size:16px;
                      float:left;
                      text-align:center;
                      line-height:16px;
                      font-weight:bold;
                    }
                    input {
                      width:38px;
                      height:16px;
                      line-height:16px;
                      font-size:14px;
                      border:none;
                      border-top:1px solid rgba(196,196,196,1);
                      border-bottom:1px solid rgba(196,196,196,1);
                      text-align:center;
                      float:left;
                      color:rgba(51,51,51,1);
                    }
                    span {
                      font-size:16px;
                      color:rgba(51,51,51,1);
                      height:20px;
                      line-height:20px;
                      float:right;
                      max-width:80px;
                      overflow:hidden;
                    }
                  }
                }
              }
            }
            //购物车侧边滚动条样式
            ul::-webkit-scrollbar {
              width:6px;
              background-color:$color;
            }
            ul::-webkit-scrollbar-track {
              background-color:$color;
              -webkit-box-shadow:1px 0 0 0 rgba(242,242,242,0.5) inset;
              border-radius:3px;
            }
            ul::-webkit-scrollbar-thumb {
              background:rgba(204,204,204,1);
              border-radius:3px;
            }

            .hide-footer {
              height:36px;
              padding-left:10px;
              padding-right:10px;
              background-color:rgba(242,242,242,1);
              font-size:14px;
              line-height:36px;
              color:rgba(102,102,102,0.8);
              span {
                color:#000000;
                font-size:14px;
                margin-left:8px;
                opacity:.8;
                filter:Alpha(opacity=80);
                strong {
                  font-size:20px;
                }
              }
              a {
                margin-top:7px;
                float:right;
                width:60px;
                height:22px;
                border:none;
                background-color:rgba(230,45,45,1);
                color:$color;
                line-height:22px;
                text-align:center;
              }
            }
          }
          .cart-hide:hover {
            max-height:276px;
          }
        }

        .search_img {
          width:70px;
          height:70px;
          float:left;
          margin-top:31px;
          img {
            width:100%;
            height:100%;
          }
        }
    }
    .search_bar {
      height:30px;
      line-height:30px;
      width:100%;
      float:left;
      overflow:hidden;
      h2 {
        background-color: rgba(230, 45, 45, 1);
        color: $color;
        text-align: center;
        display:inline-block;
        width:230px;
        float:left;
        font-size:16px;
      }

      ul {
        display:inline-block;
        width:720px;
        height:30px;
        overflow:hidden;
        li {
          float:left;
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
    }
  }
</style>
