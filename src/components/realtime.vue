<template>
  <div class="g-realtime">
    <div class="realtime-inner">
      <div class="realtime-left">
        <video src="@/assets/video/realtime.mp4" controls></video>
      </div>
      <div class="realtime-right">
        With our common interests in robot-building, we have set up this team.
        Our leader, Ryan, has strong passion in making robots a reality. Over
        the past few years, he has led his team to achieve various innovations
        and applied for several patents and software copyrights. True value of
        this team lays in our common interests in robot building and a strong
        sense of social duty to make a difference together to the existing
        problem. The CEO is Ryan, the founder of this team. As CTO and CDO,
        Stanley and Sam focus more on the development of robots, especially on
        software and hardware engineering. Pai, responsible for market-related
        work as CMO, is good at economics and business. Harper is sensitive to
        numbers, so she serves as CFO to finish works related to financial
        calculation.
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {
    gsap.from(".realtime-inner", {
        delay: 2,
        duration: 1,
        opacity: 0,
        y: 100,
        scrollTrigger: {
            trigger: ".realtime-inner", // 监听 `.animate-from-bottom` 元素
            start: "top bottom", // 当元素顶部到达视口底部时触发
            end: "bottom top", // 可以设置动画结束位置
            // scrub: true, // 使得动画与滚动位置同步
            markers: true, // 开启标记，便于调试
            toggleActions: "play none none none"
        },
    })
})
</script>

<style lang="less" scoped>
.g-realtime {
  height: 500px;
  background: #101010;
  padding: 90px 0;
  .realtime-inner {
    width: 90%;
    display: flex;
    margin:0 auto;
    align-items: center;
    height: 320px;
    .realtime-left {
        width: 550px;
        height: 320px;
        margin-right: 80px;
        video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .realtime-right {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        height: 100%;
        font-size: 16px;
        color: #ddd;
        line-height: 2;
    }
  };
}
</style>
