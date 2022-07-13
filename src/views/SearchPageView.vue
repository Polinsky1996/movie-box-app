<template>
  <div class="search-page-view">
    <loader-test></loader-test>
    <container-block>
      <div class="search-page-view__wrapper-card">
        <results-list :list="result.results" class="search-page-view__result-list"></results-list>
        <pagination-list 
          @selected-page="getMovieList"
          :totalPages="totalPages"
          class="search-page-view__pagination">
        </pagination-list>
      </div>
    </container-block>
  </div>
</template>

<script>
import { getMultiResult } from "../scripts/api";
import { loadingStatuses } from "../scripts/loadingStatus"
import ContainerBlock from '../components/ContainerBlock.vue';
import PaginationList from "../components/PaginationList.vue";
import LoaderTest from "../components/LoaderTest.vue"
import ResultsList from "../components/ResultsList.vue"

export default {
  components: {
    PaginationList,
    ContainerBlock,
    LoaderTest,
    ResultsList
  },

  data() {
    return {
      result: {},
      page: 1,
      totalPages: 1,
      totalResults: 0
    };
  },

  methods: {
    async getMovieList(page) {
      this.$store.commit('SET_LOADING_STATUS', loadingStatuses.Loading);
      
      window.scrollTo(0, 0);

      await getMultiResult(this.$route.params.id, page)
        .then(response => {
            this.result = response;

            this.$store.commit('SET_LOADING_STATUS', loadingStatuses.Ready);
        })
        .catch( err => {
          this.$store.dispatch('setError', err.message);
        })
    },
  },

  created() {
    this.getMovieList(this.page);

    // searchInCategory('movie', this.$route.params.id, 1);
    // searchInCategory('tv', this.$route.params.id, 1);
  }
};
</script>

<style scoped lang="scss">
  .search-page-view__container {
    margin: 0 auto;
    padding: 0 20px;
  }

  .search-page-view__result-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    margin: 0 auto;
  }

  .search-page-view__pagination {
    margin: 0 auto;
  }
</style>