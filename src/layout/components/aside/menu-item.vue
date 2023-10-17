<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => { }
  }
})
const hasChildren = computed(() => {
  return props.item.children && props.item.children.length > 0
})
</script>
<template>
  <el-submenu :index="item.path" v-if="hasChildren">
    <template slot="title">
      <i :class="item.meta.icon"></i>
      <span slot="title"> {{ item.meta.title }}</span>
    </template>
    <el-menu-item :key="child.path" :index="child.path" v-for="child in item.children">
      <i :class="child.meta.icon"></i>
      <span slot="title">{{ child.meta.title }}</span>
    </el-menu-item>
  </el-submenu>
  <el-menu-item v-else :index="item.path">
    <i :class="item.meta.icon"></i>
    <span slot="title">{{ item.meta.title }}</span>
  </el-menu-item>
</template>
<style lang="less" scoped></style>