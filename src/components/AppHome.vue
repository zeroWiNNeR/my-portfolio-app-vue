<template>
  <v-app>

      <v-app-bar
              absolute
              color="#161920"
              hide-on-scroll>

          <div class="mx-auto">
              <v-btn class="ma-2" tile color="#161920" dark>HOME</v-btn>
              <v-btn class="ma-2" tile color="#161920" dark>ABOUT ME</v-btn>
              <v-btn class="ma-2" tile color="#161920" dark>CONTACTS</v-btn>
          </div>
      </v-app-bar>

      <v-main class="app-body">
          <HomeIntro />

          <HomeAbout />

          <v-row >
              <div class="btn-to-top" @click="onClick">Наверх</div>
          </v-row>

      </v-main>

  </v-app>
</template>


<script>
    import HomeIntro from "@/components/home/HomeIntro"
    import HomeAbout from "@/components/home/HomeAbout"

    function magic() {
        let btn = document.querySelector('.btn-to-top')
        if (window.pageYOffset > 300) {
            btn.style.opacity = '1'
        } else { btn.style.opacity = '0' }
    }
    // When scrolling, we run the function
    window.onscroll = magic

    export default {
        name: 'AppHome',
        components: {
            HomeIntro,
            HomeAbout
        },
        methods: {
            onClick () {
                window.scrollTo(0,0)
            }
        }
    }
</script>


<style scoped>
    *{
        padding:0;
        margin:0;
    }

    .app-body {
        background-color: #161920;
        display: block;
        outline: none;
    }

    .btn-to-top {
        opacity: 0;
        background-color: #4e5355;
        color: white;
        padding: 15px 30px;
        border-radius: 5px;
        position: fixed;
        right: 3vh;
        bottom: 3vh;
        cursor: pointer;
        transition: all .2s ease-in-out;
    }
</style>
