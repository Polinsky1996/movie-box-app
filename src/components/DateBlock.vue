<template>
  <div class="date-block"> 
    <p class="date-block__content">{{ parsingDate }}</p>
</div>
</template>

<script>
export default {
    props: {
        date: {
            type: String,
            default: ''
        }
    },

    computed: {
        parsingDate() {
            return this.date.split('-').reverse().join('.');
        }
    }
}
</script>

<style>
.date-block__content {
    margin: 0;
}
</style>