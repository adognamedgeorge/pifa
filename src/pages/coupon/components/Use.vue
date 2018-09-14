<template>
   <div id="use_box" class="wrapper">
     <button>可领取</button>
     <button>已领取</button>
     <button>如何使用</button>
     <label>我的优惠券</label>

     <div class="content1">
       <ul>
         <li>
           <section>
             <div class="section_img">
               <img src="http://i8.yunmayi.com/upload/2015/04/30/7b948795d28a540658f4fc6f6da26950.jpgXXXXX!!!!!_300x300.jpg"/>
             </div>
             <div class="section_content">
                <header>
                  ￥<b>28</b>
                  <span>满100元可用</span>
                </header>
                <p>限食品零食类，特殊商品不可用</p>
                <h3>2018.7.18-2018.8.1</h3>
             </div>
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
          cursor:pointer;
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
              padding:24px 0 24px 16px;
              .section_img {
                width:100px;height:100px;
                margin-top:6px;
                float:left;
                img {width:100%;}
              }
              .section_content {
                width:140px;min-height:112px;
                float:left;
                font-size:12px;
                padding-left:14px;
                header {
                  height:44px;
                  line-height:44px;
                  color:#E62D2D;
                  font-size:16px;
                  margin-bottom:10px;
                  b {font-size:30px;}
                  span {
                    font-size:12px;
                    color:rgba(251,125,125,1);
                    background:rgba(255,237,237,1);
                    padding:0 6px;
                  }
                }
                p {
                  color:rgba(51,51,51,1);
                  font-size:14px;
                  margin-bottom:6px;
                }
                h3 {color:rgba(153,153,153,1);font-weight:normal;}
              }
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
