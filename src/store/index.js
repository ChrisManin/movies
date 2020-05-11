import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import moviesDB from "@/movies.db.js";

export const store = new Vuex.Store({
    state: {
        movies: [],
    },
    mutations: {
        setMovies(state, movies) {
            state.movies = movies;
        },
    },
    actions: {
        fetchMovies({ commit }) {
            const movies = moviesDB;
            commit('setMovies', movies);
        },
    },
});