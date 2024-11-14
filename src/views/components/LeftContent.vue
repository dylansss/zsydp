<template>
    <div class="left-container fl">
        <div class="chart left-1">
            <!-- <div class="title title-2">收油作业负荷时间比</div> -->
            <ZTitle content="收油作业负荷时间比" />
            <div class="content left-1-content">
                <SYZYFHSJB />
            </div>
        </div>
        <div class="chart left-2">
            <ZTitle content="公路发油频次" />
            <div class="content left-2-content">
                <GLFYPC />
            </div>

        </div>
        <div class="chart left-3">
            <ZTitle content="损耗管理（油库损耗）" rtitle="单位：吨" />
            <div class="content left-3-content">
                <div class="top">
                    这里有三个数据块
                </div>
                <SHGL />
            </div>
        </div>
        <div class="chart left-4">
            <ZTitle content="油库报警TOP5" />
            <div class="content left-3-content">
                <YKBJTOP5 />
            </div>
        </div>
    </div>
</template>

<script setup>
import ZTitle from './ZTitle.vue'
import GLFYPC from './GLFYPC.vue'
import SYZYFHSJB from './SYZYFHSJB.vue'
import SHGL from './SHGL.vue'
import YKBJTOP5 from './YKBJTOP5.vue'
</script>

<style scoped lang="scss">
.left-container {

    .left-1 {
        .left-1-content {
            // background: url(../../../public/img/left-1.png);
        }
    }

    .left-2 {
        // background: url(../../../public/img/left-2.png);
    }

    .left-3 {
        .left-3-content {

            // background: url(../../../public/img/left-3.png);
        }
    }
}
</style>