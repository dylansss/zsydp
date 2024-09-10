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
  
    const options = {
      title: {
        text: '动态',
        textStyle: {
          color: 'black'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#283b56'
          }
        }
      },
      legend: {},
      xAxis: {
        type: 'category',
        data: time.value,
        boundaryGap: true,
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: dataOne.value,
          type: 'line',
          name: '测试一',
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          },
          markLine: {
            data: [{ type: 'average', name: '平均值' }]
          }
        },
        {
          data: dataTwo.value,
          name: '测试二',
          type: 'line',
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          },
          markLine: {
            data: [{ type: 'average', name: '平均值' }]
          }
        }
      ]
    };
  
    myChart = echarts.init(main.value);
    myChart.setOption(options);
  
    // 每隔2秒更新一次图表，实现横向滚动
    const timer = setInterval(updateChart, 2000);
  
    // 在组件销毁时清除定时器
    onUnmounted(() => {
      clearInterval(timer);
    });
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
  
  <style scoped lang="scss">
  </style>
  