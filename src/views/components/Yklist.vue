<template>
  <div :class="['list-container']" ref="lineBox">
    <div class="list-item" v-for="(item, index) in displayData" :key="item.name">
      <div class="top">
        <div class="left">
          <div class="num">0{{ item.index }}</div>
          <span class="name">{{ item.name }}</span>
        </div>
        <div class="right">
          <span class="max">{{ item.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';



const formatData = ref([
  {
    name: '青龙油库',
    index: 1,
    value: 184,
  },
  {
    name: '广元油库',
    index: 2,
    value: 181,
  },
  {
    name: '104油库',
    index: 3,
    value: 94,
  },
  {
    name: '双流油库',
    index: 4,
    value: 85,
  },
  {
    name: '吊黄楼油库',
    index: 5,
    value: 84,
  },
  {
    name: '7102油库',
    index:6,
    value: 72,
  },
  {
    name: '资阳油库',
    index: 7,
    value: 65,
  },
  {
    name: '史家油库',
    index: 8,
    value: 44,
  },
  {
    name: '7101油库',
    index: 9,
    value: 22,
  },
  {
    name: '隆昌油库',
    index: 10,
    value: 2,
  },
])
const displayData = computed(() => {
  return formatData.value.length > 5 ? [...formatData.value, ...formatData.value] : formatData.value; // 复制数据以实现循环滚动
});
const lineBox = ref(null);
let scrollInterval = null;

onMounted(() => {
  if (formatData.value.length > 5) startScrolling();

});

const startScrolling = () => {
  scrollInterval = setInterval(() => {
    if (lineBox.value) {
      lineBox.value.scrollTop += 1;

      if (lineBox.value.scrollTop >= lineBox.value.scrollHeight / 2) {
        lineBox.value.scrollTop = 0;
      }
    }
  }, 50);
};

</script>

<style lang="scss" scoped>
.list-container {
  width: 250px;
  color: #f7f7f7;
  height: 100%;
  overflow: auto;

  .list-item {
    flex: 1;
    width: 100%;
    height: 10%;
    font-size: 25px;
    line-height: 20px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    margin-bottom: 5px;

    .left {
      display: flex;

      .num {
        margin-right: 20px;
      }
    }

    .top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;


    }
  }

}
.list-container::-webkit-scrollbar {
  width: 0;
}
</style>