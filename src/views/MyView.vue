<template>
  <div>
    <div style="color: red">{{ msg }}{{ data }}</div>
    <el-select v-model="model" placeholder="">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <!-- <about-view> -->
    <you-view :msg="msg" :info="data" size="small" @click="handleClick">
      <template v-slot="{ num }">123{{ num }}</template>
    </you-view>
    <!-- </about-view> -->
  </div>
</template>

<script>
import AboutView from "@/views/AboutView";
import YouView from "@/views/YouView";
export default {
  name: "MyView",
  data() {
    return {
      msg: "Hello",
      data: {},
      options: [],
      model: 1,
    };
  },
  components: {
    AboutView,
    YouView,
  },
  mounted() {
    setTimeout(() => {
      this.data = { name: "张三", age: "20" };
      this.options = [{ label: "sdas", value: 1 }];
    }, 1000);
  },
  activated() {
    console.log("99999999");
  },
  methods: {
    handleClick() {
      console.log(1111);
    },
  },
};
</script>

<style lang="less" scoped></style>
