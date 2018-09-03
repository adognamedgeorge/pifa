<template>
  <div>
    <Header></Header>
    <Searcher></Searcher>
    <coupon-use></coupon-use>
  </div>
</template>

<script>
import CouponUse from './components/Use'
export default {
  name: 'Coupon',
  components: {
    CouponUse
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/varible.scss';
  div {
    @extend %wrapper;
  }
</style>
