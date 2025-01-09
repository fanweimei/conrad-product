<template>
  <a-carousel arrows :autoplay="true" :autoplaySpeed="3000">
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
    <div v-for="item in items" :key="item.id">
      <div class="banner-item" :style="{ height: '100vh', backgroundImage: `url(${item.bgUrl})` }">
        <div class="banner-item-inner">
          {{ item.id }}
        </div>
      </div>
    </div>
  </a-carousel>
</template>
<script lang="ts" setup>
import { LeftOutlined, RightOutlined } from "@ant-design/icons-vue";
import { onMounted, ref } from "vue";

const getImgUrl = (imagePath: string) => new URL(imagePath, import.meta.url).href

const bannerHeight = ref(window.innerHeight);
const items = ref([
    { id: 1, bgUrl: getImgUrl('../assets/image/banner_bg1.png') },
    { id: 2, bgUrl: getImgUrl('../assets/image/banner_bg2.png') }
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
  // background: #364d79;
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
.banner-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  transition: background-image 2s ease-in-out;
  .banner-item-inner {
    width: 830px;
    height: 420px;
    border: 5px solid #999;
    line-height: 420px;
    color: #ddd;
    text-align: center;
    font-size: 42px;
  }
}
</style>
