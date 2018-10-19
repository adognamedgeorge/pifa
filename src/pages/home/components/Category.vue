<template>
  <div class="categories" ref="box"> <!--ref注册引用信息-->
    <div class="wrapper" >
        <div :id="'c_' + index1" class="category" v-for="(item,index1) of categories" :key="item.id">
          <div class="c_left">
            <div class="left_t">
              <div class="ca_title">
                <a href=""><span>{{item.sideTitle}}</span><i class="i_bg"> </i></a>
              </div>
              <div class="ca_list">
                <ul>
                  <li v-for="item2 of item.sideSorts" :key="item2.id"><a href="">{{item2.name}}</a></li>
                </ul>
              </div>
            </div>
            <div class="left_b">
              <img :src="item.sideImg"/>
            </div>
          </div>

          <div class="c_right">
            <ul>
              <li class="item_box" v-for="(item3, index) of item['categoryList']" :key="item3.id">
                <a class="item_bg"> </a>
                <a class="item_bg cover" v-if="item3.isCollect"> </a>
                <div class="item_img">
                  <a href="" target="_blank"><img :src="item3.img" /></a>
                </div>
                <div class="item_title">
                  <a href="" target="_blank">{{item3.title}}</a>
                </div>
                <div class="item_price">
                  <i>￥</i><strong>{{item3.price}}</strong>/{{item3.unit}}
                  <span>规格:{{item3.spec}}</span>
                </div>
                <div class="item_action" >
                  <a href="javascript:;" @click="reduce(index1,index)" >-</a>
                  <input type="text" :value="parseInt(item3.minSoldNum)" ref="item_count" readonly/>
                  <a href="javascript:;" @click="plus(index)" >+</a>
                  <a style="cursor:pointer;" @click="add(index1,index)">进货</a>
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
// 定义个公共的公共实例文件link.js，作为中间仓库来传值(非父子组件之间)
import Link from '../../public/public_js/link.js'
export default {
  name: 'HomeCategoryI',
  data () {
    return {
      list: [],
      sorts: {},
      categories: []
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
        this.categories = data.categories
        this.cartNum = data.cartNum
      }
    },
    plus (index) {
      this.$refs.item_count[index].value++
    },
    reduce (index1, index) {
      if (this.$refs.item_count[index].value <= this.categories[index1]['categoryList'][index].minSoldNum) return
      this.$refs.item_count[index].value--
    },
    add (index1, index) {
      // Link.$emit('val', parseInt(this.list[index].minSoldNum) + parseInt(this.list[index].num))
      const catList = this.categories[index1]['categoryList'][index]
      // 点击进货传值给进货单
      Link.$emit('val',
        { 'imgUrl': catList.img,
          'title': catList.title,
          'minSoldNum': catList.minSoldNum,
          'price': catList.price
        })
    },
    handleScroll () {
      const scroll = this.$refs.box.offsetTop
      Link.$emit('val', scroll)
    }
  },
  mounted () {
    this.getHomeInfo()
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/varible.scss';
  @import '~@/assets/styles/category.scss';
</style>
