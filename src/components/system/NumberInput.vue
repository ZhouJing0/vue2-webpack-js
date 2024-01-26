/**
  @sendValue 实时获取最新数据
 */
<template>
  <el-input
    :style="styleProp"
    class="ef-numInput"
    :class="'ef-numInput--' + size"
    v-model="inputValue"
    :size="size"
    :placeholder="placeholder"
    @input="input"
    :disabled="!!disabled"
    @blur="blur"
    @focus="focus"
  >
    <template slot="prepend">
      <slot name="prepend"></slot>
    </template>
    <template slot="append">
      <slot name="append"></slot>
    </template>
  </el-input>
</template>

<script>
export default {
  name: "NumberInput",
  props: {
    value: {
      default: "0.00",
    },
    // 输入框大小
    size: {
      type: String,
      default: "small",
    },
    // 开启负数
    negative: {
      type: Boolean,
      default: false,
    },
    //限制最大
    max: {
      type: Number,
      default: Infinity,
    },
    //限制最小
    min: {
      type: Number,
      default: -Infinity,
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
    // 文字提示
    placeholder: {
      default: "",
    },
    // 样式
    styleProp: {
      default: "",
    },
    // 禁用
    disabled: {
      default: false,
    },
    // 金额
    money: {
      default: false,
    },
    // 是否默认展示0｜最小值
    default: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      latestValue: "",
      inputValue: "",
      unwatch: null,
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(newVal) {
        if (this.default) {
          if (parseFloat(newVal) > this.max) newVal = this.max;
          if (parseFloat(newVal) < this.min) newVal = this.min;
          this.inputValue = this.formatRoundNum(parseFloat(realValue,this.decimalCount))
          this.updateValue(this.inputValue);
        }
      },
    },
  },
  methods: {
    updateValue(newVal) {
      this.$emit("input", parseFloat(Number(newVal) || 0));
    },
    input(v) {
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
        this.inputValue = v;
      } else {
        this.inputValue = this.latestValue;
      }
      this.$emit("sendValue", parseFloat(Number(this.inputValue) || 0));
    },
    blur() {
      let realValue = "" + this.inputValue;
      if (parseFloat(realValue) > this.max) realValue = this.max;
      if (parseFloat(realValue) < this.min) realValue = this.min;
      // 判断在默认不为0的情况下 不会触发数据变更
      if (!this.default) {
        if(this.money){
          this.inputValue = realValue ? Number(realValue).toLocaleString() : ''
        }else{
          this.inputValue = realValue
        }
        this.$emit('input',realValue ? parseFloat(Number(realValue) || 0) : null);
        return;
      }
      if (realValue === "." || !realValue || realValue == "null") {
        realValue = "0";
      }
      if(this.money){
        this.inputValue = Number(this.formatRoundNum(parseFloat(Number(realValue) || 0),this.decimalCount)).toLocaleString()
        }else{
        this.inputValue = this.formatRoundNum(parseFloat(Number(realValue) || 0),this.decimalCount)
      }
      this.updateValue(this.inputValue);
    },
    focus() {
      let realValue = "" + this.inputValue;
      if(this.default){
        if (
          realValue === "." ||
          Number(realValue) == "0" ||
          realValue == "null"
        ) {
          realValue = "";
        }
      }
      // this.inputValue = realValue && Number(realValue);
      this.inputValue = realValue
    },
    formatRoundNum(num, pre){
      return (Math.round(num * Math.pow(10, pre)) / Math.pow(10, pre)).toFixed(pre)
    }
  },
};
</script>

<style></style>
