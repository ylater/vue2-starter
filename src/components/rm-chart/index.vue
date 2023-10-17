<template>
  <VCharts v-if="renderChart" :option="options" :autoresize="autoResize" :style="{ width, height }" />
</template>
<script   setup>
import 'echarts-gl'
import VCharts from 'vue-echarts'
import { use } from "echarts/core"
import { CanvasRenderer, SVGRenderer } from "echarts/renderers";
import { BarChart, LineChart, PieChart, RadarChart } from 'echarts/charts'
import {
  GridComponent,
  PolarComponent,
  GeoComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  DatasetComponent,
  ToolboxComponent,
  DataZoomComponent,
  GraphicComponent
} from "echarts/components";
use([
  CanvasRenderer,
  SVGRenderer,
  GridComponent,
  PolarComponent,
  GeoComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
  DatasetComponent,
  ToolboxComponent,
  DataZoomComponent,
  GraphicComponent,
  BarChart, LineChart, PieChart, RadarChart
])
defineProps({
  options: {
    type: Object,
    default() {
      return {};
    },
  },
  autoResize: {
    type: Boolean,
    default: true,
  },
  width: {
    type: String,
    default: '100%',
  },
  height: {
    type: String,
    default: '100%',
  },
});
// const appStore = useAppStore();
// const theme = computed(() => {
//   if (appStore.theme === 'dark') return 'dark';
//   return '';
// });
const renderChart = ref(false);
// wait container expand
nextTick(() => {
  renderChart.value = true;
});

</script>

<style scoped lang="less"></style>
