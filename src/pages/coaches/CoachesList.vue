<script setup lang="ts">
import CoachItem from '@/components/coaches/CoachItem.vue'
import { useCoachesStore } from '@/store'

const store = useCoachesStore()
</script>

<template>
  <section>FILTER</section>

  <section>
    <BaseCard>
      <div class="flex justify-between">
        <BaseButton variant="outline">Refresh</BaseButton>
        <BaseButton link to="/register">Register as a Coach</BaseButton>
      </div>
      <ul v-if="store.hasCoaches">
        <CoachItem 
          v-for="coach in store.getCoaches" 
          :key="coach.id" 
          :id="coach.id" 
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        />
      </ul>
      <h3 v-else>No Coaches found</h3>
    </BaseCard>
  </section>
</template>
