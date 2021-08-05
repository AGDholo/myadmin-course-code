import Vue from "vue";
import VueRouter from "vue-router";

const routes = [
  { path: "/", component: () => import("../views/Home") },
  { path: "/document", component: () => import("../views/Document") }
];

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

Vue.use(VueRouter);

export default router;
