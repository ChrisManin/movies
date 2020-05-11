import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { store } from "./store";
import VueHead from "vue-head";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Home from "@/components/pages/Home";
import Movie from "@/components/pages/Movie";

Vue.use(VueHead);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: Home },
  { path: "/movie/:slug", component: Movie },
];

const router = new VueRouter({ routes });

new Vue({
  render: (h) => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
  store,
  router,
}).$mount("#app");
