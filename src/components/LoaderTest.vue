<template>
    <div v-if="getStatus != $options.loadingStatuses.Ready" class="loading-block">
        <div v-if="getStatus === $options.loadingStatuses.Loading" class="loading-block__loading-process">
          <div class="lds-dual-ring"></div>
        </div>
        <div v-if="getStatus === $options.loadingStatuses.Error" class="loading-block__error">
          <img src="@/assets/svg/error-svgrepo-com.svg" alt="error_icon" class="loading-block__error-icon">
          <p class="loading-block__error-text">{{ getErrorText }}</p>
          <button @click="backPage" class="loading-block__btn">Come back previous page</button>
        </div>
    </div>
</template>

<script>
import { loadingStatuses } from "../scripts/loadingStatus"

export default {
    computed: {
      getStatus() {
        return this.$store.state.loaderModule.loadingStatus;
      },

      getErrorText() {
        return this.$store.state.loaderModule.errorMessage;
      }
    },

    methods: {
      backPage() {
        this.$router.go(-1)
      }
    },

    loadingStatuses
}
</script>

<style scoped lang="scss">
 .loading-block {
    position: sticky;
    top: 0;
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: $main-color;

    color: #ffffff;
    text-align: center;
    font-size: 1rem;
  }

  .loading-block__error {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .loading-block__error-icon {
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
  }

  .loading-block__btn {
    padding: 10px 15px;

    color: $main-color;
    font-weight: 600;

    background-color: #ffffff;
    border-radius: $item-radius;
  }

  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }

  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
        transform: rotate(0deg);
    }
    
    100% {
        transform: rotate(360deg);
    }
  }
</style>