<script setup lang="ts">
import { reactive } from 'vue'
const filters = reactive({
  frontend: true,
  backend: true,
  career: true
})

const emit = defineEmits({
  'change-filter': ({ filters }) => filters
})

function setFilter(event) {
  const inputId = event.target.id
  const isActive = event.target.checked

  filters[inputId] = isActive

  emit('change-filter', filters)
}
</script>

<template>
  <BaseCard>
    <h2>Find Your Coach</h2>
    <!-- <div class="flex space-x-2 items-center">
      <Checkbox id="frontend" @change="setFilter" @update:checked="setFilter" />
      <label for="frontend">Frontend</label>
    </div> -->
    <div class="flex flex-col gap-2">
      <span class="flex items-center gap-2">
        <input id="frontend" type="checkbox" :checked="filters.frontend" @change="setFilter" />
        <label for="frontend">Frontend</label>
      </span>
      <!-- <div class="flex space-x-2 items-center">
        <Checkbox id="backend" @change="setFilter" />
        <label for="backend">Backend</label>
      </div> -->
      <span class="flex items-center gap-2">
        <input id="backend" type="checkbox" :checked="filters.backend" @change="setFilter" />
        <label for="backend">Backend</label>
      </span>
      <!-- <div class="flex space-x-2 items-center">
        <Checkbox id="career" @change="setFilter" />
        <label for="career">Career</label>
      </div> -->
      <spa class="flex items-center gap-2">
        <input id="career" type="checkbox" :checked="filters.career" @change="setFilter" />
        <label for="career">Career</label>
      </spa>
    </div>
  </BaseCard>
</template>
