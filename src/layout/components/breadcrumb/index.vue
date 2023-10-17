<template>
  <el-breadcrumb separator="/">
    <TransitionGroup name="breadcrumb">
      <el-breadcrumb-item v-for="item in breadcrumb" :key="item">
        <span>{{ item }}</span>
      </el-breadcrumb-item>
    </TransitionGroup>
  </el-breadcrumb>
</template>

<script>
import { watch } from 'vue';
import { ref } from 'vue';

export default {
  data() {
    return {
      breadcrumb: [],
    };
  },
  mounted() {
    this.getBreadcrumb();
    watch(() => this.$route, () => {
      console.log('route change');
      this.getBreadcrumb();
    });
  },
  methods: {
    getBreadcrumb() {
      const matched = this.$route.matched.filter(item => item.meta && item.meta.title);
      const result = matched.map(item => item.meta.title);
      this.breadcrumb = result;
    },
  },
};
</script>

<style>
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.3s;
}

.breadcrumb-enter,
.breadcrumb-leave-to {
  opacity: 0;
  transform: translateX(0px);
}

.breadcrumb-enter-to,
.breadcrumb-leave {
  opacity: 1;
  transform: translateX(5px);
}
</style>