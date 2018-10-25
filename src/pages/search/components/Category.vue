<template>
  <div id="ca-main" class="wrapper">
    <div class="sm_recorder">
      <a href="">默认</a>
      <a href="">销量<i class="re-bg1"> </i></a>
      <a href="">价格<i class="re-bg2"> </i></a>
      <div>
        共<span>888</span>个商品
      </div>
    </div>

    <div class="search_item_box">
      <ul>
        <li class="item_box">
          <a class="item_bg"> </a>
          <div class="item_img">
            <a href="" target="_blank"><img src="http://i8.yunmayi.com/upload/2015/04/30/7b948795d28a540658f4fc6f6da26950.jpgXXXXX!!!!!_300x300.jpg"/></a>
          </div>
          <div class="item_title">
            <a href="" target="_blank">百事可乐碳酸饮料汽水，夏天必备夏</a>
          </div>
          <div class="item_price">
            <i>￥</i><strong>47.9</strong>/箱
            <span>规格:330ml*24瓶</span>
          </div>
          <div class="item_action">
            <a href="javascript:;">-</a>
            <input type="text" value="1" data-min="1"/>
            <a href="javascript:;">+</a>
            <a href="">进货</a>
          </div>
        </li>
        <li class="item_box">
          <a class="item_bg active"> </a>
          <div class="item_img">
            <a href="" target="_blank"><img src="http://i8.yunmayi.com/upload/2015/04/30/7b948795d28a540658f4fc6f6da26950.jpgXXXXX!!!!!_300x300.jpg"/></a>
          </div>
          <div class="item_title">
            <a href="" target="_blank">百事可乐碳酸饮料汽水，夏天必备夏</a>
          </div>
          <div class="item_price">
            <i>￥</i><strong>47.9</strong>/箱
            <span>规格:330ml*24瓶</span>
          </div>
          <div class="item_action">
            <a href="javascript:;">-</a>
            <input type="text" value="1" data-min="1"/>
            <a href="javascript:;">+</a>
            <a href="">进货</a>
          </div>
        </li>
      </ul>
    </div>

    <div class="search_pages">
      <ul>
        <li v-if="cur>1"><a @click="cur--, pageClick()">上一页</a></li>
        <li v-if="cur === 1"><a class="ban_click">上一页</a></li>
        <li v-for="index in list" :key="index.id" :class="{'active': cur === index}"><a @click="btnClick(index)">{{index}}</a></li>
        <!--<li><a href="">1</a></li>-->
        <li class="pages_dots">…</li>
        <li><a >{{all-1}}</a></li>
        <li><a >{{all}}</a></li>
        <li v-if="cur !== all"><a @click="cur++, pageClick()">下一页</a></li>
        <li v-if="cur === all"><a class="ban_click">下一页</a></li>
      </ul>
      <span>共{{all}}页，到<input type="text" placeholder="1"/>页<button>确定</button></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchCategory',
  data () {
    return {
      all: 12,
      cur: 1
    }
  },
  watch: {
    cur: function (oldValue, newValue) {
      console.log(arguments)
    }
  },
  methods: {
    btnClick: function (data) {
      if (data !== this.cur) {
        this.cur = data
      }
    },
    pageClick: function () {
      console.log('现在在' + this.cur + '页')
    }
  },
  computed: {
    list: function () {
      var left = 1
      var right = this.all
      var ar = []
      if (this.all >= 5) {
        if (this.cur > 3 && this.cur < this.all - 2) {
          left = this.cur - 2
          right = this.cur + 2
        } else {
          if (this.cur <= 3) {
            left = 1
            right = 5
          } else {
            right = this.all
            left = this.all - 4
          }
        }
      }
      while (left <= right) {
        ar.push(left)
        left++
      }
      return ar
    }

  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/varible.scss';
  #ca-main {
    //background-color:$bgColor2;
    padding-top:30px;
    padding-bottom:30px;
    //@extend %wrapper;
    .sm_recorder {
      height:26px;
      background-color:rgba(245,245,245,1);
      margin-bottom:20px;
      padding:7px 10px;
      a {
        float:left;
        font-size:14px;
        color:rgba(153,153,153,1);
        display:inline-block;
        width:70px;
        height:26px;
        background:$color;
        text-align:center;
        line-height:26px;
        border:1px solid rgba(230,230,230,1);
        i {
          display:inline-block;
          width:16px;
          height:18px;
          vertical-align:middle;
          background:$Sprite;
        }
        .re-bg1 {background-position:-456px 0;}
        .re-bg2 {background-position:-473px 0;}
      }
      a:first-child {width:60px;}

      div {
        float:right;
        border:1px solid rgba(230,230,230,1);
        background-color:$color;
        min-width:82px;
        padding:0 9px;
        height:26px;
        font-size:14px;
        line-height:26px;
        color:rgba(153,153,153,1);
        text-align:center;
      }
    }

    .search_item_box {
      ul {
        display:inline-block;
        margin-bottom:10px;
        @extend %item;
        .item_box {
          margin-bottom:10px;
          margin-left:10px;
        }
        .item_box:nth-child(5n+1) {
          margin-left:0;
        }
      }
    }

    .search_pages {
      height:40px;
      .active a{
        color: #fff;
        cursor: default;
        background-color: #337ab7;
        border-color: #337ab7;
      }
      ul {
        margin:0 auto;
        width:690px;
        li {
          float:left;
          width:40px;
          height:40px;
          line-height:40px;
          font-size:14px;
          text-align:center;
          color:rgba(51,51,51,1);
          border:1px solid rgba(230,230,230,1);
          cursor:pointer;
          a {
            display:block;
            width:100%;
            height:100%;
            color:rgba(51,51,51,1);
          }
          a:hover {
            background-color:#eee;
          }
          a.ban_click {
            cursor:not-allowed;
          }
        }
        li:first-child,li:last-child {width:80px;}
        li:nth-child(n+2) {border-left:none;}
        .pages_dots {border:none;border-right:1px solid rgba(230,230,230,1);}
      }
      span {
        margin-left:17px;
        height:40px;
        line-height:40px;
        color:rgba(153,153,153,1);
        font-size:14px;
        input {
          width:40px;
          height:40px;
          color:rgba(51,51,51,1);
          text-align:center;
          border:1px solid rgba(230,230,230,1);
          margin:0 5px;
        }
        button {
          border:1px solid rgba(230,230,230,1);
          background-color:$color;
          width:50px;
          height:40px;
          margin-left:5px;
          cursor:pointer;
          outline:none;
        }
        button:active {
          opacity:.5;
          filter:Alpha(opacity=50);
        }
      }
    }
  }
</style>
