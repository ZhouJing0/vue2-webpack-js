<template>
  <div>
    <div style="color: red">{{ msg }}{{ data }}</div>
    <!-- <about-view> -->
    <you-view :msg="msg" :info="data"></you-view>
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
      data: {
        name: "张三",
        age: "20",
      },
    };
  },
  components: {
    AboutView,
    YouView,
  },
};
</script>

<style lang="less" scoped></style>
