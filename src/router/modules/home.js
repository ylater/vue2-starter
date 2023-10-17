import Layout from "@/layout/layout.vue";
const HomeUi = () => import("@/views/home/index.vue");
const Dashboard = () => import("@/views/home/dashboard.vue");
export default [
  {
    path: "/home",
    name: "Home",
    component: Layout,
    meta: {
      title: "首页",
    },
    redirect: "/home/dashboard",
    children: [
      {
        path: "/home/ui",
        name: "HomeUi",
        component: HomeUi,
        meta: {
          title: "UI设计规范",
        },
      },
      {
        path: "/home/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: {
          title: "Dashboard",
        },
      },
    ],
  },
];
