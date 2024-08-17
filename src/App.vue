<script setup lang="ts">
import { RouterView } from 'vue-router'
import DockMenu from './components/DockMenu.vue'
</script>

<template>
  <RouterView />
  <DockMenu class="dock-menu" />
</template>

<style scoped>
.dock-menu {
  position: fixed;
  bottom: 0;
}
</style>
