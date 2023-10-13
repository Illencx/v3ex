<script setup>
import { getSysStat } from '@/stores/systemStat'
import RemixPage from '../components/RemixPage.vue';
// 可以在组件中的任意位置访问 `store` 变量 ✨
const store = getSysStat()
const scrollEvent = _ => {
  if (_.target.scrollTop > 0) {
   if (store.count) {
    store.toggle(false)
   }
  } else {
    if (!store.count) {
    store.toggle(true)
   }
  }
}
</script>

<template>
  <main class="main" @scroll="scrollEvent">
    <div class="window">
      <RemixPage></RemixPage>
    </div>
    <div class="window">2</div>
    <div class="window">3</div>
    <div class="window">4</div>
    <div class="window">5</div>
  </main>
</template>

<style scoped>
.main{
  scroll-snap-type: y mandatory;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow-x: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

/* 隐藏 Chrome、Safari 和 Opera 的滚动条 */
.main::-webkit-scrollbar {
  display: none;
}

.window{
  width: 100%;
  height: 100vh;
  left: 0;
  scroll-snap-align:start;
}
</style>