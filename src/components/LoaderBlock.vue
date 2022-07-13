<template>
    <div v-if="!readyData" class="loading-block">
        <div class="lds-dual-ring"></div>
    </div>
</template>

<script>
export default {
    props: {
        hidden: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            readyData: false
        }
    },

    watch: {
        hidden() {
            if (this.hidden === false) {
                setTimeout(() => {
                    this.readyData = true;
                }, 500);

                return
            }

            this.readyData = false;
        }
    }
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