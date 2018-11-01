<template>
  <div class="search_pages wrapper">
    <ul>
      <li v-if="cur>1"><a @click="cur--, pageClick()">上一页</a></li>
      <li v-if="cur === 1"><a class="ban_click">上一页</a></li>
      <li v-for="index in list" :key="index.id" :class="{'active': cur === index}"><a @click="btnClick(index)">{{index}}</a></li>
      <li class="pages_dots">…</li>
      <li :class="{'active': cur === all+1}"><a >{{all+1}}</a></li>
      <li :class="{'active': cur === all+2}"><a >{{all+2}}</a></li>
      <li v-if="cur !== all+2"><a @click="cur++, pageClick()">下一页</a></li>
      <li v-if="cur === all+2"><a class="ban_click">下一页</a></li>
    </ul>
    <span>共{{all}}页，到<input type="text" placeholder="1"/>页<button>确定</button></span>
  </div>
</template>

<script>
export default {
  name: 'SearchPages',
  data () {
    return {
      all: 12,
      cur: 1
    }
  },
  watch: {
    cur: function (oldValue, newValue) {
      console.log(arguments)
    }
  },
  methods: {
    btnClick: function (data) {
      if (data !== this.cur) {
        this.cur = data
      }
    },
    pageClick: function () {
      console.log('现在在' + this.cur + '页')
    }
  },
  computed: {
    list: function () {
      let left = 1
      let right = this.all
      let ar = []
      if (this.all >= 5) {
        if (this.cur > 3 && this.cur < this.all - 2) {
          left = this.cur - 2
          right = this.cur + 2
        } else {
          if (this.cur <= 3) {
            left = 1
            right = 5
          } else {
            right = this.all
            left = this.all - 4
          }
        }
      }
      while (left <= right) {
        ar.push(left)
        left++
      }
      return ar
    }
  }
}
</script>

<style lang="scss" scoped>
  .search_pages {
    height: 40px;
    margin-bottom: 22px;
    .active a{
      color: #fff;
      cursor: default;
      background-color: #e62d2d;
      border-color: #e62d2d;
    }
    ul {
      margin: 0 auto;
      width: 690px;
      li {
        float: left;
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        text-align: center;
        color: rgba(51,51,51,1);
        border: 1px solid rgba(230,230,230,1);
        cursor: pointer;
        a {
          display: block;
          width: 100%;
          height: 100%;
          color: rgba(51,51,51,1);
        }
        a:hover {
          background-color:#eee;
        }
        a.ban_click {
          cursor: not-allowed;
        }
      }
      li:first-child,li:last-child { width: 80px; }
      li:nth-child(n+2) { border-left: none; }
      .pages_dots { border: none; border-right: 1px solid rgba(230,230,230,1); }
    }
    span {
      margin-left: 17px;
      height: 40px;
      line-height: 40px;
      color: rgba(153,153,153,1);
      font-size: 14px;
      input {
        width: 40px;
        height: 40px;
        color: rgba(51,51,51,1);
        text-align: center;
        border: 1px solid rgba(230,230,230,1);
        margin: 0 5px;
      }
      button {
        border: 1px solid rgba(230,230,230,1);
        background-color: rgba(255,255,255,1);
        width: 50px;
        height: 40px;
        margin-left: 5px;
        cursor: pointer;
        outline: none;
      }
      button:active {
        opacity:.5;
        filter: Alpha( opacity = 50 );
      }
    }
  }
</style>
