<script setup>
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
  <div class="vcard">
    <div class="vcard-header" v-if="title">
      <h3>{{ title }}</h3>
      <div>
        <slot name="actions"></slot>
      </div>
    </div>
    <div class="vcard-main">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="less" scoped>
.vcard {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--rm-border-color-lighter);
  border-radius: var(--rm-base-radius);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
    transition: box-shadow 0.3s ease-in-out;
  }

  .vcard-header {
    height: 40px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--rm-border-color-lighter);

    h3 {
      font-size: 15px;
      font-weight: 500px;
    }
  }

  .vcard-main {
    padding: 12px;
  }
}
</style>