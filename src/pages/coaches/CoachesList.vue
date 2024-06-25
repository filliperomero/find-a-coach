<script setup lang="ts">
import CoachItem from '@/components/coaches/CoachItem.vue'
import CoachFilter from '@/components/coaches/CoachFilter.vue'
import { useCoachesStore } from '@/store'
import { computed, reactive } from 'vue'

const store = useCoachesStore()
let activeFilters = reactive({
  frontend: true,
  backend: true,
  career: true
})

function setFilters(filters) {
  Object.assign(activeFilters, filters)
}

const filteredCoaches = computed(() => {
  const coaches = store.getCoaches
  const filteredCoaches = coaches.filter((coach) => {
    if (activeFilters.frontend && coach.areas.includes('frontend')) return true
    else if (activeFilters.backend && coach.areas.includes('backend')) return true
    else if (activeFilters.career && coach.areas.includes('career')) return true

    return false
  })

  return filteredCoaches
})
</script>

<template>
  <section>
    <CoachFilter @change-filter="setFilters" />
  </section>

  <section>
    <BaseCard>
      <div class="flex justify-between">
        <BaseButton variant="outline">Refresh</BaseButton>
        <BaseButton link to="/register">Register as a Coach</BaseButton>
      </div>
      <ul v-if="store.hasCoaches">
        <CoachItem
          v-for="coach in filteredCoaches"
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
