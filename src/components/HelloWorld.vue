<template>
  <div class="container">
    <!-- 目标元素，当进入视口时触发动画 -->
    <div
      class="animate-element"
      ref="animateElement"
      :style="styleObject"
    >
      我是滑入的元素
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import gsap from 'gsap';

const animateElement = ref(null); // 用于引用目标元素
const observer = ref(null);

// 观察目标元素是否进入视口
const handleIntersection = (entries) => {
  console.log('entries:', entries)
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 使用 GSAP 动画库为元素添加动画
      gsap.to(entry.target, {
        x: 0,            // 最终位置
        opacity: 1,      // 动画结束时完全可见
        duration: 1,     // 动画持续时间
        ease: 'power3.out', // 动画曲线
      });
      // 停止观察该元素
      observer.value.unobserve(entry.target);
    }
  });
};

// 初始化 IntersectionObserver 来监听元素是否进入视口
onMounted(() => {
  observer.value = new IntersectionObserver(handleIntersection, {
    threshold: 0.1, // 10% 可见时触发
  });

  // 开始观察目标元素
  if (animateElement.value) {
    observer.value.observe(animateElement.value);
  }
});

// 在组件卸载时清理观察器
onBeforeUnmount(() => {
  if (observer.value) {
    observer.value.disconnect();
  }
});
</script>

<style scoped>
.container {
  height: 200vh; /* 页面高度增加，让页面有滚动 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.animate-element {
  opacity: 0; /* 初始时元素是不可见的 */
  transform: translateX(-100%); /* 初始时元素在屏幕左边外 */
}
</style>