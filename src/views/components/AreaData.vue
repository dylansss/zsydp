<template>
  <div id="barChart" ref="chartRef" style="width: 600px; height: 400px;"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';

const chartRef = ref(null);
let myChart = null;

const initChart = () => {
  if (!chartRef.value) return;

  // 初始化 ECharts 实例
  myChart = echarts.init(chartRef.value);

  const option = {
    color: ['#00c2ff', '#ff7e00'], // 配置柱状图颜色
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      formatter: (params) => {
        return `${params[0].name}<br/>
                ${params[0].seriesName}: ${params[0].value}<br/>
                ${params[1].seriesName}: ${params[1].value}`;
      }
    },
    legend: {
      data: ['报警加油站', '上月报警'],
      textStyle: { color: '#66ccff' },
      top: 10,
    },
    grid: {
      left: '10%',
      right: '10%',
      bottom: '10%',
      top: '20%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['成都', '绵阳', '自贡', '攀枝花', '泸州', '乐山'],
      axisLine: { lineStyle: { color: '#66ccff' } },
      axisLabel: { color: '#66ccff' }
    },
    yAxis: {
      type: 'value',
      max: 5000,
      axisLine: { lineStyle: { color: '#66ccff' } },
      splitLine: { lineStyle: { color: 'rgba(255, 255, 255, 0.1)' } },
      axisLabel: { color: '#66ccff' }
    },
    series: [
      {
        name: '报警加油站',
        type: 'bar',
        data: [4212, 2100, 3200, 4800, 2600, 3000],
        barWidth: 20,
        itemStyle: {
          borderRadius: [5, 5, 0, 0],
        },
      },
      {
        name: '上月报警',
        type: 'bar',
        data: [3850, 1800, 3000, 4400, 2400, 2800],
        barWidth: 20,
        itemStyle: {
          borderRadius: [5, 5, 0, 0],
        },
      },
    ]
  };

  myChart.setOption(option);
};

onMounted(() => {
  initChart();
});

onUnmounted(() => {
  if (myChart) {
    myChart.dispose();
  }
});
</script>

<style scoped>
#barChart {
  background-color: #0d1b2a; /* 背景色，类似于示例中的深色背景 */
  border-radius: 8px;
}
</style>
