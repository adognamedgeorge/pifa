<template>
  <div class="content2 wrapper">
    <ul>
      <li v-for="item of adList" :key="item.id">
        <section>
          <div class="section_img">
            <img src="@/assets/imgs/coupon_images_allproducts@2x.png"/>
          </div>
          <div class="section_content">
            <header>
              ￥<b>{{item.price}}</b>
              <span>满{{item.limit}}元可用</span>
            </header>
            <p>{{item.desc}}</p>
            <h3>{{item.validity}}</h3>
          </div>
        </section>
        <aside>
          <div class="wavy_line"></div>
          <a href="">立即领取</a>
        </aside>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CouponAlready',
  props: {
    adList: Array
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/varible.scss';

</style>
