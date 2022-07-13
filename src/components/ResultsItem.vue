<template>
    <router-link :to="{
        name: 'movie-page-info',
        params: {
            name: movieDetails.title,
            id: movieDetails.id
        }
    }">
        <div class="results-item">
            <div class="results-item__container">
                <slot></slot>
                <div class="results-item__header">
                    <h3 class="results-item__title">{{ movieDetails.title }}</h3>
                    <div class="results-item__subtitle">
                        <sm-font-block>
                            <date-block class="results-item__release-date" :date="movieDetails.release_date"></date-block>
                        </sm-font-block>
                    </div>
                    <sm-font-block class="results-item__overview">{{ movieDetails.overview }}</sm-font-block>
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
.results-item__container {
    display: flex;
    overflow: hidden;

    color: $main-font-color;
    border-radius: $item-radius;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
}

.results-item__poster {
    min-width: 94px;
    width: 94px;
    height: 141px;
}

.results-item__header {
    padding: 1rem;
}

.results-item__title {
    font-size: 1.2em;
    line-height: 1.2em;
    margin-bottom: 0;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
}

.results-item__subtitle {
    margin-bottom: 1rem;

    color: $second-font-color;
}

.results-item__overview {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>