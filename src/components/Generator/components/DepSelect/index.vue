<template>
  <div class="comSelect-container">
    <easyframe-TreeSelect
      :options="treeData"
      v-model="innerValue"
      :placeholder="placeholder"
      clearable
      :disabled="disabled"
      v-on="$listeners"
      lastLevel
      lastLevelKey="type"
      lastLevelValue="department"
      :multiple="multiple"
    >
    </easyframe-TreeSelect>
  </div>
</template>

<script>
export default {
  name: 'depSelect',
  props: ['value', 'disabled', 'placeholder', 'multiple'],
  model: {
    prop: 'value',
    event: 'input'
  },
  data() {
    return {
      treeData: [],
      innerValue: this.value
    }
  },
  methods: {
    async getData() {
      this.treeData = await this.$store.dispatch('generator/getDepTree')
    }
  },
  created() {
    this.getData()
  },
  watch: {
    innerValue(val) {
      val && this.$emit('change', val)
    },
    value(val) {
      this.innerValue = val
    }
  }
}
</script>
<style lang="less">
.comSelect-container {
  .el-select {
    width: 100%;
  }
}
</style>
