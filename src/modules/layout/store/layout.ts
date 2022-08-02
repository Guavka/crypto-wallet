import type { LayoutState } from "./types/layoutState";

const layoutState: LayoutState = {
  headerTitle: 'Dashboard',
  mini: false,
  drawer: true
}

export const useLayoutStore = defineStore('layout', {
  state: () => layoutState,
  getters: {},
  actions: {
    toggleMini() {
      this.mini = !this.mini
    },
    toggleDrawer() {
      this.drawer = !this.drawer
    },
  },
});