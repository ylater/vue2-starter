<script  setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
  unit: {
    type: String,
    default: '元',
  },
  inputType: {
    type: String,
    default: 'number',
  },
})
const inputRef = ref(null)
//判断是否有 controls 属性
const hasControls = ref(false)
onMounted(() => {
  hasControls.value = inputRef.value.controls
})
</script>
<template>
  <div class="rm-number-input" :class="{ 'with-controls': hasControls }">
    <el-input-number ref="inputRef" class="input" v-bind="$attrs" v-on="$listeners" />
    <div class="unit">{{ unit }}</div>
  </div>
</template>

<style lang="less" scoped>
.rm-number-input {
  display: inline-flex;
  position: relative;

  .input {
    width: 100%;
    flex: 1;
    text-align: left;

    :deep(.el-input__inner) {
      text-align: left;
    }
  }

  .unit {
    position: absolute;
    top: 1px;
    bottom: 1px;
    right: 1px;
    display: flex;
    align-items: center;
    padding: 0 4px;
    font-size: 14px;
    background-color: #F5F7FA;
    border-left: 1px solid var(--rm-border-color);
  }

  &.with-controls {
    .unit {
      right: 32px;
    }
  }


}
</style>
