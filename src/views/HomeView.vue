<template>
  <div class="home-view">
    <div class="home-view__search-container">
      <div class="home-view__search-wrapper">
        <input v-model="query" @keyup.enter="goToSearch" class="home-view__search-input" type="text" placeholder="Search movie, TV shows or person">
          <button @click="goToSearch" class="home-view__search-button">Search</button>
      </div>
    </div>
    <router-view/>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      query: ''
    }
  },

  methods: {
    goToSearch() {
      this.$router.push({ name: 'search', params: { id: this.query || 'none' } });
    }
  }
}
</script>

<style scoped lang="scss">
  .home-view__search-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .home-view__search-wrapper {
    display: flex;
    justify-content: center;
    width: 100vw;
  }

  .home-view__search-input {
    width: 70%;
    padding: 0.5rem 1rem;

    font-size: 2rem;

    border: none;
    border-radius: 10px 0 0 10px;
    outline: none;
  }
  
  .home-view__search-button {
    min-height: 100%;
    padding: 0 1rem;

    background-color: #E84545;

    color: #ffffff;
    font-size: 1.5rem;

    border-radius: 0 10px 10px 0;
    cursor: pointer;

    &:hover {
      background-color: #cf4141;
    }
  }
</style>