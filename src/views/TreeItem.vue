<template>
  <div>
    <div v-if="!child.children">
      <el-menu-item :index="child.index">
        <router-link :to="child.to">
          <i :class="child.icon"></i>
          <span>{{ child.title }}</span>
          {{ child.name }}
        </router-link>
      </el-menu-item>
    </div>

      <el-submenu v-else ref="subMenu" :index="child.index">
      <template slot="title">
        <i :class="child.icon"></i>
        <span>{{ child.title }}</span>
      </template>
      <tree-item
        v-for="menu in child.children"
        :key="menu.icon"
        :is-nest="true"
        :child="menu"
        class="nest-menu"
      />
    </el-submenu>

  </div>
</template>

<script>
export default {
  name: "TreeItem",
  props: ["child"],
};
</script>

<style lang="less" scoped>
</style>