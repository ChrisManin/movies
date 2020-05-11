<template>
  <div>
    <h1>{{ movie.name }}</h1>
    <div class="row">
      <div class="col-sm-4">
        <img
          :src="movie.image"
          :alt="'poster ' + movie.name"
          class="img-fluid"
        />
      </div>
      <div class="col-sm-8">
        <p>{{ movie.year }} - {{ movie.rating }}%</p>
        <p>{{ movie.resume }}</p>

        <p><Like :movie="movie" /></p>
        <p><b-button to="/" variant="primary">Retour</b-button></p>
      </div>
    </div>
  </div>
</template>

<script>
import Like from "@/components/Like";

export default {
  components: {
    Like,
  },
  data() {
    return {
      movie: null,
    };
  },
  created() {
    const movies = this.$store.state.movies.movies;
    const slug = this.$route.params.slug;
    this.movie = movies.find((movie) => movie.slug === slug);
  },
  head: function() {
    return {
      title: {
        inner: this.movie.name,
      },
      meta: [
        { name: "description", content: this.movie.resume },
        { name: "application-name", content: "meSupersFilms" },
        { name: "og-title", content: this.movie.name },
        { name: "og-image", content: this.movie.image },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
