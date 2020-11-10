<template>
    <v-app>
        <v-app-bar
                absolute
                color="#161920"
                hide-on-scroll
        >
            <div class="mx-auto">
                <v-btn class="ma-2" tile color="#161920" dark @click="$vuetify.goTo($refs.homeIntro, options)">НАЧАЛО</v-btn>
                <v-btn class="ma-2" tile color="#161920" dark @click="$vuetify.goTo($refs.homeAbout, options)">ОБО МНЕ</v-btn>
                <v-btn class="ma-2" tile color="#161920" dark @click="$vuetify.goTo($refs.homeCV, options)">РЕЗЮМЕ</v-btn>
            </div>
        </v-app-bar>

        <v-main class="app-body">
            <HomeIntro ref="homeIntro"/>

            <HomeAbout :scrollToCV="scrollToCV" ref="homeAbout"/>

            <HomeCV ref="homeCV"/>
        </v-main>


        <div class="socials">
            <ul class="socials-menu">
                <li class="socials-item">
                    <a href="https://www.github.com/zerowinner" target="_blank"
                       class="socials-link socials-link-github">
                        <i class="fab fa-github"></i>
                    </a>
                </li>
                <li class="socials-item">
                    <a href="https://vk.com/zerowinner" target="_blank" class="socials-link socials-link-vk">
                        <i class="fab fa-vk"></i>
                    </a>
                </li>
                <li class="socials-item">
                    <a href="https://www.facebook.com/aleshkanegodyai" target="_blank"
                       class="socials-link socials-link-facebook">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                </li>
            </ul>
        </div>

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

function onScrollCheck() {
    let btn = document.querySelector('.btn-to-top')
    if (window.pageYOffset > (window.innerHeight / 3))
        btn.style.opacity = '1'
    else
        btn.style.opacity = '0'

    let aboutSkills = document.querySelector('.about-skills')
    if (window.pageYOffset > (window.innerHeight / 4))
        aboutSkills.style.opacity = '1'
    else
        aboutSkills.style.opacity = '0'

    let scrollToCV = document.querySelector('.scroll-down')
    if (window.pageYOffset > (window.innerHeight * 1.5))
        scrollToCV.style.opacity = '0'
    else
        scrollToCV.style.opacity = '1'
}

window.onscroll = onScrollCheck

export default {
    name: 'AppHome',
    components: {
        HomeIntro,
        HomeAbout,
        HomeCV
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
    },
    methods: {
        onClick() {
            // window.scrollTo(0,0)
            this.$vuetify.goTo(this.$refs.homeIntro, this.options)
        },
        scrollToCV() {
            this.$vuetify.goTo(this.$refs.homeCV, this.options)
        }
    }
}
</script>


<style scoped>
.app-body {
    width: 100vw;
    height: 100vh;
    background-color: #161920;
}

.btn-to-top {
    opacity: 0;
    background-color: #4e5355;
    color: white;
    position: fixed;
    right: 3vh;
    bottom: 5vh;
    cursor: pointer;
    transition: all .2s ease-in-out;
}

.btn-to-top:hover {
    transform: scale(1.1);
}

.socials {
    position: fixed;
    right: 1vh;
    bottom: 30vh;
}

.socials-menu {
    list-style: none;
}

.socials-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 70px;
    transform: skewX(-30deg);
    background-size: 210%;
    transition: .4s;
}

.socials-item:hover {
    background-position: 100%;
}

.socials-link {
    transform: skewX(30deg);
    color: #fff;
    font-size: 25px;
    transition: .3s;
}

.socials-link-github:hover {
    color: #fff;
    transform: scale(1.2) skewX(30deg);
}

.socials-link-vk:hover {
    color: #1e88e5;
    transform: scale(1.2) skewX(30deg);
}

.socials-link-facebook:hover {
    color: #0d47a1;
    transform: scale(1.2) skewX(30deg);
}

</style>
