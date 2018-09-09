<template>
  <div id="categories">
    <div class="wrapper">
        <div id="c1" class="category">
          <div class="c-left">
            <div class="left-t">
              <div class="ca_title">
                <a href=""><span>{{this.sorts['title']}}</span><i class="i-bg"> </i></a>
              </div>
              <div class="ca-list">
                <ul>
                  <li v-for="item of sorts['items']" :key="item.id"><a href="">{{item.name}}</a></li>
                </ul>
              </div>
            </div>
            <div class="left-b">
              <img src="../../../assets/imgs/home_banner_L1@2x.png"/>
            </div>
          </div>

        <div class="c-right">
          <ul>
            <li class="item-box" v-for="item of list" :key="item.id">
              <a class="item-bg"> </a>
              <a class="item-bg cover" v-if="item.isCollect"> </a>
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
              <div class="item-action" >
                <a href="javascript:;">-</a>
                <input type="text" :value="parseInt(item.minSoldNum)"/>
                <a href="javascript:;">+</a>
                <a style="cursor:pointer;">进货</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HomeCategoryIV',
  data () {
    return {
      list: [],
      sorts: {}
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
        this.list = data.categoryList2
        this.sorts = data.sortsList2
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/varible.scss';
  #categories {
    padding-bottom:30px;
    background-color:$bgColor3;
    @extend %wrapper;
    .category {
      height:610px;
      //margin-bottom:30px;
      display:flex;
      display:-ms-flexbox;
      .c-left {
        width:230px;
        height:610px;
        background-color:#81E3CE;
        .left-t {
          width:210px;
          height:264px;
          padding-top:36px;
          padding-left:20px;
          .ca_title {
            height:44px;
            padding-right:20px;
            width:190px;
            line-height:44px;
            position:relative;
            overflow:hidden;
            a {
              color:$color;
              font-family:PingFang-SC-Medium;
              font-size:36px;
              display:inline-block;
              height:44px;
              line-height:44px;
              width:185px;
              span {max-width:144px;overflow:hidden;display:inline-block;}
              .i-bg {
                display:inline-block;
                width:32px;
                height:32px;
                background:$Sprite;
                background-position:-84px 0;
                right:25px;
                top:7px;
                position:absolute;
              }
            }

          }
          .ca-list {
            overflow:hidden;
            height:204px;
            padding-top:16px;
            li {
              float:left;
              width:50px;
              height:50px;
              border-radius:50%;
              background-color:$color;
              text-align:center;
              margin-right:20px;
              margin-bottom:20px;
              overflow:hidden;
              a {
                font-size:12px;
                color:rgba(102,102,102,1);
                width:inherit;
                height:inherit;
                vertical-align:middle;
                display:table-cell;
                padding-left:7px;
                padding-right:7px;
              }
            }
          }
        }

        .left-b {
          width:230px;
          height:310px;
          img {
            width:100%;
          }
        }
      }
      .c-right {
        flex:1;
        -ms-flex:1;
        @extend %item;
        .item-box {
          margin-left:10px;
          margin-bottom:10px;
        }
      }
    }
  }
</style>
