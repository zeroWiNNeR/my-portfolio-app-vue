<template>
    <div class="about-container">

        <v-row class="my-5" align="center" justify="center">
            <h2 class="white--text">ABOUT ME</h2>
        </v-row>

        <div class="about-skills">
            <div class="about-skills-rectangle" />

            <div class="mt-12 space-around" style="position: absolute; align-items: center;">
<!--                <v-responsive-->
<!--                        class="about-skills-backend-circle text-center grey lighten-2 rounded-circle d-inline-flex align-center mr-10"-->
<!--                        min-height="12vw"-->
<!--                        min-width="12vw"-->
<!--                >-->
<!--                    Backend-->
<!--                    <div>-->

<!--                    </div>-->
<!--                </v-responsive>-->
                <v-progress-circular
                        class="text-center white rounded-circle d-inline-flex justify-center mr-10 about-skills-backend-circle"
                        :rotate="-90"
                        :size="150"
                        :value="50"
                        :width="8"
                        @click=""
                        color="green"
                >Backend</v-progress-circular>


                <v-responsive
                        class="about-skills-main-circle grey lighten-2 text-center rounded-circle d-inline-flex align-center my-5"
                        min-height="20vw"
                        min-width="20vw"
                >
                    DEVELOPMENT DIRECTIONS
                </v-responsive>

                <v-progress-circular
                        class="text-center white rounded-circle d-inline-flex justify-center ml-10 about-skills-frontend-circle"
                        :rotate="-90"
                        :size="150"
                        :value="65"
                        :width="8"
                        @click=""
                        color="blue"
                >Frontend</v-progress-circular>

            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "HomeAbout"
    }
</script>

<style scoped>
    .about-container {
        height: 100vh;
        width: 100vw;
        background-color: #161920;
    }

    .about-skills {
        position: relative;
        display: flex;
        justify-content: center;
        transform: translate(-50%,0);
        left: -80vw;
        width: 80vw;
        height: 80vh;
        transition: all 1s;
        z-index: 999;
        /*font-family:  "Comic Sans MS", cursive, sans-serif;*/
    }

    .about-skills-rectangle {
        width: 100px;
        height: 4px;
        background: #2a2e32;
    }

    .about-skills-main-circle {
        background-color: white;
        font-family: 'Roboto Condensed', sans-serif;
        border-radius: 50%;
        box-shadow: 0 0 0 rgba(255, 255, 255, 0.8);
        animation: anim-about-skills-main-circle-border 2s infinite;
    }
    @-webkit-keyframes anim-about-skills-main-circle-border {
        0% {
            -webkit-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.8);
        }
        70% {
            -webkit-box-shadow: 0 0 0 20px rgba(204,169,44, 0);
        }
        100% {
            -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
        }
    }
    @keyframes anim-about-skills-main-circle-border {
        0% {
            -moz-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.8);
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.8);
        }
        70% {
            -moz-box-shadow: 0 0 0 30px rgba(204,169,44, 0);
            box-shadow: 0 0 0 30px rgba(204,169,44, 0);
        }
        100% {
            -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
            box-shadow: 0 0 0 0 rgba(204,169,44, 0);
        }
    }

    .about-skills-backend-circle:hover {
        animation: anim-about-skills-backend-circle linear 1s ;
    }
    @-webkit-keyframes anim-about-skills-backend-circle {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1.1);
        }
    }
    @keyframes anim-about-skills-backend-circle {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1.1);
        }
    }

</style>