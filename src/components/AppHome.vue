<template>
  <v-app>

      <v-app-bar
              absolute
              color="#161920"
              hide-on-scroll>

          <div class="mx-auto">
              <v-btn class="ma-2" tile color="#161920" dark @click="$vuetify.goTo($refs.homeIntro, options)">HOME</v-btn>
              <v-btn class="ma-2" tile color="#161920" dark @click="$vuetify.goTo($refs.homeAbout, options)">ABOUT ME</v-btn>
              <v-btn class="ma-2" tile color="#161920" dark @click="$vuetify.goTo($refs.homeCV, options)">CV</v-btn>
              <v-btn class="ma-2" tile color="#161920" dark @click="$vuetify.goTo($refs.homeAbout, options)">CONTACTS</v-btn>
          </div>
      </v-app-bar>

      <v-main class="app-body">
          <HomeIntro ref="homeIntro" />

          <HomeAbout ref="homeAbout" />

          <HomeCV ref="homeCV" />
      </v-main>

      <v-btn icon class="btn-to-top" large @click="onClick">
          <v-icon color="grey lighten-1">mdi-arrow-up-bold</v-icon>
      </v-btn>

  </v-app>
</template>


<script>
    import * as easings from 'vuetify/es5/services/goto/easing-patterns'
    import HomeIntro from "@/components/home/HomeIntro"
    import HomeAbout from "@/components/home/HomeAbout"
    import HomeCV from "@/components/home/HomeCV";

    function onScrollCheck () {
        let btn = document.querySelector('.btn-to-top')
        if (window.pageYOffset > (window.innerHeight/3)) {
            btn.style.opacity = '1'
        } else { btn.style.opacity = '0' }

        let aboutSkills = document.querySelector('.about-skills')
        if (window.pageYOffset > (window.innerHeight/2)) {
            aboutSkills.style.left = '50%'
        } else {
            aboutSkills.style.left = '-80vw'
        }
    }
    window.onscroll = onScrollCheck

    export default {
        name: 'AppHome',
        components: {
            HomeIntro,
            HomeAbout,
            HomeCV
        },
        data () {
            return {
                type: 'element',
                duration: 500,
                offset: 0,
                easing: 'easeInOutCubic',
                easings: Object.keys(easings),
            }
        },
        computed: {
            options () {
                return {
                    duration: this.duration,
                    offset: this.offset,
                    easing: this.easing,
                }
            }
        },
        methods: {
            onClick () {
                window.scrollTo(0,0)
            }
        }
    }
</script>


<style scoped>

    .app-body {
        background-color: #161920;
        /*display: block;*/
        /*outline: none;*/
    }

    .btn-to-top {
        opacity: 0;
        background-color: #4e5355;
        color: white;
        /*padding: 15px 30px;*/
        /*border-radius: 5px;*/
        position: fixed;
        right: 5vh;
        bottom: 5vh;
        cursor: pointer;
        transition: all .2s ease-in-out;
    }
    .btn-to-top:hover {
        transform: scale(1.1);
    }
</style>
