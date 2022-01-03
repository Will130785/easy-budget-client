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
import axios from 'axios'
export default {
  components: {
    TopBar,
    SideBar
  },
  mounted () {
    // Check if already logged in and set http defaults
    const token = localStorage.getItem('token')
    if (token) {
      axios.defaults.headers.common.Authorization = token
    }
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