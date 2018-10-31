<template>
  <div>
    <Header></Header>
    <Searcher></Searcher>
    <coupon-receive :list="list"></coupon-receive>
  </div>
</template>

<script>
import axios from 'axios'
import CouponReceive from './components/Receive'
export default {
  name: 'Coupon',
  data () {
    return {
      list: []
    }
  },
  components: {
    CouponReceive
  },
  methods: {
    getCouInfo () {
      axios.get('/api/coupon.json')
        .then(this.getCouInfoSucc)
    },
    getCouInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.list = data.couponList
      }
    }
  },
  mounted () {
    this.getCouInfo()
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/varible.scss';
  div {
    @extend %wrapper;
  }
</style>
