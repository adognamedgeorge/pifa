<template>
  <div class="ads">
    <div class="ad1">
      <div class="today_date">
        <span class="today_date_month">{{nowMonth}}</span>
        <span class="today_date_day">{{nowDate}}</span>
      </div>

      <div class="ad1_text">
        <h3>Hi, <a href="" class="active"></a></h3>
        <p>签到可领取200积分</p>
      </div>
      <button><a>签到</a></button>
    </div>
    <ul class="ads_ul">
      <li><a href=""><h3>{{this.account['balance']}}</h3><p>余额</p></a></li>
      <li><a href=""><h3>{{this.account['couponNum']}}</h3><p>优惠券</p></a></li>
      <li><a href=""><h3>{{this.account['integral']}}</h3><p>积分</p></a></li>
    </ul>
    <div class="ad2">
      <ul>
        <li><a class="ad_bg1" href="">会员中心</a></li>
        <li><a class="ad_bg2" href="">领券中心</a></li>
        <li><a class="ad_bg3" href="">积分兑换</a></li>
      </ul>
    </div>
    <div class="ad3">
      <div class="ad_t">
        <h3>公告</h3>
        <a class="gengduo" href="">更多<i></i></a>
      </div>
      <div class="ad_b">
        <ul>
          <li v-for="(item, index) of noticeList" :key="index"><a href="">{{item}}</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSign',
  props: {
    account: Object,
    noticeList: Array
  },
  methods: {
    timeFormate (timeStamp) {
      let month = new Date(timeStamp).getMonth() + 1 < 10 ? '0' + (new Date(timeStamp).getMonth() + 1) : new Date(timeStamp).getMonth() + 1
      let date = new Date(timeStamp).getDate() < 10 ? new Date(timeStamp).getDate() : new Date(timeStamp).getDate()
      this.nowMonth = month + '月'
      this.nowDate = date
    },
    nowTimes () {
      this.timeFormate(new Date())
    }
  },
  created () {
    this.nowTimes()
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/varible.scss';
  .ads {
    width: 240px;
    height: 320px;
    margin-top: 10px;
    background-color: $color;
    .ad1 {
      height: 63px;
      display: flex;
      display: -ms-flexbox;
      .ad1_img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        margin: 14px 10px 5px 10px;
        background-color: rgba(224, 224, 224, 1);
        overflow: hidden;
        img { height: 100%; width: 100%; }
      }
      .ad1_text {
        height: 37px;
        flex: 1;
        -ms-flex: 1;
        color: rgba(153, 153, 153, 1);
        padding-top: 14px;
        padding-bottom: 4px;
        h3 {
          font-size: 14px;
        }
        p {
          font-size: 12px;
        }
      }
      button {
        width: 50px;
        height: 22px;
        font-size: 14px;
        color: $color;
        background-color: rgba(230, 45, 45, 1);
        margin-right: 10px;
        margin-top: 21px;
        border: none;
      }
    }
    .ads_ul {
      height: 42px;
      text-align: center;
      display: flex;
      display:-ms-flexbox;
      justify-content: space-around;
      padding: 0 10px 13px 10px;
      li {
        display: inline-block;
        float: left;
        width: 30%;
        h3 {
          font-size: 16px;
          color: rgba(51, 51, 51, 1);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-bottom: 5px;
          height: 21px;
        }
        p {
          font-size: 12px;
          color: rgba(153, 153, 153, 1);
        }
        a:hover {
          h3, p {
            color: #ff0000;
          }
        }
      }
    }
    .ad2 {
      height: 75px;
      box-shadow: 0 0 0 1px rgba(242, 242, 242, 1);
      padding-top: 17px;
      width: 240px;
      ul {
        height: 60px;
        text-align: center;
        margin: 0 auto;
        width: 228px;
        li {
          display: inline-block;
          padding: 0 14px 0 14px;
          float: left;
          a {
            background: $Sprite;
            display: block;
            width: 48px;
            padding-top: 44px;
            font-size: 12px;
            color: rgba(102,102,102,1);
          }
          .ad_bg1 {
            background-position: -151px 0;
          }
          .ad_bg2 {
            background-position: -247px 0;
          }
          .ad_bg3 {
            background-position: -199px 0;
          }
        }
      }
    }

    .ad3 {
      height: 98px;
      box-shadow: 0 0 0 1px rgba(242, 242, 242, 1);
      padding-top: 12px;
      padding-left: 10px;
      width: 230px;
      .ad_t {
        height: 20px;
        line-height: 20px;
        overflow: hidden;
        width: 223px;
        padding-right: 7px;
        h3 {
          font-size: 16px;
          color: rgba(51,51,51,1);
          display: inline-block;
        }
        a {
          display: inline-block;
        }
        .gengduo {
          font-size: 14px;
          color: rgba(153,153,153,1);
          float: right;
          i {
            display: inline-block;
            width: 16px;
            height: 16px;
            background: $Sprite;
            background-position: -16px 0;
            margin-bottom: -3px;
          }
        }
      }

      .ad_b {
        height: 65px;
        padding-top: 8px;
        overflow:auto;
        a {
          display: inline-block;
          width: 90%;
          font-size: 12px;
          color: rgba(102,102,102,1);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        a:hover {
          text-decoration: underline;
          color: #ff0000;
        }
      }

      .ad_b::-webkit-scrollbar {
        width: 6px;
        background-color: $color;
      }
      .ad_b::-webkit-scrollbar-track {
        background-color: $color;
        -webkit-box-shadow: 1px 0 0 0 rgba(242,242,242,0.5) inset;
        border-radius: 3px;
      }
      .ad_b::-webkit-scrollbar-thumb {
        background: rgba(204,204,204,1);
        border-radius: 3px;
      }
    }
  }
  .today_date {
    float: left;
    background: #e62d2d;
    width: 30px;
    height: 36px;
    padding: 2px;
    margin: 14px 10px 0 10px;
  }
  .today_date span {
    display: block;
  }
  .today_date_month {
    height: 16px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
    font-size:12px;
  }
  .today_date_day {
    height: 20px;
    line-height: 20px;
    text-align: center;
    background: #ffffff;
    color: #e62d2d;
    font-size: 18px;
    border-bottom-right-radius: 6px;
  }
</style>
