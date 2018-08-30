<template>
   <div id="main" class="wrapper">
     <header>
       <a href="#">全部商品</a>
       <span> </span>
       <a href="">食品零食</a>
       <span> </span>
       <a href="">糖果巧克力</a>
       <span> </span>
       <a href="">阿尔卑斯糖果巧克力斯糖果巧克力斯糖果巧克力</a>
     </header>

     <section>
       <div class="section1">
         <div>
           <img src=""/>
         </div>
         <ul>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
           <li></li>
         </ul>
       </div>

       <div class="section2">
         <h1>阿尔卑斯糖果巧克力阿力阿尔卑斯糖果巧克力糖果巧克力卑斯糖果巧克力糖果巧</h1>
         <h3>500g散装阿尔卑斯糖果巧克力500g</h3>
         <section></section>
         <p>批发价：32</p>
         <div>数量：</div>
         <a href="">加入购物车</a><a href="">收藏商品</a>
       </div>
       <div class="section3"></div>
     </section>
   </div>
</template>

<script>
export default {
  name: 'DetailImgzoom'
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/varible.scss';
  #main {
    margin:0 auto;
    header {
      height:18px;
      line-height:18px;
      padding-bottom:30px;
      padding-top:20px;
      font-size:14px;
        a {
          color:rgba(153,153,153,1);
          float:left;
          max-width:244px;
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
        }
        a:hover {
          color:rgba(230,45,45,1);
        }
        span {
          display:inline-block;
          width:16px;
          height:16px;
          background:$Sprite;
          background-position:-16px 0;
          float:left;
          margin-top:1px;
        }
      }

    section {
      height:583px;
      margin-bottom:17px;
      .section1,.section2,.section3 {
        float:left;
        height:100%;
      }
      .section1 {
        width:450px;
        div {
          width:100%;
          height:450px;
          border:1px solid rgba(230,230,230,1);
          margin-bottom:30px;
        }
        ul {
          overflow:hidden;
          margin-bottom:40px;
          height:80px;
          li {
            float:left;
            width:78px;
            height:78px;
            border:1px solid rgba(230,230,230,1);
            margin:0 5px;
          }
          li:hover {border:1px solid rgba(230,45,45,1);}
        }
      }
      .section2 {
        width:480px;
        margin:0 10px 0 20px;
        h1 {
          height:48px;
          line-height:24px;
          font-size:16px;
          color:rgba(51,51,51,1);
          padding:0 3px;
          overflow:hidden;
          position:relative;
          margin-bottom:10px;
        }
        h3 {
          height:18px;
          line-height:18px;
          font-size:14px;
          color:rgba(153,153,153,1);
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
          margin-bottom:20px;
        }
        section {
          height:126px;
          background-color:$bgColor3;
          margin-bottom:20px;
        }
        p {
          height:28px;
          line-height:28px;
          margin-bottom:30px;
          padding-left:3px;
        }
        div {
          height:30px;
          line-height:30px;
          margin-bottom:40px;
          padding-left:3px;
        }
        a {
          height:48px;
          line-height:48px;
          width:178px;
          display:inline-block;
          border:1px solid rgba(230,45,45,1);
          margin:0 20px 0 10px;
          text-align:center;
          font-size:16px;
          color:rgba(230,45,45,1);
        }
      }
      .section3 {
        width:230px;
      }
    }
  }
</style>
