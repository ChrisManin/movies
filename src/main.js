import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";


import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Home from "@/components/pages/Home";
import Movie from "@/components/pages/Movie";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: Home },
  { path: "/movie/:slug", component: Movie },
];

const router = new VueRouter({ mode: "history", routes });

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
