<template>
    <div class="results-list">
        <movie-card 
                v-for="(movie, idx) in filterTypeResults" 
                :key="idx" 
                :movieDetails="movie">
        </movie-card> 
    </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";

export default {
    components: {
        MovieCard
    },

    props: {
        list: {
            type: Array,
            default() {
                return []
            }
        }
    },

    computed: {
        filterTypeResults() {
            return this.list.filter((item) => {
                if (item.media_type === "movie") {
                    return item;
                }
            });
        }
    }
}
</script>

<style>
</style>