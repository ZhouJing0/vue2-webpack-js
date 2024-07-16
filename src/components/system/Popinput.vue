<template>
  <div>
    <el-tooltip
      class="item"
      :effect="effect"
      :content="popData"
      :disabled="
        visible ||
        !valueData ||
        valueData == '' ||
        valueData == null ||
        valueData == undefined
      "
      placement="top-start"
    >
      <div>
        <el-popover
          :placement="placement"
          :width="width"
          @show="handleShow"
          :disabled="disabled"
          @hide="handleHide"
          v-model="visible"
          :trigger="trigger"
        >
          <el-input
            @input="checkChineseInput"
            v-model="valueData"
            ref="textarea"
            type="textarea"
            @blur="handleBlur"
            autofocus
            :maxlength="maxlength"
            :clearable="clearable"
            :autosize="autosize"
            :rows="rows"
            placeholder=""
          ></el-input>
          <el-input
            readonly
            slot="reference"
            :value="popData"
            :size="size"
            class="inputClass"
          ></el-input>
        </el-popover>
      </div>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: "Popinput",
  props: {
    /*
      width 弹框的宽度
      trigger 弹框触发条件
      value 默认值
      placement 弹框的位置
      autosize textarea 大小
      rows textarea行数
      disabled 为true弹框不展示
      clearable 为true textarea是否可以清空
    */
    size: {
      type: String,
      default: "mini",
    },
    width: {
      type: String | Number,
      default: 200,
    },
    trigger: {
      type: String,
      default: "click",
    },
    effect: {
      type: String,
      default: "dark",
    },
    value: null,
    placement: {
      type: String,
      default: "bottom",
    },
    autosize: {
      type: [Boolean, Object],
      default: false,
    },
    maxlength: {},
    rows: {
      type: Number,
      default: 4,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    onlyChinese: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      visible: false,
      valueData: this.value,
      popData: "",
    };
  },
  // created() {
  //   this.handleHide()
  // },
  watch: {
    value: {
      handler(newVal) {
        this.valueData = this.popData = newVal;
        // this.popData = newVal
      },
      immediate: true,
    },
  },
  methods: {
    handleHide() {
      this.$emit("input", this.valueData);
      this.popData = this.valueData;
      this.visible = false;
    },
    handleBlur() {
      this.handleHide();
    },
    handleShow() {
      this.visible = true;
      this.$nextTick(() => {
        this.$refs.textarea.focus();
      });
    },
    checkChineseInput() {
      if (this.onlyChinese) {
        const regex = /[\u4e00-\u9fa5]*/g;
        this.valueData = this.valueData.match(regex).join("");
      }
    },
  },
};
</script>

<style scoped>
::v-deep .el-input__inner {
  /* width: 100%;
  white-space: nowrap; */
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
