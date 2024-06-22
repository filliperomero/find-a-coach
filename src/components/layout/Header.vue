<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="flex w-full h-20 bg-indigo-900 justify-center items-center">
    <nav class="flex m-auto w-[90%] justify-between items-center">
      <h1 class="text-white"><RouterLink to="/">Find a Coach</RouterLink></h1>
      <ul class="flex gap-4 justify-center items-center text-gray-200">
        <li><RouterLink class="border px-6 py-3 border-transparent" to="/">Home</RouterLink></li>
        <li>
          <RouterLink class="border px-6 py-3 border-transparent" to="/coaches"
            >All Coaches</RouterLink
          >
        </li>
        <li>
          <RouterLink class="border px-6 py-3 border-transparent" to="/requests"
            >Requests</RouterLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
