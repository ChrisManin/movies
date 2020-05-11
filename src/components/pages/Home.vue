<template>
  <div>
    <h1>Liste des films</h1>
    <div class="row">
      <div v-for="movie in movies" :key="movie.slug" class="col-sm-6">
        <MovieItem :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script>
import MovieItem from "@/components/MovieItem";

export default {
  components: {
    MovieItem,
  },
  data() {
    return {
      movies: this.$store.state.movies.movies,
    };
  },
  head: function() {
    return {
      title: {
        inner: "Liste des films",
      },
      meta: [
        { name: "description", content: "Liste de bons films" },
        { name: "application-name", content: "meSupersFilms" },
        { name: "og-title", content: "Liste des films" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
