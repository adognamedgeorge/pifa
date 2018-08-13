<template>
  <div id="search">
    <div class="wrapper">
      <div class="box">
        <div class="logo">
          <div class="logo-img">
            <a href=""><img src="http://pifa.yunmayi.com/statics/images/new_log.png" title="云蚂蚁www.yunmayi.com"/></a>
          </div>
          <div class="logo-font">
            <a href=""><img src="http://pifa.yunmayi.com/statics/images/index/04171124.png" title="云蚂蚁批发平台"/></a>
          </div>
        </div>
        <div class="form">
          <form action="#">
            <input class="text" type="text" placeholder="搜索商品关键字，品牌"/>
            <button class="button" type="submit">搜索</button>
          </form>
        </div>

        <div class="cart">
          <a class="cart-bg1" href=""> </a>
          <p class="cart-p">进货单</p>
          <span class="cart-span">99</span>
          <i></i>
          <a class="cart-bg2" href=""> </a>

          <div class="cart-hide">
            <h3>新加入的商品</h3>
            <ul>
              <li>
                <a class="ch-img" href=""><img src="../../../assets/imgs/4.png"/></a>
                <div class="ch-content">
                  <p class="ch-text"><a href="#">芝士印尼进口丽姿势姿势姿势姿势姿势</a></p>
                  <div>
                    <a href="javascript:;">-</a>
                    <input type="text" value="8" data-min="0"/>
                    <a href="javascript:;">+</a>
                    <span>￥<strong>49.5</strong></span>
                  </div>
                </div>
              </li>
              <li>2</li>
              <li>
                <a class="ch-img" href=""><img src="../../../assets/imgs/4.png"/></a>
                <div class="ch-content">
                  <p class="ch-text"><a href="#">芝士印尼进口丽姿势姿势姿势姿势姿势</a></p>
                  <div>
                    <a href="javascript:;">-</a>
                    <input type="text" value="8" data-min="0"/>
                    <a href="javascript:;">+</a>
                    <span>￥<strong>49.5</strong></span>
                  </div>
                </div>
              </li>
              <li>3</li>
              <li>2</li>
              <li>3</li>
              <li>3</li>
            </ul>
            <div class="hide-footer">
              共计<span>￥<strong>198</strong></span>
              <a href="" target="_blank">去结算</a>
            </div>
          </div>
        </div>

        <div class="img">
          <a href=""> <img src="../../../assets/imgs/2.png" alt="云蚂蚁app二维码"/></a>
        </div>
      </div>


      <div class="bar">
        <h2>全部商品分类</h2>
        <ul>
          <li><a href="">首页</a></li>
          <li><a href="">酒水饮料</a></li>
          <li><a href="">食品零食</a></li>
          <li><a href="">粮油调味</a></li>
          <li><a href="">日常洗护</a></li>
          <li><a href="">家用百货</a></li>
          <li><a href="">冰淇淋</a></li>
          <li><a href="">速冻食品</a></li>
        </ul>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name:"HomeSearcher"
}
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/varible.styl';
  #search {
    height:150px;
    background-color: $color;
    @extend %wrapper;
    .box {
      height: 150px;
      margin: 0 auto;
      margin-bottom: -30px;
      display: flex;
      display:-ms-flexbox;
      .logo {
        width: 193px;
        height: 76px;
        margin-top: 20px;
        display: flex;
        display:-ms-flexbox;
        align-items: center;
        .logo-img {
          width: 90px;
          img {
            width: 100%;
          }
        }
        .logo-font {
          width: 103px;
          height: 25px;
          img {
            width: 100%;
          }
        }
      }

      .form {
        width: 550px;
        height: 40px;
        margin-left: 97px;
        margin-top: 47px;
        border: 2px solid rgba(230, 45, 45, 1);
        letter-spacing: -8px;
        .text {
          width: 458px;
          border: none;
          padding-left: 12px;
          font-size: 12px;
          color: rgba(153, 153, 153, 1);
          line-height: 16px;
          height: 16px;
        }
        .button {
          height: 40px;
          width: 80px;
          letter-spacing: normal;
          background-color: rgba(230, 45, 45, 1);
          border: none;
          font-size: 18px;
          color: $color;
        }
      }

      .cart {
        margin-left: 50px;
        top: 48px;
        width: 150px;
        height: 40px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        position: relative;
        z-index:1;
        a {
          display: inline-block;
        }

        .cart-p {
          display: inline-block;
          font-size: 14px;
          color: rgba(51, 51, 51, 1);
          line-height: 40px;
          height: 40px;
          width: 50px;
          margin-left: 52px;
        }

        .cart-span {
          font-size: 14px;
          color: rgba(230, 45, 45, 1);
          display: inline-block;
          height: 14px;
          width: 17px;
        }
        i {
          width: 1px;
          height: 13px;
          background: rgba(0, 0, 0, 0.2);
          display: inline-block;
          position: absolute;
          right: 49px;
          top: 14px;
        }

        .cart-bg1 {
          background:url("../../../assets/imgs/sprite.png") no-repeat;
          background-position: -32px 0;
          width: 24px;
          height: 24px;
          position: absolute;
          left: 22px;
          top: 7px;
        }
        .cart-bg2 {
          width: 16px;
          height: 16px;
          background:url("../../../assets/imgs/sprite.png") no-repeat;
          background-position: 0 0;
          position: absolute;
          top: 13px;
          right: 8px;
        }
        .cart-bg2:hover {
          transform:rotate(180deg);
          -webkit-transform:rotate(180deg);
          +div {
            max-height:276px;
          }
        }

        .cart-hide {
          width:238px;
          max-height:0;
          background:$color;
          box-shadow:0 2px 8px 0 rgba(0,0,0,0.1);
          padding-right:2px;
          z-index:100;
          overflow:hidden;
          transition:max-height .6s linear;
          -webkit-transition:max-height .6s linear;
          -moz-transition:max-height .6s linear;
          h3 {
            height:14px;
            line-height:14px;
            padding-top:7px;
            padding-bottom:9px;
            padding-left:10px;
            font-size:14px;
            color:rgba(0,0,0,0.8);
          }
          ul {
            height:210px;
            overflow:auto;
            li {
              height:40px;
              padding:15px 0 15px 10px;
              box-shadow:0 -1px 0 0 rgba(242,242,242,1);
              .ch-img {
                width:38px;
                height:38px;
                border:1px solid rgba(230,230,230,1);
                background-color:rgba(216,216,216,1);
                float:left;
                margin-right:10px;
                img {
                  width:100%;
                  height:100%;
                }
              }
              .ch-content {
                width:151px;
                height:40px;
                float:left;
                padding-right:9px;
                .ch-text {
                  height:16px;
                  line-height:16px;
                  overflow:hidden;
                  //white-space:nowrap;
                  //text-overflow:ellipsis;
                  margin-bottom:4px;
                  width:151px;
                  position:relative;
                  a {
                    font-size:12px;
                    color:rgba(153,153,153,1);
                  }
                }
                .ch-text:before {
                  content:'...';
                  position:absolute;
                  bottom:0;
                  right:-1px;
                  font-size:12px;
                  color:rgba(153,153,153,1);
                  background-color:$color;
                }

                div {
                  a {
                    width:16px;
                    height:16px;
                    border:1px solid rgba(196,196,196,1);
                    color:rgba(102,102,102,1);
                    font-size:16px;
                    float:left;
                    text-align:center;
                    line-height:16px;
                    font-weight:bold;
                  }
                  input {
                    width:38px;
                    height:16px;
                    line-height:16px;
                    font-size:14px;
                    border:none;
                    border-top:1px solid rgba(196,196,196,1);
                    border-bottom:1px solid rgba(196,196,196,1);
                    text-align:center;
                    float:left;
                    color:rgba(51,51,51,1);
                  }
                  span {
                    font-size:16px;
                    color:rgba(51,51,51,1);
                    height:20px;
                    line-height:20px;
                    float:right;
                    max-width:80px;
                    overflow:hidden;
                  }
                }
              }

            }
          }
          ul::-webkit-scrollbar {
            width:6px;
            background-color:$color;
          }
          ul::-webkit-scrollbar-track {
            background-color:$color;
            -webkit-box-shadow:1px 0 0 0 rgba(242,242,242,0.5) inset;
            border-radius:3px;
          }
          ul::-webkit-scrollbar-thumb {
            background:rgba(204,204,204,1);
            border-radius:3px;
          }

          .hide-footer {
            height:36px;
            padding-left:10px;
            padding-right:10px;
            background-color:rgba(242,242,242,1);
            font-size:14px;
            line-height:36px;
            color:rgba(102,102,102,0.8);
            span {
              color:#000000;
              font-size:14px;
              margin-left:8px;
              opacity:.8;
              filter:Alpha(opacity=80);
              strong {
                font-size:20px;
              }
            }
            a {
              margin-top:7px;
              float:right;
              width:60px;
              height:22px;
              border:none;
              background-color:rgba(230,45,45,1);
              color:$color;
              line-height:22px;
              text-align:center;
            }
          }
        }
        .cart-hide:hover {
          max-height:276px;
        }
      }

      .img {
        width: 70px;
        height: 70px;
        margin-top: 31px;
        margin-left: 56px;
        img {
          width: 100%;
        }
      }
    }

    .bar {
      //width: $width;
      //padding-left: 230px;
      //padding-right: 256px;
      height: 30px;
      line-height: 30px;
      font-size: 16px;
      overflow:hidden;
      h2 {
        height: 30px;
        background: rgba(230, 45, 45, 1);
        font-size: 16px;
        line-height: 30px;
        color: $color;
        text-align: center;
        display:inline-block;
        width:230px;
        float:left;
      }

      ul {
        //letter-spacing: -8px;
        display:inline-block;
        li {
          //letter-spacing: normal;
          float:left;
          padding-left: 30px;
          a {
            color: rgba(51, 51, 51, 1);
          }
          a:hover {
            color: #ff0000;
            background-color: #f2f2f2;
          }
        }
      }
    }
  }

</style>
