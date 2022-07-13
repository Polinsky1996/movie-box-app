<template>
    <div class="gradient-frame"
        :style="{ 
            background: getLinearGradient,
            color:  backgroundColor.text_color   
        }">
      <slot></slot>
    </div>
</template>

<script>
import { getGradientBackground } from '../scripts/vibrant'

export default {
    props: {
        id: {
            type: Number,
            require: false,
        }
    },

    data() {
        return {
            backgroundColor: ''
        }
    },

    methods: {
        async getBackgroundColor() {
            const colors = await getGradientBackground(this.id)
            
            if (colors) {
                this.backgroundColor = colors;
            }
        }
    },

    watch: {
        id() {
            this.getBackgroundColor();
        }
    },

    computed: {
        getLinearGradient() {
            return `linear-gradient(45deg, ${this.backgroundColor.one_color}, ${this.backgroundColor.two_color})`;
        }
    }
}
</script>

<style scoped lang="scss">
.gradient-frame {
    width: 100%;

    background-color: $secondary-background-color;
    color: $second-font-color;
    border-radius: 1rem;
}
</style>