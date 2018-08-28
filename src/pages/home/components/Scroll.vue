<template>
  <div id="scrollTop" v-show="goTopShow" >
    <ul>
      <li class="scr-li"><a href="#special" class="iconfont">限时特价<i>&#xe600;</i></a></li>
      <li class="scr-li"><a href="#c1" class="iconfont">酒水饮料<i>&#xe600;</i></a></li>
      <li class="scr-li"><a href="#c2" class="iconfont">食品零食<i>&#xe600;</i></a></li>
      <li class="scr-li"><a href="#c3" class="iconfont">粮油调味<i>&#xe600;</i></a></li>
      <li class="scr-li"><a href="#c4" class="iconfont">日用洗护<i>&#xe600;</i></a></li>
      <li class="scr-li"><a href="#c5" class="iconfont">家用百货<i>&#xe600;</i></a></li>
      <li class="scr-li"><a href="#c6" class="iconfont">冰淇淋<i>&#xe600;</i></a></li>
      <li class="scr-li"><a href="#c7" class="iconfont">速冻食品<i>&#xe600;</i></a></li>
      <li class="scr-li"><a href="#c8" class="iconfont">尾品汇<i>&#xe600;</i></a></li>
      <li class="scr-li"><a href="#c9" class="iconfont">特价区<i>&#xe600;</i></a></li>
      <li class="scr-li toTop"><a href="#" class="iconfont">返回顶部<i>&#xe62d;</i></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeScroll',
  data () {
    return {
      scrollTop: '',
      goTopShow: false
    }
  },
  methods: {
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      console.log(scrollTop)
      if (scrollTop > 350) {
        this.goTopShow = true
      } else if (scrollTop < 350) {
        this.goTopShow = false
      }
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
  @import '~@/assets/styles/varible.scss';
  #scrollTop {
    position:fixed;
    top:130px;
    left:50%;
    width:80px;
    height:350px;
    margin-left:-677px;
    background-color:#F2F2F2;
    z-index:7;
    .scr-li {
      height:30px;
      width:80px;
      background-color:rgba(0,0,0,0.4);
      line-height:30px;
      text-align:center;
      margin-bottom:2px;
      a {
        font-size:14px;
        color:$color;
      }
      i {
        font-size:9px;
      }
    }
    .scr-li:hover {
      background-color:rgba(230,45,45,1);
      /*opacity:.7;*/
      /*filter:Alpha(opacity=70);*/
    }
    .selected {
      background-color:rgba(230,45,45,1);
    }
    .toTop {
      background-color:rgba(0,0,0,0.2);
    }
  }
</style>
