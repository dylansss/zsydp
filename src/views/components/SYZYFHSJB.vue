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
    data: ['董家湾', '董家湾', '董家湾', '董家湾', '董家湾', '董家湾', '董家湾', '董家湾', '董家湾', '董家湾', '董家湾', '董家湾', '董家湾', '董家湾', '董家湾'],
    axisLabel: {
      interval: 0, // 显示所有标签
      formatter: (value) => value.split("").join("\n"), // 让每个字分行显示
      textStyle: {
        color: '#fff', // 文字颜色
        fontSize: 14
      }
    },

    axisLine: {
      lineStyle: {
        color: '#fff' // Axis line color
      }
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      textStyle: {
        color: '#fff' // Text color
      }
    },
    axisLine: {
      lineStyle: {
        color: '#fff' // Axis line color
      }
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.2)' // Grid line color
      }
    }
  },
  series: [{
    data: [1.5, 2.2, 1.8, 2.5, 1.9, 2.6, 1.7, 2.3, 2.0, 2.4, 1.9, 2.1, 2.7, 2.0, 2.8],
    type: 'bar',
    barWidth: 10, // 设置柱子宽度，使柱子变细
    itemStyle: {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          { offset: 0, color: '#33aaff' }, // 渐变起始颜色
          { offset: 1, color: '#0099ff' }  // 渐变结束颜色
        ],
      },
      // barBorderRadius: [3, 3, 0, 0] // 圆角效果
    }
  }]
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
