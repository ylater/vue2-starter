
<script setup>
const cachedViews = ref([])
const key = ref(0)
</script>
<template>
  <main class="rm-common">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </main>
</template>
<style lang="less" scoped>
.rm-common {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>	
