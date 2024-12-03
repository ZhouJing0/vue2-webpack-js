<template>
  <div
    @mousemove="handleMouseMove"
    @mouseup="handleMouseUp"
    @mouseleave="handleMouseUp"
  >
    <div style="color: red">{{ msg }}{{ data }}</div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="label" prop="model">
        <el-input v-model="form.model"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="handleXXX">xxx</el-button>
    <!-- <about-view> -->
    <you-view
      :msg="msg"
      :info="data"
      size="small"
      @aaa="handleAAA"
      @click="handleClick"
    >
      <template v-slot="{ num }">123{{ num }}</template>
    </you-view>
    <AndTable />
    <!-- </about-view> -->
    <div
      class="drag-container"
      @mousedown="handleMouseDown"
      :style="{
        left: `${left}px`,
        top: `${top}px`,
        transition: dragTransition,
      }"
    >
      <!-- 你的图标或内容 -->
      <i class="el-icon-plus" style="font-size: 50px"></i>
    </div>
  </div>
</template>

<script>
import AboutView from "@/views/AboutView";
import YouView from "@/views/YouView";
import AndTable from "@/views/AndTable";
export default {
  name: "MyView",
  data() {
    return {
      msg: "Hello",
      data: {},
      dragging: false,
      startX: 0,
      startY: 0,
      left: 0,
      top: 0,
      dragTransition: "none", // 初始时没有动画
      edgeThreshold: 20, // 吸附的边缘阈值（单位：像素）
      options: [],
      model: 1,
      form: {
        model: "",
      },
      fileList: [
        {
          name: "food.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
    };
  },
  components: {
    AboutView,
    YouView,
    AndTable,
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
    handleMouseDown(event) {
      this.dragging = true;
      this.startX = event.clientX - this.left;
      this.startY = event.clientY - this.top;
      this.dragTransition = "none"; // 拖动开始时禁用动画
    },
    handleMouseMove(event) {
      if (!this.dragging) return;
      this.left = event.clientX - this.startX;
      // const newLeft = event.clientX - this.startX;
      this.top = event.clientY - this.startY;
    },
    handleMouseUp(event) {
      if (!this.dragging) return;
      console.log(event);
      // 判断左侧距离
      if (this.left < window.innerWidth / 2) {
        this.left = 0; // 吸附到左侧
      } else {
        this.left = window.innerWidth - this.$el.offsetWidth; // 吸附到右侧
      }
      this.dragTransition = "left 0.3s ease";
      this.dragging = false;
    },
    handleXXX() {
      this.$refs.form.resetFields();
    },
    handleClick() {
      console.log(1111);
    },
    handleAAA() {
      console.log(222);
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
  },
};
</script>

<style lang="less" scoped>
.drag-container {
  position: absolute; /* 或 fixed，根据你的需求 */
  cursor: move; /* 显示拖动光标 */
}
</style>
