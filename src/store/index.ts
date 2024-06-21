import { defineStore } from 'pinia'

import coachesModule from './modules/coaches'

export const useCoachesStore = defineStore('coaches', {
  ...coachesModule
})
