<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>Coach Details</div>
  <RouterView />
  <RouterLink to="/coaches/1/contact">Contact</RouterLink>
</template>
