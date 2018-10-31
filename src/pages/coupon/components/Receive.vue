<template>
   <div id="use_box" class="wrapper">
     <button>可领取</button>
     <button>已领取</button>
     <button>如何使用</button>
     <label>我的优惠券</label>
     <!--可领取优惠券-->
     <div class="content1">
       <ul>
         <li v-for="item of list" :key="item.id">
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
     <!--已领取优惠券-->
     <coupon-already :adList="list"></coupon-already>
     <!--如何使用-->
     <div class="content3">
       如何使用
     </div>
   </div>
</template>

<script>
import CouponAlready from './Already'
export default {
  name: 'CouponReceive',
  components: {
    CouponAlready
  },
  props: {
    list: Array
  }
}
</script>
<style lang="scss" scoped>
  @import '~@/assets/styles/varible.scss';
    #use_box {
        button {
          width: 102px;
          height: 50px;
          color: rgba(51, 51, 51, 1);
          font-size: 16px;
          margin-right: 21px;
          display: inline-block;
          outline:none;
          box-sizing: border-box;
          background-color: inherit;
          border: none;
          cursor: pointer;
        }
        button:focus-within {
          border-bottom: 2px solid rgba(230,45,45,1);
          color: rgba(230,45,45,1);
        }
        label {
          width: 78px;height:28px;
          border: 1px solid rgba(153,153,153,1);
          text-align: center;
          line-height: 28px;
          margin-top: 10px;
          display: inline-block;
          font-size: 14px;
          color: rgba(153,153,153,1);
          float: right;
        }

      button:first-child:focus-within ~ .content1 { display:block; }
      button:nth-child(2):focus-within ~ .content2 { display:block; }
      button:nth-child(3):focus-within ~ .content3 { display:block; }
    }

  #use_box:not(:focus-within) {
    button:first-child {
      border-bottom: 2px solid rgba(230,45,45,1);
      color: rgba(230,45,45,1);
    }
    .content1 { display:block; }
  }
</style>
