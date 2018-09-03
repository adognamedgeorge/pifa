<template>
   <div class="wrapper">
     <header>
       <label tabindex="1">可领取</label>
       <label tabindex="2">已领取</label>
       <label>如何使用</label>
       <a href="">我的优惠券</a>
     </header>

     <section>
       <ul>
         <li>
           <aside>
              <div class="wavy-line"></div>
             <a href="">立即领取</a>
           </aside>
         </li>
         <li>
           <aside>
             <div class="wavy-line"></div>
           </aside>
         </li>
         <li>
         </li>
         <li>
         </li>
       </ul>
     </section>
   </div>
</template>

<script>
export default {
  name: 'CouponUse'
}
</script>

<style lang="scss" scoped>
    div {
      header {
        height: 50px;
        line-height: 50px;
        margin-bottom: 30px;
        box-shadow: 0 1px 0 0 rgba(242, 242, 242, 1);
        -webkit-box-shadow: 0 1px 0 0 rgba(242, 242, 242, 1);
        label {
          width: 102px;
          color: rgba(51, 51, 51, 1);
          font-size: 16px;
          margin-right: 21px;
          display: inline-block;
          text-align: center;
        }
        label:focus {
          color: rgba(230, 45, 45, 1);
          border: yellow;
          background: red;
        }
        a {
          width:78px;height:28px;
          border:1px solid rgba(153,153,153,1);
          text-align:center;
          line-height:28px;
          margin-top:10px;
          display:inline-block;
          font-size:14px;
          color:rgba(153,153,153,1);
          float:right;
        }
      }

      section {
        ul {
          li {
            width:378px;
            height:158px;
            border:1px solid rgba(242,242,242,1);
            float:left;
            margin-left:25px;
            margin-bottom:20px;
            aside {
              width:81px;
              background-color:#FB7D7D;
              height:100%;
              float:right;
              overflow:hidden;
              position:relative;
              text-align:center;
              a {
                display:inline-block;
                height:50%;
                line-height:20px;
                width:16px;
                padding:40px 0;
                font-size:16px;
                color:rgba(255,255,255,1)
              }
            }
            aside::before {
              content:'';
              position:absolute;
              height:10px;
              width:10px;
              background-color:white;
              left:-5px;top:-5px;
              border-radius:100%;
            }
            aside::after {
              content:'';
              position:absolute;
              height:10px;
              width:10px;
              background-color:white;
              left:-5px;bottom:-5px;
              border-radius:100%;
            }
            .wavy-line {
              position:absolute;
              top:5%;
              width:4px;
              height:90%;
              background-image: radial-gradient(circle, transparent, transparent 4px, #fff 4px, #fff);
              background-size:8px 8px;
            }
          }
          li:nth-child(3n+1) {
            margin-left:0;
          }
        }
      }
    }
</style>
