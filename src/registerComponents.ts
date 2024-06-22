import { type App } from 'vue'
import BaseCard from './components/ui/BaseCard.vue'
import BaseButton from './components/ui/BaseButton.vue'
import Badge from './components/ui/Badge/Badge.vue'

export const registerComponents = (app: App) => {
  app.component('BaseCard', BaseCard)
  app.component('BaseButton', BaseButton)
  app.component('Badge', Badge)
}