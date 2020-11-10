<template>
    <div class="intro-container">

        <v-row class="intro-main-textarea">
            <v-col class="text-left ml-5" cols="12">
                <h1 class="display-1 mb-4 black--text"> Привет, </h1>
                <h1 class="display-1 mb-4 black--text"> Меня зовут Алексей, </h1>
                <h2 class="display-1 font-weight-thin black--text"> Full Stack Developer. </h2>
            </v-col>
        </v-row>

        <div class="intro-container-bottom-gradient"/>

    </div>
</template>

<script>
export default {
    name: "HomeIntro"
}
</script>

<style scoped>
.intro-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-image: url("/assets/images/intro-background.jpg");
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.intro-main-textarea {
    position: absolute;
    left: auto;
    top: 20vh
}

.intro-container-bottom-gradient {
    height: 20vh;
    width: 100%;
    position: absolute;
    bottom: -1px;
    background: rgb(22, 25, 32);
    background: linear-gradient(0deg, rgba(22, 25, 32, 1) 0%, rgba(22, 25, 32, 0) 100%);
}
</style>