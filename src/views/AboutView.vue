<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="wrap">
      <el-input @input.native="oninput" v-model="info" placeholder="" ></el-input>
    </div>
    <component :is="'router-link'" v-bind="{ to: '/you' }">
      <slot></slot>
    </component>
  </div>
</template>
<script>
// import MyView from '@/views/MyView'
import { myMinxin } from "@/utils/mixins";
export default {
  name: "AboutView",
  mixins: [myMinxin],
  data() {
    return {
      info:'',
    };
  },
  created() {
    console.log("created vue");
  },
  methods: {
    oninput(e) {
      // 通过正则过滤小数点后两位
      e.target.value = e.target.value.match(/^\d*(\.?\d{0,2})/g)[0] || null;
      // e.target.value = Math.round(e.target.value * 100) / 100
    },
  },
  // components:{
  //   MyView
  // }
};
</script>
<style lang="less">
</style>