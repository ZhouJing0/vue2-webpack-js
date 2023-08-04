<template>
  <div class="tooltip-wrap">
    <el-tooltip
      ref="tlp"
      :content="text"
      effect="dark"
      :disabled="!tooltipFlag"
      :placement="placement"
    >
      <div class="over-flow" @mouseenter="visibilityChange($event)">
        {{ text }}
      </div>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: "tooltipWrap",
  props: {
    text: { default: "" }, // 字符内容
    placement: { type: String, default: "top-start" },
    className: { type: String, default: "text" }, // class
  },
  data() {
    return {
      disabledTip: false,
      tooltipFlag: false,
    };
  },
  methods: {
    // tooltip的可控
    visibilityChange(event) {
      const ev = event.target;
      const ev_weight = ev.scrollWidth; // 文本的实际宽度
      const content_weight = this.$refs.tlp.$el.parentNode.clientWidth; // 文本容器宽度(父节点)
      if (ev_weight > content_weight) {
        // 文本宽度 > 实际内容宽度  => 内容溢出
        this.tooltipFlag = true;
      } else {
        // 否则为不溢出
        this.tooltipFlag = false;
      }
    },
  },
};
</script>

<style scoped>
.tooltip-wrap {
  height: 18px;
}
.over-flow {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
}
p {
  width: 100%;
  margin: 0;
}
</style>
