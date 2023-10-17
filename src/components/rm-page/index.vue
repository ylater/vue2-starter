<script setup>
const { proxy } = getCurrentInstance()
const { $router } = proxy
function goBack() {
  $router.back()
}
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  showBack: {
    type: Boolean,
    default: false,
  },
  footer: {
    type: Boolean,
    default: false,
  },
})
</script>
<template>
  <div class="rm-page-layout">
    <div class="rm-page-header">
      <div class="title">
        <el-button v-if="showBack" @click="goBack" class="back" type="default" icon="el-icon-back"></el-button>
        <h3 v-if="title">{{ title }}</h3>
      </div>
      <div class="actions">
        <slot name="actions"></slot>
      </div>
    </div>
    <div class="rm-page-main">
      <slot></slot>
    </div>
    <div class="rm-page-footer" v-if="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<style lang="less" scoped>
.rm-page-layout {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  .rm-page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;

    .title {
      display: flex;
      align-items: center;

      .back {
        margin-right: 10px;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: var(--rm-bg-color);
        font-weight: bold;
        font-size: 18px;
      }
    }
  }

  .rm-page-main {
    flex: 1;
    padding: 0 20px;
  }

  .rm-page-footer {
    position: sticky;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--rm-border-color-lighter);
  }
}
</style>