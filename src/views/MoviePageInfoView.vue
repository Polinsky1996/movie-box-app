<template>
  <section class="movie-page">
      <loader-block :hidden="!readyData"></loader-block>
      <gradient-frame :id="details.id">
        <div class="movie-page__wrapper">
          <section class="movie-page__image">
            <poster-block
              :id="details.id" 
              :resolution="500">
            </poster-block>
          </section>
          <section class="movie-page__desription">
            <h1 class="movie-page__title">{{ details.original_title }}<span>{{ releaseYear }}</span></h1>
            <div class="movie-page__subtitle-block">
              <p class="movie-page__data-realese">{{ details.release_date }}</p>
              <p  class="movie-page__genres">
                <span 
                  v-for="genre in details.genres" 
                  :key="genre.id"> {{ genre.name }} </span>
              </p>
              <p class="movie-page__runtime">{{ getValidTime }}</p>
            </div>
            <div class="movie-page__overview">
              <p class="movie-page__tagline">{{ details.tagline }}</p>
              <span></span>
              <p class="movie-page__review">{{ details.overview }}</p>
            </div>
          </section>
        </div>
      </gradient-frame>
  </section>
</template>

<script>
import { getMovieDetails } from '../scripts/api'
import PosterBlock from '../components/PosterBlock.vue'
import GradientFrame from '../components/GradientFrame.vue'
import LoaderBlock from "../components/LoaderBlock.vue"

export default {
  components: { 
    PosterBlock,
    GradientFrame,
    LoaderBlock
  },

  data() {
    return {
      details: {},
      releaseYear: '',
      readyData: false,
    }
  },

  methods: {
    async getDetails(id) {
      this.readyData = false;

      await getMovieDetails(id)
        .then( response => this.details = response)

      this.readyData = true;
    }
  },

  watch: {
    details() {
      this.releaseYear = this.getReleaseYear;
    }
  },

  computed: {
    getValidTime() {
      if (this.details.runtime < 60) {
        return `${this.details.runtime} min`
      }

      return `${Math.floor(this.details.runtime / 60)} : ${this.details.runtime % 60}`
    },

    getReleaseYear() {
      return this.details.release_date.split('-')[0];
    }
  },

  created() {
    this.getDetails(this.$route.params.id);
  }
}
</script>

<style scoped lang="scss">
.movie-page__wrapper {
  display: flex;
  padding: 20px;
}

.movie-page__subtitle-block {
  display: flex;
}

.movie-page__title {
  
}
</style>