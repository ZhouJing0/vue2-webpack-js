<template>
  <h1 class="groupTitle" :style="{ 'text-align': contentPosition }">{{ content }}</h1>
</template>
<script>
export default {
  name: 'groupTitle',
  props: {
    content: {
      type: String,
      default: ''
    },
    'content-position': {
      type: String,
      default: 'left'
    }
  }
}
</script>
<style lang="less" scoped>
.groupTitle {
  border-bottom: 1px solid #ebeef5;
  color: #303133;
  font-size: 16px;
  line-height: 50px;
  margin: 0;
}
</style>
