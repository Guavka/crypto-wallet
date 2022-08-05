import type { LayoutState } from "./types/layoutState";

const layoutState: LayoutState = {
  drawer: true
}

export const useLayoutStore = defineStore('layout', {
  state: () => layoutState,
  getters: {},
  actions: {
    toggleDrawer() {
      this.drawer = !this.drawer
    },
  },
});