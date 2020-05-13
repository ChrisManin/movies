import Vue from "vue";
import Vuex from "vuex";
import movies from "@/store/modules/movies";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    movies,
  },
});
