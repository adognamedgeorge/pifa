<template>
   <div id="use_box" class="wrapper">
     <button>可领取</button>
     <button>已领取</button>
     <button>如何使用</button>
     <label href="">我的优惠券</label>

     <div class="content1">
       <ul>
         <li>
           <section>
             <img src=""/>
             <div></div>
           </section>
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
       </ul>
     </div>

     <div class="content2">
       1234
     </div>

     <div class="content3">
       如何使用
     </div>
   </div>
</template>

<script>
export default {
  name: 'CouponUse'
}
</script>

<style lang="scss" scoped>
    #use_box {
        button {
          width: 102px;
          height:50px;
          color: rgba(51, 51, 51, 1);
          font-size: 16px;
          margin-right: 21px;
          display: inline-block;
          outline:none;
          box-sizing: border-box;
          background-color:inherit;
          border:none;
        }
        button:focus-within {
          border-bottom:2px solid rgba(230,45,45,1);
          color:rgba(230,45,45,1);
        }
        label {
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

      .content1,.content2,.content3 {
        display:none;
        padding-top:30px;
        /*border-top:1px solid rgba(242, 242, 242, 1);*/
        box-shadow:0 -1px 0 0 rgba(242,242,242,1);
        ul {
          li {
            width:378px;
            height:158px;
            border:1px solid rgba(242,242,242,1);
            float:left;
            margin-left:25px;
            margin-bottom:20px;
            section {
              float:left;
              padding:24px 29px 24px 16px;
            }
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

      button:first-child:focus-within ~ .content1 {display:block;}
      button:nth-child(2):focus-within ~ .content2 {display:block;}
      button:nth-child(3):focus-within ~ .content3 {display:block;}
    }

  #use_box:not(:focus-within) {
    button:first-child {
      border-bottom:2px solid rgba(230,45,45,1);
      color:rgba(230,45,45,1);
    }
    .content1 {display:block;}
  }
</style>
