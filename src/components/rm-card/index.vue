<template>
  <div class="rm-card" :class="{ bordered: border }">
    <div class="rm-card-header" v-if="title">
      <slot name="header">
        <div class="rm-card-title">
          {{ title }}
        </div>
        <div class="rm-card-extra">
          <slot name="extra"></slot>
        </div>
      </slot>
    </div>
    <div class="rm-card-body">
      <slot></slot>
    </div>
    <div class="rm-card-footer" v-if="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script   setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  border: {
    type: Boolean,
    default: false,
  },
  footer: {
    type: Boolean,
    default: false,
  },
});
</script>
<style lang="less" scoped>
.rm-card {
  width: 100%;
  // flex: 1;
  background-color: #fff;
  border-radius: var(--rm-base-radius);
  overflow: hidden;

  // box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  &.bordered {
    border: 1px solid var(--rm-border-color);
  }

  .rm-card-header {
    height: auto;
    padding: 20px 20px 0 20px;
    // border-bottom: 1px solid var(--rm-border-color);
    display: flex;
    justify-content: space-between;

    .rm-card-title {
      font-size: 16px;
      color: var(--rm-color-text-1);
      font-weight: bold;
    }

    .rm-card-extra {
      font-size: 12px;
      color: #999;
    }
  }

  .rm-card-body {
    padding: 16px;
  }

  .rm-card-footer {
    padding: 16px;
    border-top: 1px solid #f0f0f0;
  }
}
</style>
