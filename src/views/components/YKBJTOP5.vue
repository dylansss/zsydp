<template>
  <div class="list-container">
    <div v-for="(item, index) in sortedData" :key="item.name" class="list-item">
      <!-- 固定宽度50px的name部分 -->
      <div class="item-name">{{ item.name }}</div>
      <!-- 动态宽度的条形部分 -->
      <div class="item-bar-container-border">

        <div class="item-bar-container">
          <div :class="['item-bar', `item-bar-${index}`]" :style="{
            width: calculateWidth(item.value) + '%',
          }">
            <div :class="['item-bar-point', `item-bar-point-${index}`]"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

// 原始数据
const data = [
  { name: 'a123as', value: 100 },
  { name: 'b123as', value: 80 },
  { name: 'c123as', value: 60 },
  { name: 'd123as', value: 40 },
  { name: 'e123as', value: 20 },
];

// 计算排序后的数据
const sortedData = computed(() => {
  return [...data].sort((a, b) => b.value - a.value);
});

// 计算宽度百分比的函数
const maxValue = Math.max(...data.map((item) => item.value));
const calculateWidth = (value) => (value / maxValue) * 100;
</script>

<style scoped lang="scss">
.list-container {
  width: 400px;
  display: flex;
  flex-direction: column;
}

.list-item {
  display: flex;
  align-items: center;
  height: 30px;
  width: 100%;
  color: #fff;
}

.item-name {
  width: 50px;
  text-align: left;
  font-size: 12px;
  color: #C9C9C9;
  line-height: 9px;
}

.item-bar-container-border {
  height: 30px;
  display: flex;
  align-items: center;
  border-left: 1px solid #3C4550;
}

.item-bar-container {
  width: 357.5px;
  height: 13px;
  position: relative;
  background: url(../../assets/images/top5-item-bg.png);
  background-size: 100% 100%;

}

.item-bar {
  height: 100%;
  border-radius: 5px;
  background: url(../../assets/images/top5-item-ln-2.png) no-repeat;
  // background-size: 100% 100%;
  background-position: 0% 0;
  position: relative;

  .item-bar-point {
    width: 27px;
    height: 27px;
    background: url(../../assets/images/top5-item-ln-point-2.png);
    background-size: 100% 100%;
    position: absolute;
    right: -9px;
    top: -11px;
  }
}

.item-bar-0 {
  background: url(../../assets/images/top5-item-ln-1.png) no-repeat;

  .item-bar-point {
    background: url(../../assets/images/top5-item-ln-point-1.png);

  }
}
</style>
