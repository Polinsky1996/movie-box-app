<template>
    <router-link :to="{
        name: 'movie-page-info',
        params: {
            name: movieDetails.title,
            id: movieDetails.id
        }
    }">
        <div class="movie-card">
            <div class="movie-card__container">
                <poster-block
                    class="movie-card__poster" 
                    :path="movieDetails.poster_path" 
                    :resolution="300">
                </poster-block>
                <div class="movie-card__header">
                    <h3 class="movie-card__title">{{ movieDetails.title }}</h3>
                    <div class="movie-card__subtitle">
                        <sm-font-block>
                            <date-block class="movie-card__release-date" :date="movieDetails.release_date"></date-block>
                        </sm-font-block>
                    </div>
                    <sm-font-block class="movie-card__overview">{{ movieDetails.overview }}</sm-font-block>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
import PosterBlock from "./PosterBlock.vue"
import DateBlock from "./DateBlock.vue"
import smFontBlock from "./font_blocks/smFontBlock.vue"

export default {
    components: {
        PosterBlock,
        DateBlock,
        smFontBlock
    },

    props: {
        movieDetails: {
            type: Object,
            require: true
        }
    }
}
</script>

<style scoped lang="scss">
.movie-card__container {
    display: flex;
    overflow: hidden;

    color: $main-font-color;
    border-radius: $item-radius;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
}

.movie-card__poster {
    min-width: 94px;
    width: 94px;
    height: 141px;
}

.movie-card__header {
    padding: 1rem;
}

.movie-card__title {
    font-size: 1.2em;
    line-height: 1.2em;
    margin-bottom: 0;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
}

.movie-card__subtitle {
    margin-bottom: 1rem;

    color: $second-font-color;
}

.movie-card__overview {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>