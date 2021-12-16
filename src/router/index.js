import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Maptest from "../views/Maptest.vue";

import DeliveryStatus from "../views/DeliveryStatus.vue";
import { authGuard } from "../auth/authGuard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/delivery",
    name: "Delivery",
    component: DeliveryStatus,
    beforeEnter: authGuard
  },
  {
    path: "/maptest",
    name: "Maptest",
    component: Maptest,
  },
  {
    path: "/order",
    name: "About",
    beforeEnter: authGuard,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    },
    
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
