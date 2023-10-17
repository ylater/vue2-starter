import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout/index.vue";
import Login from "@/views/login/index.vue";
//批量导入modules下的路由模块
const modules = import.meta.globEager("./modules/*.js");
let routerModules = [];
Object.keys(modules).forEach((key) => {
  routerModules = [...routerModules, ...modules[key].default];
});
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: Layout,
    name: "Layout",
    meta: {},
    redirect: "/home",
    children: [...routerModules],
  },
  {
    path: "/login",
    component: Login,
    name: "Login",
  },
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  next();
});

export default router;
