<template>
  <div class="search_cart">
    <a href="" class="cart_p">
      <span class="cart_bg1"></span>进货单
    </a>
    <span class="cart_span">{{this.newArr.length}}</span>
    <a href="" class="cart_bg2"></a>

    <div class="cart_hide">
      <section class="cart_hide_section1" v-show="!this.newArr.length">
        <p>当前您还未进货，快去抢购吧</p>
      </section>

      <section class="cart_hide_section2" v-show="this.newArr.length">
        <h3>新加入的商品</h3>
        <ul>
          <li v-for="item of newArr" :key="item.index">
            <a class="ch_img" href=""><img :src="item.imgUrl" /></a>
            <div class="ch_content">
              <p class="ch_text"><a href="#">{{item.title}}</a></p>
              <div>
                <a href="javascript:;">-</a>
                <input type="text" :value="item.minSoldNum" :data-min="item.minSoldNum"/>
                <a href="javascript:;">+</a>
                <span>￥<strong>{{item.price}}</strong></span>
              </div>
            </div>
          </li>
        </ul>
        <div class="hide_footer">
          共计<span>￥<strong>198</strong></span>
          <a href="" target="_blank">去结算</a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Link from './public_js/link.js'
export default {
  name: 'CartComponent',
  data () {
    return {
      cartNum: 0,
      newArr: []
    }
  },
  mounted () {
    const vm = this
    Link.$on('val', (dat) => {
      vm.newArr.push(dat)
      console.log(vm.newArr)
    })
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/varible';
  .search_cart {
    width: 148px;
    height: 38px;
    margin: 47px 56px 33px 50px;
    float: left;
    border: 1px solid rgba(0,0,0,0.2);
    position: relative;
    z-index: 999;
    font-size: 14px;
    span {
      display: inline-block;
    }

    .cart_p {
      color: rgba(51, 51, 51, 1);
      line-height: 26px;
      height: 33px;
      padding-top: 7px;
      text-indent: 6px;
      padding-left: 22px;
      float: left;
      .cart_bg1 {
        background: $Sprite;
        background-position: -32px 0;
        width: 24px;
        height: 24px;
        display: inline-block;
        float: left;
      }
      i {
        width: 1px;
        height: 13px;
        background: rgba(0, 0, 0, 0.2);
        display: inline-block;
        margin: 0 6px -2px 6px;
      }
    }

    .cart_span {
      color: rgba(230, 45, 45, 1);
      line-height: 20px;
      height: 19px;
      border-left: 1px solid;
      overflow: hidden;
      max-width: 27px;
      float: left;
      margin: 11px 0 0 6px;
      padding-left: 6px;
    }

    .cart_bg2 {
      width: 16px;
      height: 16px;
      background: $Sprite;
      background-position: 0 0;
      display: inline-block;
      float: left;
      margin-top: 13px;
      cursor: pointer;
    }
    .cart_hide {
      width: 238px;
      max-height: 0;
      background: $color;
      box-shadow: 0 2px 5px 0 rgba(0,0,0,0.1);
      padding-right: 2px;
      overflow: hidden;
      transition: max-height .6s linear;
      -webkit-transition: max-height .6s linear;
      -moz-transition: max-height .6s linear;
      .cart_hide_section1 {
        height: 200px;
        color: rgba(153,153,153,1);
        font-size: 14px;
        text-align: center;
        margin-top: 41px;
      }
      h3 {
        height: 14px;
        line-height: 14px;
        padding-top: 7px;
        padding-bottom: 9px;
        padding-left: 10px;
        font-size: 14px;
        color: rgba(0,0,0,0.8);
      }
      ul {
        height: 210px;
        overflow: auto;
        li {
          height: 40px;
          padding: 15px 0 15px 10px;
          box-shadow: 0 1px 0 0 rgba(242,242,242,1);
          .ch_img {
            width: 38px;
            height: 38px;
            border: 1px solid rgba(230,230,230,1);
            background-color: rgba(216,216,216,1);
            float: left;
            margin-right: 10px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .ch_content {
            width: 151px;
            height: 40px;
            float: left;
            padding-right: 9px;
            .ch_text {
              height: 16px;
              line-height: 16px;
              overflow: hidden;
              margin-bottom: 4px;
              width: 151px;
              position: relative;
              a {
                font-size: 12px;
                color: rgba(153,153,153,1);
              }
            }
            .ch_text::after {
              content: '...';
              position: absolute;
              bottom: 0;
              right: -1px;
              font-size: 12px;
              color: rgba(153,153,153,1);
              background-color: $color;
            }

            div {
              a {
                width: 16px;
                height: 16px;
                border: 1px solid rgba(196,196,196,1);
                color: rgba(102,102,102,1);
                font-size: 16px;
                float: left;
                text-align: center;
                line-height: 16px;
                font-weight: bold;
              }
              input {
                width: 38px;
                height: 16px;
                line-height: 16px;
                font-size: 14px;
                border: none;
                border-top: 1px solid rgba(196,196,196,1);
                border-bottom: 1px solid rgba(196,196,196,1);
                text-align: center;
                float: left;
                color: rgba(51,51,51,1);
              }
              span {
                font-size: 16px;
                color: rgba(51,51,51,1);
                height: 20px;
                line-height: 20px;
                float: right;
                max-width: 80px;
                overflow: hidden;
              }
            }
          }
        }
      }
      //购物车侧边滚动条样式
      ul::-webkit-scrollbar {
        width: 6px;
        background-color: $color;
      }
      ul::-webkit-scrollbar-track {
        background-color: $color;
        -webkit-box-shadow: 1px 0 0 0 rgba(242,242,242,0.5) inset;
        border-radius: 3px;
      }
      ul::-webkit-scrollbar-thumb {
        background: rgba(204,204,204,1);
        border-radius: 3px;
      }

      .hide_footer {
        height: 36px;
        padding-left: 10px;
        padding-right: 10px;
        background-color: rgba(242,242,242,1);
        font-size: 14px;
        line-height: 36px;
        color: rgba(102,102,102,0.8);
        span {
          color: #000000;
          font-size: 14px;
          margin-left: 8px;
          opacity: .8;
          filter: Alpha(opacity=80);
          strong {
            font-size: 20px;
          }
        }
        a {
          margin-top: 7px;
          float: right;
          width: 60px;
          height: 22px;
          border: none;
          background-color: rgba(230,45,45,1);
          color: $color;
          line-height: 22px;
          text-align: center;
        }
      }
    }
  }
  .search_cart:hover {
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.1);
    height: 40px;
    width: 150px;
    background-color: rgba(255,255,255,1);
    border: 0;
    .cart_bg2 {
      transform: rotate(180deg);
      -webkit-transform: rotate(180deg);
    }
    .cart_hide {
      max-height: 276px;
    }
    .cart_p {
      color: orange;
    }
  }
</style>
