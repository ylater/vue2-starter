import { createPinia } from "pinia";
import { useAppStore } from "./modules/app.js";
import { useUserStore } from "./modules/user.js";
const pinia = createPinia();
export { useAppStore, useUserStore };
export default pinia;
