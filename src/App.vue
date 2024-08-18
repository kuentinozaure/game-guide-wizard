<script setup lang="ts">
import { RouterView } from 'vue-router'
import DockMenu from './components/DockMenu.vue'
import { onMounted } from 'vue';
import axios from 'axios';
import { useGameStore } from './stores/game';

onMounted(async () => {
  useGameStore().addGames((await axios.get('http://localhost:3000/game')).data)
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
