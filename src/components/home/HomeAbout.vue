<template>
    <div class="about-container">

        <v-row class="my-5" align="center" justify="center">
            <h2 class="white--text">ABOUT ME</h2>
        </v-row>

        <div class="about-skills">
            <div class="about-skills-rectangle" />

            <div class="mt-12 space-around" style="position: absolute; align-items: center;">
                <v-progress-circular
                        class="text-center white rounded-circle d-inline-flex justify-center mr-10 about-skills-backend-circle"
                        :rotate="-90"
                        :size="150"
                        :value="50"
                        :width="8"
                        @click=""
                        color="green"
                >
                    Backend
                </v-progress-circular>

                <v-responsive
                        class="about-skills-main-circle text-center rounded-circle d-inline-flex align-center"
                        height="300px"
                        width="300px"
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
                >
                    Frontend
                </v-progress-circular>
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
        left: 50%;
        width: 80vw;
        height: 80vh;
        opacity: 0;
        transition: all 1s;
        z-index: 0;
        font-family: 'Raleway', sans-serif;
    }

    .about-skills-rectangle {
        width: 100px;
        height: 4px;
        background: #2a2e32;
    }

    /* Development directions circle */
    .about-skills-main-circle {
        background-color: white;

        border-radius: 50%;
        box-shadow: 0 0 0 rgba(255, 255, 255, 0.8);
        animation: anim-about-skills-main-circle-border 2s infinite;
        z-index: 999;
    }
    @-webkit-keyframes anim-about-skills-main-circle-border {
        0% {
            -webkit-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.9);
        }
        70% {
            -webkit-box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
        }
        100% {
            -webkit-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
        }
    }
    @keyframes anim-about-skills-main-circle-border {
        0% {
            -moz-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.8);
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.8);
        }
        70% {
            -moz-box-shadow: 0 0 0 30px rgba(255, 255, 255, 0);
            box-shadow: 0 0 0 30px rgba(255, 255, 255, 0);
        }
        100% {
            -moz-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
        }
    }

    /* Backend circle and his views */
    .about-skills-backend-circle {
        -webkit-transition:all 0.3s ease;
        -moz-transition:all 0.3s ease;
        -o-transition:all 0.3s ease;
        transition:all 0.3s ease;
    }
    .about-skills-backend-circle:hover {
        cursor: pointer;
        transform: scale(1.1, 1.1);
    }

    /* Frontend circle and his views */
    .about-skills-frontend-circle {
        -webkit-transition:all 0.3s ease;
        -moz-transition:all 0.3s ease;
        -o-transition:all 0.3s ease;
        transition:all 0.3s ease;
    }
    .about-skills-frontend-circle:hover {
        cursor: pointer;
        transform: scale(1.1, 1.1);
    }


</style>