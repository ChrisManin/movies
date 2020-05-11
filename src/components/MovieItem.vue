<template>
  <div>
    <b-card :img-src="movie.image" :img-alt="'poster ' + movie.name" img-top>
      <b-card-text>
        <h2>{{ movie.name }}</h2>
        <b-button :to="'/movie/' + movie.slug" variant="primary"
          >Plus d'infos</b-button
        >
        <Like :movie="movie" />
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import Like from "@/components/Like";
export default {
  components: {
    Like,
  },
  props: {
    movie: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin: 2em;
}
</style>
