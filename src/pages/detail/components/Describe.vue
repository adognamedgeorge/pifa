<template>
  <div class="section2">
    <h1>{{list.title}}</h1>
    <h3>{{list.content}}</h3>
    <section class="section_desc">
      <ul>
        <li v-for="(item, index) of param" :key="index">{{index}}:<span>{{item}}</span></li>
      </ul>
    </section>
    <p>批发价：<i>￥</i><b>{{list.wholesale}}</b>/{{list.unit}}</p>
    <div>
      <span>数量：</span>
      <a href="javascript:;">-</a>
      <input type="text" :value="list.minSoldNum" data-min="1"/>
      <a href="javascript:;">+</a>
    </div>
    <a class="s2_a" href=""><i></i>加入购物车</a>
    <a class="s2_a" href=""><i></i>收藏商品</a>
  </div>
</template>

<script>
export default {
  name: 'DetailDescribe',
  props: {
    param: Object,
    list: Object
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/varible.scss';
  .section2 {
    width: 480px;
    margin: 0 10px 0 20px;
    float: left;
    height: 100%;
    font-size: 14px;
    color: rgba(153,153,153,1);
    h1 {
      height: 48px;
      line-height: 24px;
      font-size: 16px;
      color: rgba(51,51,51,1);
      padding: 0 3px;
      overflow: hidden;
      position: relative;
      margin-bottom: 10px;
      font-weight: medium;
    }
    h3 {
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 20px;
      height: 18px;
      line-height: 18px;
      overflow: hidden;
      font-weight: normal;
      font-size: 14px;
    }
    section {
      height: 126px;
      background-color: rgba(245,245,245,1);
      margin-bottom: 20px;
      overflow: hidden;
      ul {
        width: 480px;
        padding: 12px 0;
        li {
          width: 220px;
          padding: 8px 10px ;
          float: left;
          font-size: 14px;
          color: rgba(153,153,153,1);
          span {
            margin-left: 10px;
            color: rgba(51,51,51,1);
          }
        }
      }
    }
    p {
      height: 28px;
      line-height: 28px;
      margin-bottom: 30px;
      padding-left: 3px;
      i,b { color: rgba(230,45,45,1);}
      b { font-size: 24px;}
    }
    div {
      height: 30px;
      line-height: 30px;
      margin-bottom: 40px;
      padding-left: 3px;
      span {
        float: left;
        margin-right: 10px;
      }
      a {
        width: 30px;
        height: 30px;
        display: inline-block;
        border: 1px solid rgba(196,196,196,1);
        color: #666666;
        font-size: 16px;
        float: left;
        text-align: center;
        line-height: 30px;
        font-weight: bold;
      }
      input {
        width: 50px;
        height: 30px;
        line-height: 30px;
        border: none;
        border-top: 1px solid rgba(196,196,196,1);
        border-bottom: 1px solid rgba(196,196,196,1);
        text-align: center;
        float: left;
        font-size: 14px;
      }
    }
    .s2_a {
      height: 48px;
      line-height: 48px;
      width: 178px;
      display: inline-block;
      border: 1px solid rgba(230,45,45,1);
      margin: 0 20px 0 10px;
      text-align: center;
      font-size: 16px;
      background-color: rgba(230,45,45,1);
      color: $color;
      float: left;
      i {
        height: 24px;
        width: 24px;
        display: inline-block;
        background: $Sprite;
        background-position: -574px 2px;
        margin: 0 10px -6px 0;
      }
    }
    .s2_a:last-child {
      background-color: $bgColor2;
      color: rgba(230,45,45,1);
      i {
        background-position: -297px -1px;
        position: relative;
      }
    }
  }
</style>
