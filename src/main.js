import Vue from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";
import ElementUI from "element-ui";
import "./styles/element-variables.scss";
import App from "./App.vue";
import "./styles/style.less";
import router from "./router";
import "./mock/index.js";
import Api from "./api/index.js";
import Msg from "./utils/msg.js";
Vue.prototype.$api = Api;
Vue.prototype.$msg = Msg;
Vue.use(PiniaVuePlugin);
Vue.use(ElementUI, { size: "default" });
new Vue({
  pinia: createPinia(),
  router,
  render: (h) => h(App),
}).$mount("#app");
