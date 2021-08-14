import Vue from "vue";
import VueRouter from "vue-router";
import MLayout from "@/layout/MLayout";

const routes = [
  {
    path: "",
    component: MLayout,
    children: [
      {
        component: () => import("../views/Home"),
        path: ""
      }
    ],
    data: { text: "主页", icon: "mdi-home" }
  },
  {
    path: "/document",
    component: MLayout,
    children: [
      {
        component: () => import("../views/Document"),
        path: "",
        name: "文档1"
      },
      {
        component: () => import("../views/Document"),
        path: "path2",
        name: "文档2"
      }
    ],
    data: { text: "文档", icon: "mdi-file-document", open: true }
  }
];

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

Vue.use(VueRouter);

export default router;
