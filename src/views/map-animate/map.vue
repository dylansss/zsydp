<template>
  <div class="home-page">
    <div class="title">
      四川销售油库监控平台
    </div>
    <div class="main-container">
      <LeftContent></LeftContent>
      <div class="center-container fl">
        <div class="map-level">
          <canvas id="canvas"></canvas>

        </div>
        <div class="bottom-container fl">
          <ZTitle content="一次物流调度监控" rtitle="单位：万吨" />
          <BottomContent></BottomContent>
        </div>
      </div>
      <RightContent></RightContent>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount, reactive, watch } from "vue"
import ZTitle from '../components/ZTitle.vue'
import LeftContent from '../components/LeftContent.vue'
import RightContent from '../components/RightContent.vue'
import BottomContent from '../components/BottomContent.vue'
import { World } from "./map"
import { useRoute } from "vue-router";
let app = null
const route = useRoute()

onMounted(() => {
  console.log(route.meta, 'meta');

  if (route.meta.shouldReload) {
    window.location.reload(); // 强制刷新页面
  }
  app = new World(document.getElementById("canvas"), {
    geoProjectionCenter: [103.36, 30.65],
  })
})

onBeforeUnmount(() => {
  app && app.destroy()
})
</script>

<style lang="scss">
.home-page {
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;

  .title {
    font-size: 40px;
    width: 100%;
    height: 75px;
    line-height: 75px;
    text-align: center;
    color: #fff;
  }

  .main-container {
    display: flex;
    width: 100%;
    height: calc(100% - 75px);
    justify-content: space-between;
    padding: 0 30px 17px;
    box-sizing: border-box;
    margin-top: 10px;


    .fl {
      display: flex;
    }

    .center-container {
      flex: 1;
      position: relative;
      display: flex;
      flex-flow: column;
      align-items: center;


      .map-level {
        width: 100%;
        flex: 1;

        #canvas {
          width: 100%;
          height: 100%;
          // background: #000;
        }
      }

      .bottom-container {
        display: none;
        width: 90%;
        height: 304px;
        display: flex;
        flex-flow: column;
        background: url(../../assets/images/bottom-bg.png);
        background-size: 100% 100%;

      }

    }


    .left-container,
    .right-container {
      width: 450px;
      height: 100%;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      background: url(../../assets/images/side-bg.png);
      background-size: 100% 100%;
      padding: 20px;
      box-sizing: border-box;
      gap: 20px;

      .chart {
        width: 100%;
        // height: 30%;
        flex: 1;
        background-size: 100% 100%;

        .content {
          width: 100%;
          height: calc(100% - 40px);
          background-size: 100% 100%;
        }
      }
    }

  }
}



// 返回按钮
.return-btn {
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
  padding: 5px 24px;
  color: #fff;
  border: 1px solid #2bc4dc;
  margin-bottom: 10px;
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
  display: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 1;
  }
}

// 右侧按钮组
.map-btn-group {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    padding: 5px 12px;
    color: #fff;
    border: 1px solid #2bc4dc;
    margin-bottom: 10px;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
    cursor: pointer;
    transition: all 0.3s;

    &.active {
      opacity: 1;
    }
  }
}

// 信息框
.info-point {
  background: rgba(0, 0, 0, 0.5);
  color: #a3dcde;
  font-size: 14px;
  width: 270px;
  height: 156px;
  padding: 16px 12px 0;
  margin-bottom: 30px;
  font-size: 20px;

  &-wrap {

    &:after,
    &:before {
      display: block;
      content: "";
      position: absolute;
      top: 0;
      width: 15px;
      height: 15px;
      border-top: 1px solid #4b87a6;
    }

    &:before {
      left: 0;
      border-left: 1px solid #4b87a6;
    }

    &:after {
      right: 0;
      border-right: 1px solid #4b87a6;
    }

    &-inner {

      &:after,
      &:before {
        display: block;
        content: "";
        position: absolute;
        bottom: 0;
        width: 15px;
        height: 15px;
        border-bottom: 1px solid #4b87a6;
      }

      &:before {
        left: 0;
        border-left: 1px solid #4b87a6;
      }

      &:after {
        right: 0;
        border-right: 1px solid #4b87a6;
      }
    }
  }

  &-line {
    position: absolute;
    top: 7px;
    right: 12px;
    display: flex;

    .line {
      width: 5px;
      height: 2px;
      margin-right: 5px;
      background: #17e5c3;
    }
  }

  &-content {
    .content-item {
      display: flex;
      height: 45px;
      line-height: 45px;
      background: rgba(35, 47, 58, 0.6);
      margin-bottom: 5px;

      .label {
        width: 100px;
        padding-left: 10px;
      }

      .value {
        color: #fff;
      }
    }
  }
}

// 标牌
.badges-label {
  z-index: 99999;

  &-outline {
    position: absolute;
  }

  &-wrap {
    position: relative;
    padding: 10px 10px;
    background: #0e1937;
    border: 1px solid #1e7491;
    font-size: 12px;
    font-weight: bold;
    color: #fff;
    // margin-bottom: 50px;
    bottom: 50px;
    z-index: 99999;

    span {
      color: #ffe70b;
    }

    &:after {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 10px;
      height: 10px;
      display: block;
      content: "";
      border-right: 2px solid #6cfffe;
      border-bottom: 2px solid #6cfffe;
    }

    &:before {
      position: absolute;
      left: 0;
      top: 0;
      width: 10px;
      height: 10px;
      display: block;
      content: "";
      border-left: 2px solid #6cfffe;
      border-top: 2px solid #6cfffe;
    }

    .icon {
      position: absolute;
      width: 27px;
      height: 20px;
      left: 50%;
      transform: translateX(-13px);
      bottom: -40px;
    }
  }
}

.area-name-label {
  font-size: 20px;
  font-family: YouSheBiaoTiHei;
  font-weight: 400;
  color: #F0F0F0;

  &-wrap {
    opacity: 1;
    text-shadow: 1px 1px 0px #000;
  }
}

.provinces-name-label {
  &-wrap {
    color: #5fc6dc;
    opacity: 0;
    text-shadow: 1px 1px 0px #000;
  }
}

.provinces-label-style02 {
  z-index: 2;

  &-wrap {
    transform: translate(0%, 200%);
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 40px;
    z-index: 2;
  }

  .number {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
    /* .unit {
      color: #fff;
      font-size: 12px;
      font-weight: 400;
      opacity: 0.5;
      padding-left: 5px;
    } */
  }

  .no {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #7efbf6;
    /* text-shadow: 0px 0px 4px 0px #7efbf6; */
    text-shadow: 0 0 5px #7efbf6;
    font-size: 16px;
    /* font-weight: 700; */
    width: 30px;
    height: 30px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.5);
  }

  .yellow {
    .no {
      color: #fef99e !important;
      text-shadow: 0 0 5px #fef99e !important;
    }
  }
}

.fixed-loading {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
}

.page-loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
}

.page-loading {
  width: 30px;
  height: 30px;
  border: 2px solid #fff;
  border-top-color: transparent;
  border-radius: 100%;
  animation: loading infinite 0.75s linear;
}

@keyframes loading {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
