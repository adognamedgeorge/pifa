<template>
  <div class="notice">
    {{url}}
  </div>
</template>

<script>
export default {
  name: 'AnnounceNotice',
  props: {
    url: String
  }
}
</script>

<style lang="scss" scoped>
  .notice {
    flex: 1;
  }
</style>
