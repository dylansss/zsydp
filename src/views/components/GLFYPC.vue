<template>
  <div id="main" style="width: 100%; height: 100%" ref="main"></div>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from 'vue';
import * as echarts from 'echarts';

const main = ref(null);
let myChart = null;

const options = {
  grid: {
    left: '0%',
    right: '0%',
    bottom: '0%',
    top: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['02.01', '02.05', '02.10', '02.15', '02.20', '02.25'],
    axisLabel: {
      textStyle: {
        color: '#fff' // X轴文字颜色
      }
    },
    axisLine: {
      lineStyle: {
        color: '#fff' // X轴线颜色
      }
    }
  },
  yAxis: {
    type: 'value',
    min: 0, // 设置 Y 轴从 0 开始
    max: 1200,
    axisLabel: {
      textStyle: {
        color: '#fff' // Y 轴文字颜色
      }
    },
    axisLine: {
      lineStyle: {
        color: '#fff' // Y 轴线颜色
      }
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.2)' // 网格线颜色
      }
    }
  },
  series: [
    {
      data: [700, 800, 950, 850, 900, 750],
      showSymbol: false,
      type: 'line',
      smooth: true,
      lineStyle: {
        color: '#ff7f50', // 线条颜色
        width: 2
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(255, 127, 80, 0.5)' }, // 渐变起始颜色
            { offset: 1, color: 'rgba(255, 127, 80, 0)' }    // 渐变结束颜色
          ]
        }
      }
    },
    {
      data: [650, 820, 880, 760, 920, 880],
      showSymbol: false,
      type: 'line',
      smooth: true,
      lineStyle: {
        color: '#00fa9a', // 线条颜色
        width: 2
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(0, 250, 154, 0.5)' },
            { offset: 1, color: 'rgba(0, 250, 154, 0)' }
          ]
        }
      }
    },
    {
      data: [800, 780, 890, 940, 870, 950],
      showSymbol: false,
      type: 'line',
      smooth: true,
      lineStyle: {
        color: '#1e90ff', // 线条颜色
        width: 2
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(30, 144, 255, 0.5)' },
            { offset: 1, color: 'rgba(30, 144, 255, 0)' }
          ]
        }
      }
    },
    {
      data: [600, 850, 800, 900, 830, 870],
      showSymbol: false,
      type: 'line',
      smooth: true,
      lineStyle: {
        color: '#ffa500', // 线条颜色
        width: 2
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(255, 165, 0, 0.5)' },
            { offset: 1, color: 'rgba(255, 165, 0, 0)' }
          ]
        }
      }
    }
  ]

};

const initChart = () => {
  myChart = echarts.init(main.value);
  myChart.setOption(options);
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

<style scoped lang="scss">
#main {
  width: 100%;
  height: 100%;
}
</style>
