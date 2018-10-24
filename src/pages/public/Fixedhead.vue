<template>
  <div id="topfixed" v-show="fixShow">
    <div class="wrapper">
      <div class="topfixed_title">
        <i>&#8801;</i>
        <h2>全部商品分类</h2>
      </div>
      <div class="topfixed_search">
        <form action="http://pifa.v2.com/search/index" method="GET">
          <input type="text" placeholder="支持商品关键字、品牌、条码扫描搜索"/>
          <button type="submit">搜索</button>
        </form>
      </div>
      <!--公共购物车组件-->
      <Cart class="cart"></Cart>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fixed',
  data () {
    return {
      scrollTop: null,
      fixShow: false
    }
  },
  methods: {
    handleScroll () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      scrollTop > 130 ? this.fixShow = true : this.fixShow = false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
  #topfixed {
    background: #fff;
    width: 100%;
    z-index: 99;
    top: 0;
    height: 40px;
    position: fixed;
    border-bottom: 1px solid #E41C1C;
    .wrapper {
      width: 1190px;
      margin: 0 auto;
      position: relative;
    }
    .topfixed_title {
      float: left;
      width: 210px;
      padding-left: 20px;
      background: #E41C1C;
      color: #fdfdfd;
      line-height: 40px;
      height: 100%;
      i {
        float: left;
        font-size: 24px;
        color: #fdfdfd;
      }
      h2 {
        font-size: 16px;
        letter-spacing: 1px;
        margin-left: 6px;
        float: left;
        display: inline-block;
      }
    }
    .topfixed_search {
      form {
        height: 40px;
        width: 720px;
        overflow: hidden;
        input {
          border-color: transparent;
          width: 583px;
          height: 38px;
          padding: 0 0 0 15px;
          font-size: 14px;
        }
        button {
          float: right;
          border: none;
          background: #e62d2d;
          color: #ffffff;
          height: 40px;
          font-size: 16px;
          padding: 0 26px;
          cursor: pointer;
          -webkit-border-radius: 0;
          -moz-border-radius: 0;
          border-radius: 0;
        }
      }
    }
    .cart {
      position: absolute;
      top: 0;
      right: 0;
      margin: 0;
      border: transparent;
      border-bottom: none;
      height: 40px;
      -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0 , 0.1);
              box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
    }
  }
</style>
