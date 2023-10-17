<script setup>
import RmHeader from './components/header/index.vue'
import RmAside from './components/aside/index.vue'
import RmMain from './app-main.vue'
</script>	
<template>
  <el-container class="rm-layout">
    <rm-aside></rm-aside>
    <el-container class="rm-containter">
      <rm-header></rm-header>
      <rm-main></rm-main>
    </el-container>
  </el-container>
</template>

<style lang="less" scoped>
.rm-layout {
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .rm-containter {
    display: flex;
    flex-direction: column;
  }

  .rm-main {
    height: 100%;
    padding: 20px 20px 0 20px;
    background-color: var(--rm-bg-color);
    overflow: auto;
  }
}
</style>	
 