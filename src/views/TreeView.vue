<template>
  <div>
    TreeView
    <el-menu >
      <tree-item v-for="item in list" :key="item.icon" :child="item" />
    </el-menu>
  </div>
</template>

<script>
import TreeItem from "@/views/TreeItem";
export default {
  name: "TreeView",
  components: {
    TreeItem,
  },
  data() {
    return {
      list: [
        {
          icon: "el-icon-warning",
          title: "警告",
          index:'1',
          children: [
            {
              icon: "el-icon-platform-eleme",
              title: "饿了么",
              to: "/you",
              name: "you",
              index:'1.1',
            },
            {
              icon: "el-icon-delete-solid",
              title: "删除",
              to: "/you",
              name: "you",
              index:'1.2',
            },
            {
              icon: "el-icon-s-tools",
              title: "工具",
              to: "/you",
              name: "you",
              index:'1.3',
            },
            {
              icon: "el-icon-user-solid",
              title: "用户",
              to: "/you",
              name: "you",
              index:'1.4',
            },
          ],
        },
        {
          icon: "el-icon-camera-solid",
          title: "相机",
          index:'2',
          children: [
            {
              icon: "el-icon-phone",
              title: "电话",
              to: "/my",
              name: "my",
              index:'2.1'
            },
            {
              icon: "el-icon-more",
              title: "省略",
              to: "/my",
              name: "my",
              index:'2.2'
            },
            {
              icon: "el-icon-star-on",
              title: "星星",
              to: "/my",
              name: "my",
              index:'2.3'
            },
            {
              icon: "el-icon-s-goods",
              title: "商品",
              to: "/my",
              name: "my",
              index:'2.4'
            },
          ],
        },
        {
          icon: "el-icon-s-comment",
          title: "信息",
          to: "/my",
          name: "my",
          index:'3'
        },
        {
          icon: "el-icon-s-opportunity",
          title: "灯泡",
          to: "/you",
          name: "you",
          index:'4'
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
</style>