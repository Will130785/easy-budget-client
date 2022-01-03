<template>
  <nav class="topbar">
    <button v-if="isLoggedIn" class="sidebar-toggle" @click="toggleSidebar">X</button>
    <button v-if="isLoggedIn" class="sidebar-toggle" @click="handleLogout">Logout</button>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    ...mapActions(['sidebarStatusAction', 'logoutAction']),
    toggleSidebar () {
      this.sidebarStatusAction()
    },
    handleLogout () {
      this.logoutAction()
    }
  }
}
</script>

<style scoped>
.topbar {
  height: 5rem;
  background-color: #0076b6;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sidebar-toggle {
  z-index: 10;
  color: #fff;
}
</style>