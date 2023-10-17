import { defineStore } from "pinia";
import router from "@/router/index";
import storage from "@/utils/storage";
export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    token: storage.get("token") || "",
    user: storage.get("user") || {},
  }),
  getters: {},
  actions: {
    setToken(val) {
      storage.set("token", val);
      this.token = val;
    },
    logout() {
      this.token = "";
      storage.remove("token");
      console.log("退出登录");
      router.push("/login");
    },
  },
});
