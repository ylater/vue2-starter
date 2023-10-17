const Table = () => import("@/views/table/index.vue");
const TableDetail = () => import("@/views/table/detail.vue");
export default [
  {
    path: "/table",
    name: "Table",
    component: Table,
    meta: {
      title: "表格",
    },
  },
  {
    path: "/table/detail",
    name: "TableDetail",
    component: TableDetail,
    meta: {
      title: "表格详情",
    },
  },
];
