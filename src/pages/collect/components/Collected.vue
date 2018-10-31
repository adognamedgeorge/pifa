<template>
  <div id="collect">
    <div class="wrapper">
      <!--头部操作button-->
      <button @click="tedShow" :class="{focus_within: isTrue}">全部商品</button>
      <button @click="dueShow" :class="{focus_within: !isTrue}">失效商品</button>
      <a class="button" @click="headerShow" v-show="!isFalse">批量管理</a>
      <a class="button" @click="headerHide" v-show="isFalse">取消</a>
      <ul class="header_ul" v-show="isFalse">
        <li><input type="checkbox" id="checkbox" v-model="checked" @click="checkedAll"/>全选</li>
        <li>删除</li>
        <li class="footer_button" @click="footerShow">批量进货</li>
      </ul>
      <!--全部商品与失效商品-->
      <article class="section1" v-show="isTrue">
        <ul>
          <li class="item_box" v-for="item of list" :key="item.id">
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
            <div class="item_action" v-if="item.isCollect">
              <a href="javascript:;">-</a>
              <input type="text" :value="item.minSoldNum" data-min="1"/>
              <a href="javascript:;">+</a>
              <a href="javascript:;">进货</a>
            </div>
            <!--失效商品-->
            <div class="item_overdue iconfont clearfix" v-if="!item.isCollect">
              <i>&#xe602;</i>
              <span>此宝贝已失效</span>
            </div>
            <!--遮罩层-->
            <div class="item_mask" v-show="isFalse">
              <!--<div class="mask_radic" @click="radicSelect(index)" :class="{mask_selected: checked}" :for="index">&#8730;</div>-->
              <input :value="item.id" v-model="checkedList" type="checkbox" :id="item.id" class="mask_radic"/>
            </div>
          </li>
        </ul>
        <!--批量进货组件-->
        <collect-footer v-show="!footerFalse" :len="this.checkedList.length"></collect-footer>
      </article>
      <!--失效商品-->
      <collect-overdue class="section2" :list="list" v-show="!isTrue"></collect-overdue>
    </div>
    <!--批量进货底部固定-->
    <div class="footer_fixed" v-show="this.list.length>10 && isTrue">
      <div class="wrapper">
        <collect-footer :len="this.checkedList.length"></collect-footer>
      </div>
    </div>
  </div>
</template>

<script>
import CollectFooter from './Footer'
import CollectOverdue from './Overdue'
export default {
  name: 'CollectCollected',
  components: {
    CollectFooter,
    CollectOverdue
  },
  props: {
    list: Array
  },
  data () {
    return {
      isFalse: false,
      footerFalse: false,
      isTrue: true,
      checked: false,
      checkedList: []
    }
  },
  methods: {
    headerShow () {
      this.isFalse = true
    },
    headerHide () {
      this.isFalse = false
      this.footerFalse = false
    },
    footerShow () {
      this.footerFalse = true
    },
    tedShow () {
      this.isTrue = true
    },
    dueShow () {
      this.isTrue = false
    },
    checkedAll () {
      if (this.checked) {
        this.checkedList = []
      } else {
        this.checkedList = []
        this.list.forEach((item) => {
          this.checkedList.push(item.id)
        })
      }
    }
  },
  watch: {
    checkedList: {
      handler (val, oldVal) {
        this.checkedList.length === this.list.length ? this.checked = true : this.checked = false
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/varible.scss';
#collect {
  @extend %wrapper;
  button {
    width: 102px;
    font-size: 16px;
    margin-right: 21px;
    outline: none;
    border: none;
    height: 50px;
    background-color: inherit;
  }
  .header_ul {
    display: inline-block;
    float: right;
    height: 50px;
    line-height: 50px;
    li {
      float: left;
      margin-left: 20px;
      color: rgba(153, 153, 153, 1);
      font-size: 14px;
      position: relative;
      cursor: pointer;
      input {
        float: left;
        margin-right: 4px;
        margin-top: 17px;
        height: 16px;
        width: 16px;
      }
    }
    li:nth-child(2), li:nth-child(3) {
      padding-left: 20px;
    }
    li:nth-child(2)::before, li:nth-child(3)::before {
      position: absolute;
      content: '';
      background: $Sprite;
      height: 20px;
      width: 20px;
      left: -4px;
      bottom: 13px;
    }
    li:nth-child(2)::before {
      background-position: -437px 0;
    }
    li:nth-child(3)::before {
      background-position: -490px 0;
    }
  }
    a.button {
      width: 78px;
      height: 28px;
      border: 1px solid rgba(153, 153, 153, 1);
      text-align: center;
      line-height: 28px;
      margin-top: 10px;
      display: inline-block;
      margin-left: 20px;
      float: right;
      color: rgba(153, 153, 153, 1);
      font-size: 14px;
      cursor: pointer;
    }

  .section1 {
    padding-top: 20px;
    box-shadow: 0 -1px 0 0 rgba(242, 242, 242, 1);
    ul {
      margin-bottom: 10px;
      display: inline-block;
      @extend %item;
      .item_box {
        margin-bottom: 10px;
        margin-left: 10px;
        border: 1px solid rgba(242, 242, 242, 1);
        width: 228px;
      }
      .item_box:nth-child(5n+1) {
        margin-left: 0;
      }
      .item_box:hover {
        transform: unset;
        box-shadow: unset;
      }
    }
  }

  .section1 .item_box {
    position: relative;
    .item_mask {
      background-color: rgba(0, 0, 0, .3);
      height: 300px;
      width: 230px;
      .mask_radic {
        -webkit-appearance: none;
        height: 40px;
        line-height: 40px;
        width: 40px;
        background-color: rgba(153, 153, 153, 1);
        color: rgba(255, 255, 255, 1);
        text-align: center;
        font-size: 26px;
        font-weight: bold;
        cursor: pointer;
        &:before {
          content: '';
          position: absolute;
          top: 2px;
          left: 13px;
          width: 12px;
          height: 24px;
          border: solid white;
          border-width: 0 4px 4px 0;
          transform: rotate(45deg);
        }
      }
    }
    .item_mask, .mask_radic {
      position: absolute;
      top: 0;
      right: 0;
    }
    .mask_radic:checked  {
      -webkit-appearance: none;
      background-color: #e62d2d;
    }
    .item_overdue {
      text-align: center;
      color: rgba(51, 51, 51, 1);
      font-size: 16px;
      height: 26px;
      line-height: 26px;
      i {
        font-size: 24px;
        color: rgba(216, 216, 216, 1);
        display: inline-block;
        vertical-align: middle;
        margin-top: -2px;
      }
    }
  }
  .footer_fixed {
    box-shadow:0px -4px 10px 0px rgba(153,153,153,0.1);
  }
  .focus_within {
    color: rgba(230,45,45,1);
    border-bottom: 2px solid rgba(230,45,45,1) !important;
  }
}
</style>
