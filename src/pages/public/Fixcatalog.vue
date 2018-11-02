<template>
  <div class="fixcatalog">
    <ul>
      <li v-for="item of goodsList" :key="item.id">
        <div class="li_box">
          <h3>
            <a href="">{{item.name}}</a>
          </h3>
          <div class="li_content">
            <a href="" v-for="item2 of item.items" :key="item2.id">{{item2.secName}}</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'FixCatalog',
  data () {
    return {
      goodsList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/home.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.goodsList = data.goodsList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="scss" scoped>
  .fixcatalog {
    display: none;
    width: 228px;
    border: 1px solid #f2f2f2;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
    overflow: hidden;
    padding-bottom: 20px;
    background-color: #ffffff;
    z-index: 999;
    position: absolute;
    ul {
      width: 228px;
      overflow: hidden;
      .li_box {
        padding: 6px 0 4px 0;
        margin: 0 12px 0 15px;
        border-bottom: 1px dotted #979797;
        h3 {
          font-size: 14px;
          line-height: 24px;
          a {
            font-weight: bold;
            color: #333333;
          }
        }
        .li_content {
          height: 24px;
          line-height: 24px;
          overflow: hidden;
          a {
            display: inline-block;
            font-size: 12px;
            color: #727272;
            margin-right: 8px;
          }
        }
        a:hover {
          color: red;
        }
      }
    }
  }
</style>
