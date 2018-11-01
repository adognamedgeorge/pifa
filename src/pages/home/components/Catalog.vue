<template>
  <div class="mulu">
    <div class="list">
      <ul>
        <li v-for="item of goodsList" :key="item.id">
          <div class="list_a">
            <a href="">{{item.name}}</a>
            <a href="" v-for="item2 of item['items']" :key="item2.id">{{item2.secName}}</a>
          </div>

          <div class="mulu_hide">
            <div class="hide_first">
              <div class="hide_second" v-for="item2 of item['items']" :key="item2.id">
                <h5>
                  <a href="">{{item2.secName}}</a>
                </h5>
                <a href="" v-for="(item3, index) of item2['goods']" :key="index">{{item3}}</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeCatalog',
  props: {
    goodsList: Array
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/varible.scss';
  .mulu {
    width: 230px;
    height: 330px;
    position: relative;
    .list {
      background-color: $bgColor2;
      height: 330px;
      ul:hover {
        height: auto;
        background-color: $bgColor2;
      }
      ul {
        height: 324px;
        overflow: hidden;
        padding-top: 6px;
        background-color: $bgColor2;
        li {
          .list_a {
            height: 36px;
            line-height: 36px;
            padding: 0 18px 0 8px;
            overflow: hidden;
            a {
              font-size: 14px;
              padding-left: 12px;
              color: rgba(153, 153, 153, 1);
              float: left;
            }
            a:first-child {
              display: inline-block;
              /*width: 56px;*/
              color: rgba(51, 51, 51, 1);
            }
            a:hover {
              color: rgba(254, 229, 61, 1) !important;
            }
          }
          .list_a:hover {
            background-color: rgba(230, 45, 45, 1);
            a {
              color: $color;
            }
          }
          .mulu_hide {
            background-color: white;
            width: 668px;
            min-height: 312px;
            position: absolute;
            left: 230px;
            top: 6px;
            padding: 30px 40px 40px 6px;
            display: none;
            border: 1px solid rgba(230,45,45,1);
            a {
              display: inline-block;
              font-size: 14px;
              color: rgba(153,153,153,1);
              margin-left: 20px;
              margin-bottom: 10px;
            }
            div {
              max-width: 668px;
              overflow: hidden;
              .hide_second {
                padding-bottom: 5px;
                h5 {
                  padding: 0;
                  margin: 0;
                  a {color: rgba(51,51,51,.9);}
                }
                a:hover {
                  color: red;
                }
              }
            }
          }
        }
        li:hover {
          background-color: #e62d2d;
          >.list_a a {
            color:white;
          }
          div + div {
            display: block;
            z-index: 999;
          }
        }
      }
    }
  }
</style>
