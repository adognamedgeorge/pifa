<template>
  <div>
    <section class="section2">
      <ul>
        <li class="item_box">
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
            <a href="javascript:;">进货</a>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CollectOverdue'
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/varible.scss';
  .section2 {
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
</style>
