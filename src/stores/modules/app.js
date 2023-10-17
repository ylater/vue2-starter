import { defineStore } from "pinia";

export const useAppStore = defineStore({
  id: "app",
  state: () => ({
    collapsed: false,
  }),
  getters: {
    getCollapse: (state) => state.collapsed,
  },
  actions: {
    toggleCollapse() {
      this.collapsed = !this.collapsed;
    },
  },
});
