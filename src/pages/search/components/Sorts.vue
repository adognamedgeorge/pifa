<template>
  <div id="sm_header" class="wrapper">
      <div class="sm_title">
        <a href="#">全部商品</a>
        <span> </span>
        <a href="">奶</a>
      </div>

      <div class="sm_leimu">
        <h3>类目</h3>
        <div>
          <a href="">食品零食</a><a href="">酒水饮料</a><a href="">冰淇淋</a><a href="">日用洗护</a><a href="">家用百货</a><a href="">九五折专区</a>
          <a href="">速冻食品</a><a href="">母婴用品</a><a href="">粮油调味</a><a href="">尾品汇</a>
        </div>
      </div>

      <div class="sm_brand" :class="{show: showHeight, hide: hideHeight}">
        <h3>品牌</h3>
        <div>
          <a href="">维他奶</a><a href="">酒水饮</a><a href="">冰淇</a><a href="">日用洗</a><a href="">家用百</a><a href="">九五折</a>
          <a href="">速冻食品</a><a href="">母婴用品</a><a href="">粮油味</a>
          <a href="">食品零食</a><a href="">酒水饮料</a><a href="">冰淇淋</a><a href="">日洗护</a><a href="">家用货</a><a href="">九专区</a>
          <a href="">速冻食品</a><a href="">母用品</a><a href="">粮油调味</a>
          <a href="">食零食</a><a href="">酒水饮料</a><a href="">冰淇淋</a><a href="">日用洗护</a><a href="">家用百货</a><a href="">九五折专区</a>
          <a href="">速冻食品</a><a href="">母婴用品</a><a href="">粮油调味</a>
          <a href="">食零食</a><a href="">酒水料</a><a href="">冰淇淋</a><a href="">日用护</a><a href="">家百货</a><a href="">九五折专区</a>
          <a href="">速冻品</a><a href="">母婴品</a><a href="">粮油味</a>
        </div>
        <a class="sm_more" @click="overShow" >{{text}}<span class="sm_more_bg" :class="{hover: iconTurn}"> </span></a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'SearchSorts',
  data () {
    return {
      showHeight: false,
      hideHeight: true,
      text: '更多',
      iconTurn: false
    }
  },
  methods: {
    overShow () {
      this.showHeight = !this.showHeight
      this.hideHeight = !this.hideHeight
      this.showHeight ? this.text = '收起' : this.text = '更多'
      this.iconTurn = !this.iconTurn
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/varible.scss';
  #sm_header {
    //background-color:$bgColor2;
    //@extend %wrapper;
    .sm_title {
      height: 18px;
      padding-top: 20px;
      padding-bottom: 10px;
      line-height: 18px;
      font-size: 14px;
      a {
        color: rgba(153,153,153,1);
        float: left;
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

    .sm_leimu {
      height: 40px;
      border: 1px solid rgba(230,230,230,1);
      line-height: 40px;
      font-size: 14px;
      @extend %h3a;
    }

    .sm_brand {
      border: 1px solid rgba(230,230,230,1);
      border-top: none;
      font-size: 14px;
      overflow: hidden;
      position: relative;
      @extend %h3a;
      h3 {
        line-height: 40px;
        height: inherit;
        position: absolute;
      }
      div {
        padding-top: 7px;
        padding-bottom: 7px;
        width: 1030px;
        float: left;
        line-height: 26px;
        margin-left: 80px;
      }
      .sm_more {
        padding-top: 10px;
        display: inline-block;
        color: rgba(153,153,153,1);
        font-size: 14px;
        float: left;
        cursor: pointer;
      }
      .sm_more_bg {
        display: inline-block;
        width: 16px;
        height: 16px;
        background: $Sprite;
        background-position: 0 0;
        margin-bottom: -3px;
      }
      .hover {
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
      }
    }

    .show {
      height: 100%;
    }
    .hide {
      height: 92px;
    }
  }
</style>
