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
import movieDB from "@/movies.db";
import MovieItem from "@/components/MovieItem";

export default {
  components: {
    MovieItem
  },
  data() {
    return {
      movies: movieDB
    };
  }
};
</script>

<style lang="scss" scoped></style>
