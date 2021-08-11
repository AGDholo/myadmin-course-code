import Vue from "vue";
import VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/Home"),
    data: { text: "主页", icon: "mdi-home" }
  },
  {
    path: "/document",
    component: () => import("../views/Document"),
    data: { text: "文档", icon: "mdi-file-document" }
  }
];

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

Vue.use(VueRouter);

export default router;
