<template>
  <div class="container">
    <div v-for="(item, index) in items" :key="index" class="card">
      <div class="header">
        <h3>{{ item.title }}</h3>
      </div>
      <div class="content">
        <div class="image-container">
          <img :src="item.image" alt="油罐图示" />
        </div>
        <div class="info">
          <p>油品: {{ item.oilType }}</p>
          <p>油温(°C): {{ item.oilTemp }}</p>
          <p>油水总高(mm): {{ item.oilWaterHeight }}</p>
          <p>总体积(m³): {{ item.totalVolume }}</p>
          <p>付油进度(%): {{ item.progress }}</p>
          <p>当前状态: {{ item.status }}</p>
        </div>
        <div class="additional-info">
          <p>油质量(t): {{ item.oilQuality }}</p>
          <p>付油数量(t): {{ item.deliveryAmount }}</p>
          <p>付油次数(次): {{ item.deliveryCount }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
  {
    title: 'TD0001',
    oilType: '92#车用汽油(VIB)',
    oilTemp: '32.8',
    oilWaterHeight: '4325',
    totalVolume: '451.201',
    progress: '25.5',
    status: '静止',
    oilQuality: '320.010',
    deliveryAmount: '159.87',
    deliveryCount: '15',
    image: '../../assets/images/ykss-img-1.png', // 替换为实际图片路径
  },
  {
    title: 'TD0001',
    oilType: '92#车用汽油(VIB)',
    oilTemp: '32.8',
    oilWaterHeight: '4325',
    totalVolume: '451.201',
    progress: '25.5',
    status: '静止',
    oilQuality: '320.010',
    deliveryAmount: '159.87',
    deliveryCount: '15',
    image: '../../assets/images/ykss-img-2.png', // 替换为实际图片路径
  }
]);
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 20px;
  background-color: #0d1b2a;
}

.card {
  display: flex;
  flex-direction: column;
  background-color: #122740;
  padding: 16px;
  border-radius: 8px;
  color: #a0c4ff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  background: url(../../assets/images/ykss-bg.png) no-repeat;
  background-size: 100% 100%;
}

.header h3 {
  color: #4fc3f7;
  font-size: 24px;
  margin: 0;
}

.content {
  display: flex;
  gap: 16px;
  margin-top: 10px;
}

.image-container {
  flex-shrink: 0;
  width: 120px;
  height: 80px;
  overflow: hidden;
  border-radius: 8px;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info, .additional-info {
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.info {
  width: 200px;
  color: #ffffff;
}

.additional-info {
  width: 150px;
  color: #b0bec5;
}
</style>
