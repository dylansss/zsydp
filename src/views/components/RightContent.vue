<template>
    <div class="right-container fl">
        <div class="chart right-1">
            <ZTitle content="油库实时" />
            <YKSS />
        </div>
        <div class="chart right-2">
            <ZTitle content="物流视频监控" />
            <div class="content right-2-content">
                <Wuliuvideo />
            </div>
        </div>
        <div class="chart right-3">
            <ZTitle content="加油站运行监控" rtitle="万吨/个" />
            <JYZYXJK />
        </div>
    </div>
</template>

<script setup>
import ZTitle from './ZTitle.vue'
import YKSS from './YKSS.vue'
import JYZYXJK from './JYZYXJK.vue'
import Wuliuvideo from './Wuliuvideo.vue'
</script>

<style scoped lang="scss">
.right-container {}
</style>