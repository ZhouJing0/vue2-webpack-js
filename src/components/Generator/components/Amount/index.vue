<template>
  <div class="easyframeAmount">
    <el-input-number v-model="innerValue" v-bind="$attrs" v-on="$listeners"></el-input-number>
    <div class="explain-text" v-if="showChinese">大写：{{ chinese }}</div>
  </div>
</template>
<script>
import { getAmountChinese } from '@/components/Generator/utils'
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: ['value', 'showChinese'],
  name: 'easyframeAmount',
  data() {
    return {
      innerValue: this.value
    }
  },
  computed: {
    chinese() {
      return this.showChinese ? getAmountChinese(this.innerValue) : ''
    }
  },
  watch: {
    innerValue(val) {
      val && this.$emit('change', +val.toFixed(2))
    },
    value(val) {
      this.innerValue = val
    }
  }
}
</script>
<style lang="less" scoped>
.explain-text {
  font-size: 12px;
  color: #aaa;
  line-height: 20px;
}
.easyframeAmount {
  .el-input-number {
    width: 100%;
  }
}
</style>
