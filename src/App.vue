<script setup>
import { RouterView } from 'vue-router'

</script>

<template>
  <RouterView />
</template>

<script>
  export default {
    mounted() {
    if (
      window.location.pathname === '/' ||
      window.location.pathname === '/login' ||
      window.location.pathname === '/register' ||
      window.location.pathname === '/confirm-email' ||
      window.location.pathname === '/forget-password' ||
      window.location.pathname === '/resend-code' ||
      window.location.pathname === '/confirm-forget-password'
    ) {
      if (localStorage.getItem('isLoggedIn')) {
        this.$store.dispatch('getUserProfile')
      }
    }

    if (
      window.location.pathname !== '/' ||
      window.location.pathname !== '/login' ||
      window.location.pathname !== '/register' ||
      window.location.pathname !== '/confirm-email' ||
      window.location.pathname !== '/forget-password' ||
      window.location.pathname !== '/resend-code' ||
      window.location.pathname !== '/confirm-forget-password'
    ) {
      if (localStorage.getItem('isLoggedIn')) {
        this.$store.dispatch('getUserProfile')
      }
    }
  }
  }
</script>

<style lang="scss" scoped>

</style>