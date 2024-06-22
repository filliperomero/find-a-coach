<script setup lang="ts">
import { useRoute } from 'vue-router'
import { defineProps, computed } from 'vue'

const route = useRoute()
const props = defineProps<{ 
  id: string,
  firstName: string,
  lastName: string,
  rate: number,
  areas: string[]
}>()

const fullName = computed(() => props.firstName + ' ' + props.lastName)
const coachContactLink = computed(() => `${route.path}/${props.id}/contact`)
const coachDetailsLink = computed(() => `${route.path}/${props.id}`)
</script>

<template>
  <li class="flex flex-col my-4 border border-gray-500 rounded-xl p-4">
    <h3 class="text-2xl my-2 font-bold">{{ fullName }}</h3>
    <h4 class="my-2">${{ rate }}/hour</h4>
    <div class="flex gap-2">
      <Badge v-for="area in areas" :key="area">{{ area.toUpperCase() }}</Badge>
    </div>
    <div class="flex justify-end gap-6">
      <BaseButton variant="outline" link :to="coachContactLink">Contact</BaseButton>
      <BaseButton link :to="coachDetailsLink">View Details</BaseButton>
    </div>
  </li>
</template>