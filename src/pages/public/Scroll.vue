<template>
  <div id="scrollTop" v-show="goTopShow" ref="box"> <!-- ref注册引用信息 -->
    <ul>
      <li class="scr_li" :class="{selected: isTrue}" ref="liHeight"><a href="#special" class="iconfont clearfix">限时特价<i>&#xe600;</i></a></li>
      <li class="scr_li" v-for="(item,index) of list" :key="item.id" :class="{selected: currentIndex === index}" ref="liItem">
        <a :href="'#c_' + index" class="iconfont clearfix">{{item.sideTitle}}<i>&#xe600;</i></a>
      </li>
      <li class="scr_li toTop" @click="backTop"><a href="#" class="iconfont clearfix">返回顶部<i>&#xe62d;</i></a></li>
    </ul>
  </div>
</template>

<script>
import Link from './public_js/link.js'
export default {
  name: 'Scroll',
  props: {
    list: Array
  },
  data () {
    return {
      scrollTop: '',
      goTopShow: false,
      isTrue: false,
      currentIndex: null
    }
  },
  methods: {
    handleScroll () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // 侧栏的offsetTop // 侧栏高度height // liItem:侧栏li的个数（除去首尾）
      const scrollBox = this.$refs.box.offsetTop
      const liH = this.$refs.liHeight.offsetHeight
      const liItem = this.$refs.liItem
      // 侧栏列表切换
      if (scrollTop > 400) {
        const scrollTopDis = scrollTop - this.catTop + scrollBox + liH
        this.goTopShow = true
        scrollTop > 730 ? this.isTrue = false : this.isTrue = true
        for (let i = 0; i < liItem.length; i++) {
          liItem[i].index = i
          if (scrollTopDis >= 610 * liItem[i].index && scrollTopDis < 610 * (liItem[i].index + 1)) {
            this.currentIndex = liItem[i].index
          } else if (scrollTopDis < 0) {
            this.currentIndex = null
          }
        }
      } else if (scrollTop < 400) {
        this.goTopShow = false
        this.isTrue = false
      }
    },
    backTop () {
      // let back = setInterval(() => {
      //   if (document.body.scrollTop || document.documentElement.scrollTop) {
      //     document.body.scrollTop -= 100
      //     document.documentElement.scrollTop -= 100
      //   } else {
      //     clearInterval(back)
      //   }
      // }, 2000)
      const bTop = document.body || document.documentElement
      bTop.scrollTop = 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    const vm = this
    Link.$on('val2', (dat) => {
      vm.catTop = dat
    })
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/varible.scss';
  #scrollTop {
    position: fixed;
    top: 130px;
    left: 50%;
    width: 80px;
    margin-left: -677px;
    background-color: #F2F2F2;
    z-index: 7;
    .scr_li {
      height: 30px;
      width: 68px;
      background-color: rgba(0,0,0,0.4);
      line-height: 30px;
      margin-bottom: 2px;
      padding: 0 6px;
      a {
        font-size: 14px;
        color: $color;
        display: block;
      }
      i {
        font-size: 9px;
        float: right;
      }
    }
    .scr_li:hover {
      background-color: rgba(230,45,45,1);
    }
    .selected {
      background-color: rgba(230,45,45,1);
    }
    .toTop {
      background-color: rgba(0,0,0,0.2);
    }
  }
  .clearfix:before, .clearfix:after {
    content: "";
    display: block;
    clear: both;
  }
  .clearfix {
    zoom: 1;
  }
</style>
