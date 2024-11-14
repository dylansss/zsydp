<template>
    <div class="bottom-container-content">
        <div class="fl row1">
            <div class="col">
                <div class="sub-title">资源需求</div>
                <div class="fl col-con">
                    <div class="content">
                        <div class="gas-station-icon"></div>
                        <div class="split-line"></div>
                        <div class="data">
                            <div class="num">44.7</div>
                            <div class="name">汽油</div>
                        </div>
                    </div>
                    <div class="content">
                        <div class="gas-station-icon"></div>
                        <div class="split-line"></div>
                        <div class="data">
                            <div class="num">44.7</div>
                            <div class="name">柴油</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="sub-title">资源配置</div>
                <div class="fl col-con">
                    <div class="content">
                        <div class="gas-station-icon"></div>
                        <div class="split-line"></div>
                        <div class="data">
                            <div class="num">44.7</div>
                            <div class="name">汽油</div>
                        </div>
                        <div class="contrast-data">
                            <div class="num">-1.5</div>
                            <div class="name">比需求</div>
                        </div>
                    </div>
                    <div class="content">
                        <div class="gas-station-icon"></div>
                        <div class="split-line"></div>
                        <div class="data">
                            <div class="num">44.7</div>
                            <div class="name">柴油</div>
                        </div>
                        <div class="contrast-data">
                            <div class="num">+9.2</div>
                            <div class="name">比需求</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fl row2">
            <div class="col">
                <div class="sub-title">计划跟踪</div>
                <div class="fl col-con">
                    <div class="name">汽油</div>
                    <div class="right-con">
                        <div class="jhgz-list">
                            <div class="jhgz-item" v-for="item in jhgzList">
                                <div class="jhgz-num">{{ item.value }}</div>
                                <div class="jhgz-num-bg"></div>
                                <div class="jhgz-name">{{ item.name }}</div>
                            </div>
                        </div>
                        <div class="process">
                            <div class="bg">
                                <div class="bar" style="width: 59 / 100;"></div>
                            </div>
                            <div class="num"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="sub-title sub-title-hide"></div>
                <div class="fl col-con">
                    <div class="name">汽油</div>
                    <div class="right-con">
                        <div class="jhgz-list">
                            <div class="jhgz-item" v-for="item in jhgzList">
                                <div class="jhgz-num">{{ item.value }}</div>
                                <div class="jhgz-num-bg"></div>
                                <div class="jhgz-name">{{ item.name }}</div>
                            </div>
                        </div>
                        <div class="process">
                            <div class="bg">
                                <div class="bar" style="width: 59 / 100;"></div>
                            </div>
                            <div class="num"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { reactive } from 'vue';
import ZTitle from './ZTitle.vue'
const jhgzList = reactive([
    {
        name: '计划量',
        value: 86
    },
    {
        name: '已运发',
        value: 86
    },
    {
        name: '在途',
        value: 86
    },
    {
        name: '已收',
        value: 86
    },
])
</script>

<style scoped lang="scss">
.bottom-container-content {
    color: #fff;

    .fl {
        .col {
            flex: 1;
            padding-left: 30px;

            .col-con {

                width: 90%;
                height: 80px;

                padding: 20px;
                box-sizing: border-box;


            }
        }
    }

    .row1 {
        width: 100%;
        gap: 20px;
        margin-bottom: 10px;

        .col {

            .col-con {

                width: 90%;
                height: 80px;
                border-radius: 25px;
                background: url(../../assets/images/zyxq-bg.png) no-repeat;
                        background-size: 100% 100%;
                padding: 20px;
                box-sizing: border-box;

                .content {
                    display: flex;
                    align-items: center;
                    flex: 1;

                    .gas-station-icon {
                        width: 46px;
                        height: 48px;
                        background: url(../../assets/images/gas-station-bg.png) no-repeat;
                        background-size: 100% 100%;
                    }

                    .split-line {
                        width: 1px;
                        height: 64px;
                        margin: 0 30px;
                        background-color: aqua;
                        background: url(../../assets/images/gas-station-bg.png) no-repeat;
                        background-size: 100% 100%;
                    }

                    .data {
                        .num {
                            color: aqua;
                            font-size: 24px;
                            font-weight: 800;
                        }

                    }

                    .contrast-data {
                        margin-left: 20px;

                        .num {
                            color: rgb(0, 255, 64);
                            font-size: 24px;
                            font-weight: 800;
                        }
                    }
                }
            }
        }
    }

    .row2 {
        width: 100%;
        gap: 20px;
        margin-bottom: 10px;

        .col {
            .col-con {
                width: 90%;
                height: 80px;
                background: url(../../assets/images/jhgz-bg.png) no-repeat;
                background-size: 100% 100%;
                align-items: center;

                .name {
                    margin-left: 15px;
                    font-size: 18px;
                    width: 100px;
                }

                .right-con {
                    margin-left: 15px;
                    flex: 1;
                    display: flex;
                    flex-flow: column;
                    width: calc(100% - 100px);

                    .jhgz-list {
                        display: flex;
                        align-items: center;
                        width: 100%;
                        justify-content: space-around;

                        .jhgz-item {
                            width: 69px;
                            display: flex;
                            flex-flow: column;
                            position: relative;
                            align-items: center;

                            .jhgz-num {}

                            .jhgz-num-bg {
                                margin-top: -5px;
                                width: 100%;
                                height: 17px;
                                background: url(../../assets/images/jhgz-num-bg.png) no-repeat;
                                background-size: 100% 100%;

                            }
                        }
                    }
                }
            }
        }
    }

    .sub-title {
        width: 150px;
        height: 22px;
        line-height: 22px;
        font-size: 18px;
        text-indent: 1em;
        background: url(../../assets/images/sub-title-bg.png) no-repeat;
        background-size: 100% 100%;
        margin-bottom: 10px;
    }

    .sub-title-hide {
        visibility: hidden;
    }
}
</style>