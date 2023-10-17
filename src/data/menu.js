export const menus = [
  {
    path: "/home",
    name: "Home",
    meta: {
      title: "首页",
      icon: "el-icon-s-home",
    },
    children: [
      {
        path: "/home/ui",
        name: "HomeUi",
        meta: {
          title: "UI设计规范",
        },
      },
      {
        path: "/home/dashboard",
        name: "HomeDashboard",
        meta: {
          title: "Dashboard",
        },
      },
    ],
  },
  {
    path: "/table",
    name: "Table",
    meta: {
      title: "表格",
      icon: "el-icon-s-grid",
    },
  },
  {
    path: "/form",
    name: "Form",
    meta: {
      title: "表单",
      icon: "el-icon-s-order",
    },
  },
];
