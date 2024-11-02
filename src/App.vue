<script setup lang="ts">
import { RouterView } from 'vue-router'
import DockMenu from './components/DockMenu.vue'
import { onMounted } from 'vue';
import axios from 'axios';
import { useGameStore } from './stores/game';


onMounted(async () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000'
  useGameStore().addGames((await axios.get(`${backendUrl}/game`)).data)
});

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
