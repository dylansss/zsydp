<template>
    <div class="left-container fl">
        <div class="chart left-1">
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
                    <div class="data-container" v-for="(data, index) in dataList" :class="`data-container-${index}`">
                        <span class="name">{{ data.name }}</span>
                        <span class="num">{{ data.num }}</span>
                    </div>
                </div>
                <SHGL />
            </div>
        </div>
        <div class="chart left-4">
            <ZTitle content="油库报警TOP5" />
            <div class="content left-4-content">
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
import { reactive } from 'vue'

const dataList = reactive([
    {
        name: '昨日',
        num: "21"
    },
    {
        name: '月累计',
        num: "3320"
    },
    {
        name: '综合累计',
        num: "1.5%"
    },
])
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
            .top {
                width: 100%;
                display: flex;
                justify-content: space-between;
                height: 44px;

                .data-container {
                    width: 127px;
                    height: 44px;
                    background-size: 100% 100%;
                    color: #fff;
                    display: flex;
                    align-items: flex-end;

                    .name {
                        font-size: 12px;
                        flex: 1;
                        margin-bottom: 4px;
                        margin-left: 5px;
                    }

                    .num {
                        font-size: 21px;
                        font-weight: bold;
                        font-size: 24px;
                        margin-right: 5px;
                    }
                }

                .data-container-0 {
                    background: url(../../assets/images/data-1-bg.png);

                    .num {
                        background: linear-gradient(0deg, #FCDAA4 0%, #FFFFFF 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                }

                .data-container-1 {
                    background: url(../../assets/images/data-2-bg.png);

                    .num {
                        background: linear-gradient(0deg, #48A1D2 0%, #FFFFFF 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                }

                .data-container-2 {
                    background: url(../../assets/images/data-3-bg.png);

                    .num {
                        background: linear-gradient(0deg, #00E8CA 0%, #FFFFFF 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                }
            }

            // background: url(../../../public/img/left-3.png);
        }
    }
}
</style>