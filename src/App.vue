<template>
  <div>
    <router-link to="/"></router-link>
    <router-view/>
  </div>  
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('getGenres');
    }
  }
</script>

<style lang="scss">
* {
  font-family: Roboto, sans-serif;
}

body {
  background-color: $main-background-color;
}
</style>
