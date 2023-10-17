<script setup>
import breadcrumb from '../breadcrumb/index.vue'
import { useAppStore, useUserStore } from '@/stores/index.js'
const { proxy } = getCurrentInstance()
const store = useAppStore()
const userStore = useUserStore()
const isCollapse = computed(() => store.collapsed)
const toggleAside = () => {
  store.toggleCollapse()
}

/**
 * 退出登录
 */
function handleCommand(command) {
  switch (command) {
    case 'logout':
      userStore.logout()
      break;
    default:
      break;
  }

}
</script>
<template>
  <header class="rm-header">
    <div class="left">
      <div class="fold-icon" @click="toggleAside">
        <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
      </div>
      <div class="breadcrumb">
        <breadcrumb></breadcrumb>
      </div>
    </div>
    <div class="right">
      <el-dropdown @command="handleCommand">
        <span class="user-dropdown">
          <el-avatar :size="40">user</el-avatar>
          <span class="name">Murphy</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="user">个人中心</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>
<style scoped lang="less">
.rm-header {
  width: 100%;
  height: var(--rm-layout-header-height);
  background: var(--rm-header-bg-color);
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
    display: flex;
    align-items: center;

    .breadcrumb {
      margin-left: 10px;
    }
  }

  .fold-icon {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #6e6e6e;
    cursor: pointer;
    border-radius: 2px;

    &:hover {
      background-color: var(--rm-bg-color)
    }
  }
}

.user-dropdown {
  display: flex;
  align-items: center;
  cursor: pointer;

  .name {
    margin: 0 10px;
  }
}
</style>