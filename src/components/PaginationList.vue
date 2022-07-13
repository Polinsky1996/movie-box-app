<template>
  <div class="pagination">
    <div class="pagination__container">
      <button class="pagination__btn" @click="prevPage" :disabled="pageNumber == 0">{{ '<' }}</button>
      <div class="pagination_links">
          <button 
            v-for="(page, idx) in paginatedData" 
            @click="selectPage"
            :key="idx"
            :value="page"
            :class="{focus: page == currentPage}"
            class="pagination__link pagination__btn"
            >
            {{ page }}</button>
      </div>
      <button class="pagination__btn" @click="nextPage" :disabled="pageNumber == pageCount">{{ '>' }}</button>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        totalPages: {
            type: Number,
            default: 1
        }
    },

    emits: {
        selectedPage: null
    },

    data() {
        return {
            viewPages: 5,
            listPages: [],
            pageNumber: 0,
            currentPage: 1
        }
    },

    methods: {
        selectPage(e) {
            const page = e.target.value;
            this.currentPage = page;
            this.$emit('selectedPage', page)
        },

        nextPage() {
            this.pageNumber++;
        },

        prevPage() {
            this.pageNumber--;
        },

        getListPages() {
            this.listPages = Array.from({ length: this.totalPages }, (v, k) => k + 1);
        }
    },

    computed: {
        pageCount() {
            return Math.ceil(this.totalPages / this.viewPages) - 1;
        },

        paginatedData(){
            const start = this.pageNumber * this.viewPages,
                  end = start + this.viewPages;

            return this.listPages.slice(start, end);
        },
    },

    watch: {
        totalPages() {
            this.getListPages();
        }
    }
}
</script>

<style scoped lang="scss">
    .pagination {
        display: inline-block;
    }

    .pagination__container {
        display: flex;
    }

    .pagination__btn {
        position: relative;

        margin: 0 15px;

        font-size: 1.2rem;
        color: $main-font-color;
    }

    .pagination__btn::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;

        display: block;
        width: 30px;
        height: 30px;

        background-color: $secondary-background-color;

        border-radius: 50%;
    }

    button {
        margin-right: 10px;
        cursor: pointer;
        color: black;
    }

    button:hover {
        color: $second-font-color;
    }

    .focus {
        color: $second-font-color;
    }
</style>