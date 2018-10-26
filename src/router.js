import Vue from "vue";
import Router from "vue-router";
import welcome from "./views/welcome.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "welcome",
      component: welcome
    },
    {
      path: "/index",
      name: "index",
      component: () => import("./views/index.vue")
    }
  ]
});
