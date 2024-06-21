<script setup>
import { useCoachesStore } from '@/store'
import { RouterLink } from 'vue-router'

const store = useCoachesStore()
</script>

<template>
  <section>FILTER</section>

  <section>
    <div>
      <button>Refresh</button>
      <RouterLink to="/register">Register as a Coach</RouterLink>
    </div>
    <ul v-if="store.hasCoaches">
      List of Coaches
      <li v-for="coach in store.getCoaches" :key="coach.id">
        {{ coach.firstName + ' ' + coach.lastName }}
      </li>
    </ul>
    <h3 v-else>No Coaches found</h3>
  </section>
</template>
