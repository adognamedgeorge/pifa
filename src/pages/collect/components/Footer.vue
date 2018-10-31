<template>
    <div class="footer">
        <span>共选择{{len}}件</span>
        <label>批量进货</label>
    </div>
</template>

<script>
export default {
  name: 'CollectFooter',
  props: {
    len: Number
  }
}
</script>

<style lang="scss" scoped>
    .footer {
      height: 50px;
      line-height: 50px;
      border: 1px solid rgba(242,242,242,1);
      width: 100%;
      span {
        color: rgba(51,51,51,1);
        font-size: 16px;
        height: 100%;
        margin-left: 10px;
      }
      label {
        display: inline-block;
        background: rgba(230,45,45,1);
        width: 120px;
        float: right;
        color: rgba(255,255,255,1);
        text-align: center;
        height: 100%;
      }
    }
</style>
