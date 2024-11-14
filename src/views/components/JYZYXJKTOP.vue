<template>
  <div class="jyzyxjk-top container">
    <!-- 左侧总库存量 -->
    <div class="left-info">
      <div class="info-number">{{ totalStock }}</div>
      <div class="info-label">总库存量</div>
    </div>

    <!-- 中间堆叠柱状图 -->
    <div class="chart" ref="chartContainer"></div>

    <!-- 右侧库存报警 -->
    <div class="right-info">
      <div class="info-number">{{ stockAlert }}</div>
      <div class="info-label">库存报警</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import * as echarts from 'echarts';

// 数据
const totalStock = ref(8.5);   // 总库存量
const stockAlert = ref(99);    // 库存报警值

// ECharts 初始化
const chartContainer = ref(null);
let chartInstance = null;

const initChart = () => {
  if (!chartContainer.value) return;

  chartInstance = echarts.init(chartContainer.value);
  const option = {
    color: ['#00c2ff', '#00ffae'],  // 设置堆叠柱状图的颜色
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '10%',
      right: '10%',
      bottom: '10%',
      top: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['汽油', '柴油'],
      axisLine: { lineStyle: { color: '#fff' } },
      axisLabel: { color: '#fff' }
    },
    yAxis: {
      type: 'value',
      max: 200,
      axisLine: { lineStyle: { color: '#fff' } },
      splitLine: { lineStyle: { color: 'rgba(255, 255, 255, 0.3)' } },
      axisLabel: { color: '#fff' }
    },
    series: [
      {
        name: '库存',
        type: 'bar',
        stack: '总量',
        barWidth: 20,
        data: [120, 150]
      },
      {
        name: '报警',
        type: 'bar',
        stack: '总量',
        data: [80, 50]
      }
    ]
  };
  chartInstance.setOption(option);
};

onMounted(() => {
  initChart();
});

onUnmounted(() => {
  if (chartInstance) {
    chartInstance.dispose();
  }
});
</script>

<style scoped>
.jyzyxjk-top {
  height: 300px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0d1b2a;
  padding: 20px;
  color: #fff;
}

.left-info,
.right-info {
  background: url(../../assets/images/jyzyxjk-bg.png) no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  height: 100px;
  background-size: cover;
  background-position: center;
}

.info-number {
  font-size: 24px;
  font-weight: bold;
}

.info-label {
  font-size: 14px;
}

.chart {
  width: 400px;
  height: 200px;
}
</style>
