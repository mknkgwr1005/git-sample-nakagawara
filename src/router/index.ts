import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/Exam4",
    name: "Exam4",
    component: () => import(`../views/Exam4.vue`),
  },
  {
    path: "/Exam3",
    name: "Exam3",
    component: () => import(`../views/Exam3.vue`),
  },
  {
    path: "/Exam2",
    name: "Exam2",
    component: () => import(`../views/Exam2.vue`),
  },
  {
    path: "/Exam1",
    name: "Exam1",
    component: () => import(`../views/Exam1.vue`),
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
