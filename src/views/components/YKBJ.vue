<template>
  <div id="main" style="width: 100%; height: 100%" ref="main"></div>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from 'vue';
import * as echarts from 'echarts';





const main = ref(null);
let myChart = null;

const initChart = () => {
  const time = ref(generateInitialTime()); // 初始时间
  const dataOne = ref([11, 4, 7, 8, 13]);
  const dataTwo = ref([9, 7, 7, 13, 15]);

  const updateChart = () => {
    // 更新时间和数据，实现图表横向移动
    time.value.shift();  // 移除第一个时间点
    time.value.push(new Date().toLocaleTimeString().replace(/^\D*/, ''));  // 添加新的时间点

    // 更新 series 数据 (你可以根据实际数据逻辑更新数据)
    dataOne.value.shift();
    dataOne.value.push(Math.floor(Math.random() * 20)); // 新增随机数据
    dataTwo.value.shift();
    dataTwo.value.push(Math.floor(Math.random() * 20));

   
    myChart.setOption({
      xAxis: {
        data: time.value
      },
      series: [
        {
          data: dataOne.value
        },
        {
          data: dataTwo.value
        }
      ]
    });
  };
  const data = [];
    for (let i = 0; i < 5; ++i) {
      data.push(Math.round(Math.random() * 200));
    }

  const options = {
    xAxis: {
      max: 'dataMax'
    },
    yAxis: {
      type: 'category',
      data: ['A', 'B', 'C', 'D', 'E'],
      inverse: true,
      animationDuration: 300,
      animationDurationUpdate: 300,
      max: 2 // only the largest 3 bars will be displayed
    },
    series: [
      {
        realtimeSort: true,
        name: 'X',
        type: 'bar',
        data: data,
        label: {
          show: true,
          position: 'right',
          valueAnimation: true
        }
      }
    ],
    legend: {
      show: true
    },
    animationDuration: 0,
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear'
  };

  function run() {
    for (var i = 0; i < data.length; ++i) {
      if (Math.random() > 0.9) {
        data[i] += Math.round(Math.random() * 2000);
      } else {
        data[i] += Math.round(Math.random() * 200);
      }
    }
    myChart.setOption({
      series: [
        {
          type: 'bar',
          data
        }
      ]
    });
  }
  setTimeout(function () {
    run();
  }, 0);
  setInterval(function () {
    run();
  }, 3000);
  myChart = echarts.init(main.value);
  myChart.setOption(options);


};

// 生成初始时间数据
const generateInitialTime = () => {
  let now = new Date();
  let res = [];
  let len = 5;
  while (len--) {
    res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
    now = new Date(+now - 2000);
  }
  return res;
};

onMounted(() => {
  initChart();
});
</script>

<style scoped lang="scss"></style>