import mutations from './mutations'
import getters from './getters'
import actions from './actions'

interface StateProps {
  coaches: Array<{
    id: string
    firstName: string
    lastName: string
    areas: string[]
    description: string
    hourlyRate: number
  }>
}

export default {
  state: () => ({
    coaches: [
      {
        id: '65ec980e-65fa-4f89-a226-44b190890fa1',
        firstName: 'Fillipe',
        lastName: 'Romero',
        areas: ['frontend', 'backend', 'career'],
        description:
          "I'm Fillipe Romero and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
        hourlyRate: 30
      },
      {
        id: '3a23d3ee-2882-462f-a46e-c3161814c12e',
        firstName: 'John',
        lastName: 'Doe',
        areas: ['frontend', 'career'],
        description:
          'I am John Doe and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
        hourlyRate: 30
      }
    ]
  }),
  mutations,
  getters,
  actions
}
