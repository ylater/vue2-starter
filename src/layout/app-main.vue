
<script setup>
</script>
<template>
  <main class="rm-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </main>
</template>
<style lang="scss" scoped>
.rm-main {
  min-height: calc(100vh - var(--rm-layout-header-height));
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #fff;
}

.fixed-header+.app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }

  .fixed-header+.app-main {
    padding-top: 84px;
  }
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
