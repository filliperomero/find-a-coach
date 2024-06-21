<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

{ path: '/', redirect: '/coaches' }, { path: '/coaches', component: CoachesList }, { path:
'/register', component: CoachRegistration }, { path: '/coaches/:id', component: CoacheDetails,
children: [{ path: 'contact', component: ContactCoach }] }, { path: '/requests', component:
RequestsReceived }, { path: '/:notFound(.*)', component: NotFound }

<template>
  <div class="dark:bg-slate-800 h-screen dark:text-gray-200">
    <header>
      <nav class="flex gap-4">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/coaches">Coaches List</RouterLink>
        <RouterLink to="/register">Coach Registration</RouterLink>
        <RouterLink to="/requests">Requests Received</RouterLink>
      </nav>
    </header>

    <main class="flex flex-col bg-slate-800">
      <RouterView />
    </main>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
</style>
