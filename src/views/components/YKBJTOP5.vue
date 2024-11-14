<template>
  <div class="list-container">
    <div
      v-for="(item, index) in sortedData"
      :key="item.name"
      class="list-item"
    >
      <!-- 固定宽度50px的name部分 -->
      <div class="item-name">{{ item.name }}</div>
      <!-- 动态宽度的条形部分 -->
      <div class="item-bar-container">
        <div
          class="item-bar"
          :style="{
            width: calculateWidth(item.value) + '%',
            backgroundColor: index === 0 ? 'green' : 'blue',
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

// 原始数据
const data = [
  { name: 'a', value: 100 },
  { name: 'b', value: 80 },
  { name: 'c', value: 60 },
  { name: 'd', value: 40 },
  { name: 'e', value: 20 },
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
  gap: 8px;
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
  font-weight: bold;
  line-height: 30px;
}

.item-bar-container {
  width: 350px;
  background-color: #f0f0f0;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  height: 100%;
}

.item-bar {
  height: 100%;
  border-radius: 5px;
}
</style>
