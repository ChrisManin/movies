<template>
  <div>
    <h1>{{ movie.name }}</h1>
    <div class="row">
      <div class="col-sm-4">
        <img :src="movie.image" :alt="'poster' + movie.name" class="img-fluid">
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
    const slug = this.$route.params.slug;
    this.movie = this.$store.getters.getMovie(slug);
  }
};
</script>

<style lang="scss" scoped></style>
