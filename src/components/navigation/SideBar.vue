<template>
  <nav class="sidebar" :class="{ 'sidebar-open': getSidebarStatus }">

  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getSidebarStatus'])
  }
}
</script>

<style scoped>
.sidebar {
  position: absolute;
  width: 40rem;
  height: 100%;
  background-color: #0076b6;
  left: -100%;
  transition: all .3s ease
}
.sidebar-open {
  left: 0;
}
</style>