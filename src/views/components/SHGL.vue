<template> 
  <div id="main" style="width: 100%; height: 100%" ref="main"></div>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from 'vue';
import * as echarts from 'echarts';

const main = ref(null);
let myChart = null;

// 配置选项
const options = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  xAxis: {
    type: 'category',
    data: ['2月', '3月', '4月', '5月', '6月', '7月'],
    axisLabel: {
      color: '#FFFFFF', // X 轴字体颜色
    },
    axisLine: {
      lineStyle: {
        color: '#FFFFFF' // X 轴线颜色
      }
    }
  },
  yAxis: [
    {
      type: 'value',
      min: 0,
      max: 200,
      position: 'left',
      axisLabel: {
        color: '#FFFFFF', // Y 轴字体颜色
        formatter: '{value}'
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(211, 211, 211, 0.3)' // 水平分割线颜色（浅灰色半透明）
        }
      },
      axisLine: {
        lineStyle: {
          color: '#FFFFFF' // Y 轴线颜色
        }
      }
    },
    {
      type: 'value',
      min: 0,
      max: 4,
      position: 'right',
      axisLabel: {
        color: '#FFFFFF', // 右侧 Y 轴字体颜色
        formatter: '{value}'
      },
      splitLine: {
        show: false // 右侧 Y 轴不显示分割线
      },
      axisLine: {
        lineStyle: {
          color: '#FFFFFF' // 右侧 Y 轴线颜色
        }
      }
    }
  ],
  series: [
    {
      name: '柱状图1',
      type: 'bar',
      data: [120, 132, 101, 134, 90, 230],
      yAxisIndex: 0,
      barWidth: 10, // 设置柱子宽度
      barGap: '50%' // 每个月份之间距离
    },
    {
      name: '柱状图2',
      type: 'bar',
      data: [60, 72, 91, 54, 60, 110],
      yAxisIndex: 0,
      barWidth: 10,
      barGap: '50%' // 同样的柱间距离
    },
    {
      name: '折线图',
      type: 'line',
      yAxisIndex: 1,
      data: [1.2, 2.3, 1.8, 2.1, 1.6, 3.1],
      areaStyle: {
        color: 'rgba(255, 182, 193, 0.3)' // 折线图阴影效果
      },
      itemStyle: {
        color: '#FF69B4'
      },
      smooth: true
    }
  ]
};

const initChart = () => {
  myChart = echarts.init(main.value);
  myChart.setOption(options);
};

onMounted(() => {
  initChart();
  window.addEventListener('resize', () => myChart.resize());
});

onUnmounted(() => {
  window.removeEventListener('resize', () => myChart.resize());
  myChart.dispose();
});
</script>

<style scoped lang="scss">
#main {
  width: 100%;
  height: 100%;
}
</style>
