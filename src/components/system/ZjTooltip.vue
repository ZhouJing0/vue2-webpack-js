<template>
  <div class="tooltip-wrap">
    <el-tooltip
      ref="tlp"
      :content="content"
      effect="dark"
      :disabled="!tooltipFlag"
      :placement="placement"
    >
      <div class="over-flow" @mouseenter="visibilityChange($event)">
        <slot> </slot>
      </div>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: "tooltipWrap",
  props: {
    content: { default: "" }, // 字符内容
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
    showTips(obj, row, prop) {
      /*obj为鼠标移入时的事件对象*/
      /*currentWidth 为文本在页面中所占的宽度，创建标签，加入到页面，获取currentWidth ,最后在移除*/
      let TemporaryTag = document.createElement("span");
      TemporaryTag.innerText = row[prop];
      TemporaryTag.className = "getTextWidth";
      document.querySelector("body").appendChild(TemporaryTag);
      let currentWidth = document.querySelector(".getTextWidth").offsetWidth;
      document.querySelector(".getTextWidth").remove();

      /*cellWidth为表格容器的宽度*/
      const cellWidth = obj.target.offsetWidth;

      /*当文本宽度小于||等于容器宽度两倍时，代表文本显示未超过两行*/
      currentWidth <= 3 * cellWidth
        ? (row[`show${prop}`] = false)
        : (row[`show${prop}`] = true);
    },
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
/* .tooltip-wrap {
  height: 18px;
} */
.over-flow {
  -webkit-line-clamp: 3;
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
