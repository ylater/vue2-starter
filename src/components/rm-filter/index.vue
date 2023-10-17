<script setup>
const emits = defineEmits(['search', 'reset'])
const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
})
const filterRef = ref(null)
function handleSearch() {
  emits('search')
}
function handleReset() {
  filterRef.value.resetFields()
  emits('reset')
}
</script>
<template>
  <el-form class="rm-filter" v-bind="$attrs" v-on="$listeners" ref="filterRef" label-position="right">
    <slot></slot>
    <div class="rm-filter-actions">
      <el-button type="primary" @click="handleSearch" :loading="loading">查询</el-button>
      <el-button @click="handleReset">重置</el-button>
    </div>
  </el-form>
</template>
<style lang="less" scoped>
.rm-filter {
  width: 100%;
  display: flex;
  align-items: flex-start;

  &:deep(.el-form-item) {
    margin-right: 20px;
    display: flex;
    align-items: center;
  }

  .rm-filter-actions {
    margin-left: auto;
  }
}
</style>