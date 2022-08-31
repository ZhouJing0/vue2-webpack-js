<template>
  <div>
    <about-view>
      <you-view></you-view>
    </about-view>
  </div>
</template>

<script>
import AboutView from "@/views/AboutView";
import YouView from "@/views/YouView";
export default {
  name: "MyView",
  
  data() {
    return {
      
    };
  },
  components: {
    AboutView,
    YouView,
  },
};
</script>

<style lang="less" scoped>
</style>