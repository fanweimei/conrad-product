<template>
  <a-carousel arrows>
    <template #prevArrow>
      <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
        <LeftOutlined :style="{fontSize: '30px', color: '#fff'}" />
      </div>
    </template>
    <template #nextArrow>
      <div class="custom-slick-arrow" style="right: 10px">
        <RightOutlined :style="{fontSize: '30px', color: '#fff'}" />
      </div>
    </template>
    <div class="banner-item" v-for="item in items" :key="item.id">
      <div :style="{ height: bannerHeight + 'px', background: `url(${item.bgUrl})` }">{{ item }}</div>
    </div>
  </a-carousel>
</template>
<script lang="ts" setup>
import { LeftOutlined, RightOutlined } from "@ant-design/icons-vue";
import { onMounted, ref } from "vue";

const bannerHeight = ref(window.innerHeight);
const items = ref([
    { id: 1, bgUrl: 'https://14817470.s61i.faiusr.com/4/AD0IvrGIBxAEGAAgmP7AzwUoyNzgFTCADziYBw.png' },
    { id: 2, bgUrl: 'https://14817470.s61i.faiusr.com/4/AD0IvrGIBxAEGAAgnv7AzwUos9eDqwEwgA84mAc.png' }
]);

onMounted(() => {
  bannerHeight.value = window.innerHeight;
});
</script>
<style scoped lang="less">
/* For demo */
:deep(.slick-slide) {
  text-align: center;
  /* height: 160px;
  line-height: 160px; */
  background: #364d79;
  overflow: hidden;
}

:deep(.slick-arrow.custom-slick-arrow) {
  width: 70px;
  height: 70px;
  font-size: 25px;
  color: #fff;
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
  border-radius: 6px;
  line-height: 70px;
  text-align: center;
  &:hover {
    background-color: rgba(0, 0, 0,.3);
  }
}
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}
:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  opacity: 0.5;
}

:deep(.slick-slide h3) {
  color: #fff;
}

</style>
