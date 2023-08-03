<template>
  <div>
    You

    {{ info }}
    {{ msg }}
    <el-button type="primary" @click="handleChange">CHANGR</el-button>
  </div>
</template>

<script>
// import AboutView from '@/views/AboutView'
export default {
  name: "YouView",
  props: {
    info: {
      type: Object,
    },
    msg: {
      type: String,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleChange() {
      // this.msg = "changeData";
      this.info = {};
    },
  },
  // components:{
  //   AboutView
  // }
};
</script>

<style lang="less" scoped></style>
