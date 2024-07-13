<template>
  <div class="page-wrapper">
    <Navigation />
    <v-main class="app-body">
      <SectionIntro />
      <SectionAbout />
      <SectionCV />
    </v-main>
  </div>
</template>


<script>
import * as easings from 'vuetify/es5/services/goto/easing-patterns'
import Navigation from "@/components/Navigation"
import SectionIntro from "@/views/SectionIntro"
import SectionAbout from "@/views/SectionAbout"
import SectionCV from "@/views/SectionCV"

export default {
  name: 'index',
  components: {
    Navigation,
    SectionIntro,
    SectionAbout,
    SectionCV
  },
  data() {
    return {
      type: 'element',
      duration: 500,
      offset: 0,
      easing: 'easeInOutCubic',
      easings: Object.keys(easings),
    }
  },
  computed: {
    options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing,
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.app-body {
  width: 100vw;
  height: 100vh;
  background-color: #141416;
}

.page-wrapper {
  position: relative;
}

.button {
  &-nav {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 5;
    border: 1px solid #fff;
    background-color: transparent !important;
    backdrop-filter: blur(2px);
  }
}
</style>
