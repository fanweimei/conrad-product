<template>
  <Header />
  <Banner />
  <Introduction />
  <Customization />
  <Cardlist />
  <Realtime />
  <Partner />
  <Footer />
  <BackTop>
  </BackTop>
</template>

<script setup>
import { BackTop } from 'ant-design-vue';
import Banner from './components/banner.vue';
import Introduction from "./components/introduction.vue";
import Customization from "./components/customization.vue";
import Cardlist from "./components/cardlist.vue";
import Realtime from "./components/realtime.vue";
import Partner from "./components/partner.vue";
import Footer from "./components/footer.vue";
import Header from "./components/header.vue";

</script>



<style>
.container {
  position: relative;
  padding: 0;
  list-style-type: none;
}

.rest {
  height: 1000px;
}

.item {
  width: 100%;
  height: 30px;
  background-color: #f3f3f3;
  border: 1px solid #666;
  box-sizing: border-box;
}

/* 1. 声明过渡效果 */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. 声明进入和离开的状态 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(30px, 0);
}

/* 3. 确保离开的项目被移除出了布局流
      以便正确地计算移动时的动画效果。 */
.fade-leave-active {
  position: absolute;
}
</style>