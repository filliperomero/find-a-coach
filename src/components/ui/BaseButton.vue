<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { type HTMLAttributes } from 'vue'
import { type ButtonVariants, buttonVariants } from './BaseButton'
import { cn } from '@/lib/utils'

interface Props {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  link?: boolean
  to?: string
}

const props = withDefaults(defineProps<Props>(), {
  to: '/'
})
</script>

<template>
  <button v-if="!link" :class="cn(buttonVariants({ variant, size }), props.class)">
    <slot />
  </button>

  <RouterLink v-else :to="to" :class="cn(buttonVariants({ variant, size }), props.class)">
    <slot />
  </RouterLink>
</template>
