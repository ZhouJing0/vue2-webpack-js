<template>
  <el-input
    :style="styleProp"
    v-bind:value="value"
    @input="change"
    @blur="blur"
    @focus="focus"
    :placeholder="placeholder"
    :disabled="!!disabled"
  ></el-input>
</template>

<script>
export default {
  name: "NumberInput",
  props: {
    value: {
      default: "",
    },
    // 小数位数
    decimalCount: {
      default: 2,
      required: false,
    },
    // 整数位数
    integer: {
      default: 5,
      required: false,
    },
    placeholder: {
      default: "请输入",
    },
    // 开启负数
    negative: {
      default: false,
    },
    // 样式
    styleProp: {
      default: "",
    },
    disabled: {
      required: false,
    },
  },
  data() {
    return {
      latestValue: "",
    };
  },
  methods: {
    updateValue(newVal) {
      this.$emit("input", newVal);
      this.latestValue = newVal;
    },
    change(v) {
      let realValue = "";
      const reg = new RegExp(
        `^${this.negative ? "-?" : ""}(\\d{0,${this.integer}})((\\.)(\\d{0,${
          this.decimalCount
        }})?)?$`
      );
      if (!this.decimalCount) {
        v = v.replace(/[^-?\d]/g, "");
        v = v.replace(/^0+(\d)/, "$1");
      } else {
        v = v.replace(/[^-?\d.]/g, ""); // 只能输入数字和.
        v = v.replace(/^\./g, ""); //第一个字符不能是.
        v = v.replace(/\.{2,}/g, "."); // 不能连续输入.
        v = v.replace(/(\.\d+)\./g, "$1"); // .后面不能再输入.
        v = v.replace(/^0+(\d)/, "$1"); // 第一位0开头，0后面为数字，则过滤掉，取后面的数字
      }

      if (reg.test(v)) {
        this.latestValue = v;
        realValue = v;
      } else {
        realValue = this.latestValue;
      }
      this.updateValue(realValue);
    },
    blur() {
      let realValue = "" + this.value;
      // if (!realValue) return;
      if (realValue === "." || !realValue) realValue = "0";
      this.updateValue(realValue);
    },
    focus() {
      let realValue = "" + this.value;
      if (realValue === "." || realValue == "0") realValue = "";
      this.updateValue(realValue);
    },
  },
};
</script>

<style></style>
