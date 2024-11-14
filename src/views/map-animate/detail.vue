<template>
  <div class="home-page">
    <div class="title">
      {{ detailId }}号油库详情页面
    </div>
    <div class="main-container">

      <div class="left-container fl">
        <div class="chart left-1">
          <div class="title title-2">公路油量</div>
          <!-- <GLFYPC /> -->
          <div class="content left-1-content"></div>
        </div>
        <div class="chart left-2">
          <div class="title title-2">损耗管理
          </div>
          <div class="content left-2-content">
          </div>

        </div>
        <div class="chart left-3">
          <div class="title title-2">油库报警</div>
          <div class="content left-3-content">
            <YKBJ />
          </div>
        </div>
        <div class="chart left-4">
          <div class="title title-2">智能巡检机器人</div>
          <div class="content left-4-content"></div>
        </div>
      </div>
      <div class="center-container fl">
        <div class="title title-2">一次物流调度监控</div>
        <div class="content center-container-bg">
        </div>
        <div class="return-bg title" @click="gohome">返回</div>
      </div>
      <div class="right-container fl">
        <div class="chart right-1">
          <div class="title title-2">液位监控</div>
          <div class="content right-1-content"></div>
        </div>
        <div class="chart right-2">
          <div class="title title-2">库存管理</div>
          <div class="content right-2-content">
          </div>
        </div>
        <div class="chart right-3">
          <div class="title title-2">视频监控</div>
          <div class="content right-3-content">
            <Youkuvideo />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount, reactive } from "vue"
import { useRoute, useRouter } from "vue-router";
import Youkuvideo from '../components/Youkuvideo.vue'
import YKBJ from '../components/YKBJ.vue'
const route = useRoute()
const router = useRouter()
console.log(route.params.id, 'detail-route');
const detailId = ref(route.params.id)


onMounted(() => {

})
onBeforeUnmount(() => {
})
const gohome = () => {
  router.replace('/')
}
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
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #fff;
  }

  .main-container {
    display: flex;
    width: 100%;
    height: calc(100% - 60px);
    justify-content: space-between;

    .fl {
      display: flex;
    }

    .left-container {


      .left-1 {
        .left-1-content {
          background: url(../../../public/img/detail-left-1.png);
        }
      }

      .left-2 {
        // background: url(../../../public/img/left-2.png);
        .left-2-content{
          background: url(../../../public/img/detail-left-2.png);
        }
      }

      .left-3 {
        .left-3-content {

          // background: url(../../../public/img/detail-left-3.png);
        }
      }
      .left-4 {
        .left-4-content {

          background: url(../../../public/img/detail-left-4.png);
        }
      }
    }

    .right-container {
      .right-1 {
        .right-1-content {
          background: url(../../../public/img/detail-right-1.png);
        }
      }

      .right-2 {
        .right-2-content {
          background: url(../../../public/img/detail-right-2.png);
        }
      }

      .right-3 {
        .right-3-content {
          background: url(../../../public/img/detail-right-3.png);
        }
      }
    }

    .left-container,
    .right-container {
      width: 400px;
      min-width: 400px;
      height: 100%;
      display: flex;
      flex-flow: column;
      justify-content: space-between;

      .chart {
        width: 100%;
        height: 30%;
        background-size: 100% 100%;

        .content {
          width: 100%;
          height: calc(100% - 40px);
          background-size: 100% 100%;
        }
      }



    }

    .center-container {
      flex: 1;
      position: relative;
      display: flex;
      flex-flow: column;
      height: 100%;

      .content {
        width: 100%;
        height: calc(100% - 40px);

      }

      .center-container-bg {
        background: url(../../../public/img/detail-center-1.png);
        background-size: 100% 100%;
      }
      .return-bg{
        cursor: pointer;
      }
    }

    .title-2 {
      font-size: 18px;
      text-align: left;
      height: 40px;
    }

  }
}

</style>
