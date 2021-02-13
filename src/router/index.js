import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About"),
  },
  {
    path: "/trivia",
    name: "Trivia",
    component: () => import(/* webpackChunkName: "trivia" */ "../views/Trivia"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import(/* webpackChunkName: "admin" */ "../views/Admin"),
  },
  {
    // catch all 404
    path: "/:pathMatch(.*)*",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "../views/NotFound"),
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: "active",
  routes,
});

export default router;
