<template>
  <div id="app">
    <div class="wrapper wrapper-loading" v-if="!isLoaded"><TheLoading /></div>
    <div class="wrapper wrapper-loaded" v-show="isLoaded" :style="wrapperStyles"><nuxt /></div>
    <!--<TheForkCorners />-->
  </div>
</template>

<script>
import TheLoading from '~/components/TheLoading.vue'
import TheForkCorners from '~/components/TheForkCorners.vue'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {

    }
  },
  components: {
    TheLoading,
    TheForkCorners
  },
  computed: {
    ...mapGetters(['isLoaded'])
  }
}
</script>

<style scoped>
.wrapper {
  width: 100vw;
  min-height: 100vh;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  background: #fff;
  padding: 32px;
}

.wrapper-loaded {
  padding-top: 0;
  background-color: #fafafa;
  background-image: url('~/makki.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
