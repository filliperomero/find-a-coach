export default {
  getCoaches: (state: any) => {
    return state.coaches
  },
  hasCoaches(state: any) {
    return state.coaches?.length > 0
  }
}
