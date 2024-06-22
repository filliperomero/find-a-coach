<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { useCoachesStore } from '@/store'

const route = useRoute()
const store = useCoachesStore()
const props = defineProps<{ id: string }>()

const selectedCoach = store.getCoaches.find((coach) => coach.id === props.id) ?? {}
const fullName = computed(
  () => (selectedCoach.firstName ?? '') + ' ' + (selectedCoach.lastName ?? '')
)
const contactLink = computed(() => `${route.path}/${props.id}/contact`)
</script>

<template>
  <section>
    <BaseCard>
      <h2>{{ fullName }}</h2>
      <h3>${{ selectedCoach.rate }}/hour</h3>
    </BaseCard>
  </section>

  <section>
    <BaseCard>
      <header class="space-y-4">
        <h2>Interested? Reach out now!</h2>
        <BaseButton link :to="contactLink">Contact</BaseButton>
      </header>
      <RouterView />
    </BaseCard>
  </section>

  <section>
    <BaseCard>
      <div class="flex gap-2">
        <Badge v-for="area in selectedCoach.areas" :key="area">{{ area.toUpperCase() }}</Badge>
      </div>
      <p>{{ selectedCoach.description }}</p>
    </BaseCard>
  </section>
</template>
