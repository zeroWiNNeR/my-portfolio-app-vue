<template>
  <v-app id="app">
<!--    <router-link to="/">-->
<!--      Home-->
<!--    </router-link> |-->
<!--    <router-link to="/medium">-->
<!--      Medium-->
<!--    </router-link>-->
<!--    <router-view />-->

    <AppHome />

  </v-app>
</template>


<script>
  import AppHome from "./components/AppHome";
  export default {
    components: {
      AppHome
    }
  }

</script>


<style>

</style>
