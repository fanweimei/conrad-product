<template>
    <div class="g-core">
        <div class="core-left">
            <h3>这是标题</h3>
            <div>这是介绍内容</div>
        </div>
        <div class="core-right">
            <img src="//14817470.s61i.faiusr.com/2/AD0IvrGIBxACGAAgysHl2gUo1eSO7gcwqQQ4zwI.jpg.webp" alt="">
        </div>
    </div>
    <div class="box">

    </div>
    <div style="height: 1800px; background-color: yellow;"></div>
</template>

<script lang="ts" setup>
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from 'vue';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    gsap.to('.box', {
        scrollTrigger: {
            trigger: '.box',
            start: 'top 80%',
            end: '+=500',
            pin: true,
            // scrub: true,
            markers: true
        },
        x: 1000,
        duration: 10
    })
})
</script>

<style scoped lang="less">
.g-core {
    display: flex;
    padding: 0 50px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 600px;
    background: url(https://14817470.s61i.faiusr.com/2/AD0IvrGIBxACGAAgueLXzQUokMbm0AEwgA842wc.jpg);
    .core-right {
        width: 553px;
        height: 335px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
.box {
    width: 200px;
    height: 200px;
    background-color: red;
}
</style>