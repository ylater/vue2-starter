const Form = () => import("@/views/form/index.vue");
export default [
  {
    path: "/form",
    name: "Form",
    component: Form,
    meta: {
      title: "表单",
    },
  },
];
