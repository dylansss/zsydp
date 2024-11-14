<template>
    <div class="z-title">
        {{ props.content }}
        <span class="fr">{{ props.rtitle }}</span>
    </div>
</template>

<script setup>
const props = defineProps(['content', 'rtitle'])
</script>

<style scoped lang="scss">
.z-title {
    width: 408px;
    height: 28px;
    line-height: 28px;
    background: url(../../assets/images/title.png);
    background-size: 100% 100%;
    font-size: 20px;
    text-indent: 1em;
    font-weight: 600;
    color: #fff;
    font-style: italic;
    margin-bottom: 10px;

    .fr {
        float: right;
        font-weight: 500;
        font-style: normal;
        margin-right: 20px;
    }
}
</style>