<script setup>
import menuItem from './menu-item.vue'
import { menus } from '@/data/menu.js'
import { useAppStore } from '@/stores/index.js'
const store = useAppStore()
const isCollapse = computed(() => store.collapsed)
const activeIndex = ref('')
const { proxy } = getCurrentInstance()
const { $router } = proxy
onMounted(() => {
  const path = $router.currentRoute.path
  activeIndex.value = path
})
</script>

<template>
  <el-aside :width="isCollapse ? '64px' : '200px'" class="rm-aside">
    <div class="side-logo">
      <div class="logo">
        <div class="logo-img">
          <img v-if="isCollapse" src="@/assets/logo-r.png" />
          <img v-else src="@/assets/logo.png" />
        </div>
      </div>
    </div>
    <div class="aside-menu">
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu class="rm-menu" router :default-active="activeIndex" :unique-opened="false" :collapse-transition="false"
          mode="vertical" :collapse="isCollapse">
          <menu-item v-for="item in menus" :item="item" :key="item.path"></menu-item>
        </el-menu>
      </el-scrollbar>
    </div>
  </el-aside>
</template>
<style lang="less" scoped>
.rm-aside {
  height: 100%;
  background: var(--rm-layout-sider-bg-color);
  display: flex;
  flex-direction: column;
  z-index: 100;
  border-right: 1px solid var(--rm-border-color-lighter);

  .aside-menu {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    :deep(.scrollbar-wrapper) {
      overflow-x: hidden !important;
    }

    .el-scrollbar {
      height: 100%;
    }

  }
}

.logo {
  display: flex;
  width: 100%;
  height: 60px;
  padding: 0 12px;
  align-items: center;

  .logo-img {
    height: 30px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}


.rm-menu {
  height: 100%;
  width: 100% !important;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .el-menu-item {
    width: 100%;
    border-radius: 2px;
    height: 40px;
    line-height: 40px;
    margin-bottom: 4px;
    color: #4e5969;

    &:hover {
      background-color: #f2f3f5;
    }
  }

  .el-menu-item.is-active {
    position: relative;
    color: var(--rm-primary-color);
    background-color: #f2f3f5;
  }

  :deep(.el-submenu) {
    overflow: hidden;
    width: 100%;

    .el-submenu__title {
      height: 40px;
      line-height: 40px;
      color: #4e5969;
      border-radius: 2px;

      &:hover {
        background-color: #f2f3f5;
      }
    }

    .el-menu-item {
      width: 100%;
      border-radius: 2px;
      height: 40px;
      line-height: 40px;
      margin-bottom: 4px;
      color: #4e5969;

      &.is-active {
        color: var(--rm-primary-color);
        background-color: #f2f3f5;
      }

      &:hover {
        background-color: #f2f3f5;
      }
    }
  }

}
</style>    