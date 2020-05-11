import moviesDB from "@/movies.db.js";
export default {
  state: {
    movies: [],
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
    updateMovie(state, movie) {
      state.movies = state.movies.map((movieElement) => {
        if (movieElement.slug === movie.slug) {
          movieElement = movie;
        }
        return movieElement;
      });
    },
  },
  actions: {
    fetchMovies({ commit }) {
      const movies = moviesDB;
      commit("setMovies", movies);
    },

    updateMovie({ commit }, movie) {
      commit("updateMovie", movie);
    },
  },
};
