<template>
  <nav class="topbar">
    <button class="sidebar-toggle" @click="toggleSidebar">X</button>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['sidebarStatusAction']),
    toggleSidebar () {
      this.sidebarStatusAction()
    }
  }
}
</script>

<style scoped>
.topbar {
  height: 7.5rem;
  background-color: #000;
}
.sidebar-toggle {
  z-index: 10;
  color: #fff;
}
</style>