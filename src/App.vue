<template>
    <v-app id="app">
        <!--    <router-link to="/">-->
        <!--      Home-->
        <!--    </router-link> |-->
        <!--    <router-link to="/medium">-->
        <!--      Medium-->
        <!--    </router-link>-->
        <!--    <router-view />-->

        <HomePage/>

    </v-app>
</template>


<script>
import HomePage from "./components/HomePage";

export default {
    components: {
        HomePage
    }
}

</script>


<style>

</style>
