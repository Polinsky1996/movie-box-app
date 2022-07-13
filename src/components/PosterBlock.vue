<template>
  <div class="movie-poster">
        <img 
            class="movie-poster__poster-path" 
            v-if="posterURL" 
            :src="posterURL" 
            alt="poster_path">            
        <img 
            v-else 
            class="movie-poster__poster-null"
            src="@/assets/svg/no-movie-poster.svg" 
            alt="poster_null">
    </div>
</template>

<script>
import { getImages } from '../scripts/api'

export default {
    props: {
        path: {type: String, default: ''},
        resolution: {type: Number, default: 500}
    },

    data() {
        return {
            posterURL: ''
        }
    },

    methods: {
        async getPoster() {
            this.posterURL = '';
            
            if (this.path) {
                await getImages(this.path, this.resolution)
                    .then( poster => this.posterURL = poster);
            }
        } 
    },

    watch: {
        path() {
            this.getPoster();
        }
    },

    created() {
        this.getPoster();
    },
}
</script>

<style scoped lang="scss">
.movie-poster {
    min-height: 100%;
    display: flex;
    justify-content: center;
    background-color: grey;
}

.movie-poster__poster-path{
    width: 100%;
}

.movie-poster__poster-null {
    width: 70%;
}
</style>