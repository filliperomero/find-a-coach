<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/layout/Header.vue'
</script>

<template>
  <div class="dark:bg-slate-800 h-screen dark:text-gray-200">
    <Header />

    <main class="flex flex-col bg-slate-800">
      <RouterView />
    </main>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
</style>
