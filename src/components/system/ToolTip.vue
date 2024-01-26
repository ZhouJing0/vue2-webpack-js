<template>
  <el-tooltip
    :class="className"
    :effect="effect"
    :content="content"
    :placement="placement"
  >
    <div class="text-content">{{ innerText }}</div>
  </el-tooltip>
</template>

<script>
export default {
  name: "ElementVueTestToolTip",

  props: {
    className: String,
    effect: {
      type: String,
      default: "dark",
    },
    content: {
      type: String,
      default: "测试",
    },
    placement: {
      type: String,
      default: "top-start",
    },
    innerText: {
      type: String,
      default: "占位符",
    },
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.text-content {
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
