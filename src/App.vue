<template>
  <TopBar />
  <div class="main-view">
    <SideBar />
    <router-view></router-view>
  </div>
</template>

<script>
import TopBar from './components/navigation/TopBar.vue'
import SideBar from './components/navigation/SideBar.vue'
export default {
  components: {
    TopBar,
    SideBar
  }
}
</script>

<style>
/* GLOBAL STYLES */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
  font-family: sans-serif;
}
.main-view {
  height: 80vh;
  display: flex;
}
</style>