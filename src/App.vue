<script setup>
import { RouterView } from 'vue-router'
import { getSysStat } from '@/stores/systemStat'
const store = getSysStat()
</script>

<template>
  <!-- <div class="topbar trans" v-if="store.count">
    <div>@Illencx</div>
  </div>
  <div class="topbar normal" v-if="!store.count">
  </div> -->
  <RouterView />
</template>

<style scoped>
@font-face {
  font-family: 'nerd';
  src: url('@/assets/nerd.ttf');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: '3270';
  src: url('@/assets/3270.ttf');
  font-weight: normal;
  font-style: normal;
}
*{
  font-family: nerd;
  padding: 0;
  margin: 0;
}

.topbar{
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: rgb(255, 0, 0);
  height: 10vh;
  width: 100vw;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
  .trans{
    background-color: rgba(27, 26, 26, 0.485);
  }
  .normal{
    background-color: white;
  }
}
</style>
