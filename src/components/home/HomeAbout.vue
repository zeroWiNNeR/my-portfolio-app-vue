<template>
    <div class="about-container" style="font-family: 'Raleway', sans-serif;">
        <v-row align="center" justify="center">
            <h2 class="white--text mt-5">ОБО МНЕ</h2>
        </v-row>

        <v-row class="about-skills" align="center" justify="center">
            <v-col>
                <v-row align="center" justify="center" class="mb-5">
                    <div class="about-skills-rectangle"/>
                </v-row>

                <v-row justify="center" align="center" style="height: 350px;">
                    <v-col md="auto" align-self="center" style="width: 110px;" class="mx-5">
                        <v-progress-circular
                                class="mb-3 pa-2 text-center white rounded-circle d-inline-flex align-center"
                                :rotate="-90"
                                :size="sizeMiniProgressCircular"
                                :value="60"
                                :width="8"
                                @click=""
                                color="grey"
                        >
                            Java SE, EE
                        </v-progress-circular>
                        <v-progress-circular
                                class="mt-3 pa-2 text-center white rounded-circle d-inline-flex align-center"
                                :rotate="-90"
                                :size="sizeMiniProgressCircular"
                                :value="50"
                                :width="8"
                                @click=""
                                color="green"
                        >
                            Spring Framework
                        </v-progress-circular>
                    </v-col>
                    <v-col md="auto">
                        <v-progress-circular
                                style="color: rgba(0, 125, 0, 1);"
                                class="second-circle text-center white rounded-circle d-inline-flex align-center"
                                :rotate="-90"
                                :size="sizeProgressCircular"
                                :value="55"
                                :width="8"
                                @click="showBackendInfo"
                                color=""
                        >
                            Backend
                        </v-progress-circular>
                    </v-col>

                    <v-col md="auto" class="mx-5">
                        <v-responsive
                                class="pa-2 main-circle text-center rounded-circle d-inline-flex align-center"
                                height="250"
                                width="250"
                        >
                            DEVELOPMENT DIRECTIONS
                        </v-responsive>
                    </v-col>

                    <v-col md="auto">
                        <v-progress-circular
                                class="second-circle text-center white rounded-circle d-inline-flex"
                                :rotate="-90"
                                :size="sizeProgressCircular"
                                :value="65"
                                :width="8"
                                @click="showFrontendInfo"
                                color="blue"
                        >
                            Frontend
                        </v-progress-circular>
                    </v-col>
                    <v-col md="auto" style="width: 110px;" class="mx-5">
                        <v-progress-circular
                                class="mb-3 pa-2 text-center white rounded-circle d-inline-flex align-center"
                                :rotate="-90"
                                :size="sizeMiniProgressCircular"
                                :value="70"
                                :width="8"
                                @click=""
                                color="grey"
                        >
                            CSS, HTML
                        </v-progress-circular>
                        <v-progress-circular
                                class="mt-3 pa-2 text-center white rounded-circle d-inline-flex align-center"
                                :rotate="-90"
                                :size="sizeMiniProgressCircular"
                                :value="80"
                                :width="8"
                                @click=""
                                color="primary"
                        >
                            Vue.js, Vuex
                        </v-progress-circular>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row align="center" justify="start" style="height: 40vh">
            <div class="contacts-container">
                <div class="title">Контактная информация</div>
                <div class="subtitle">
                    Свяжитесь через удобный мессенджер<br>
                    или отправьте эл. письмо
                </div>
                <div class="contacts">
                    <div class="contact-info">
                        <div class="item whatsapp">
                            <a href="https://api.whatsapp.com/send?phone=79519485262"><img
                                    src="/assets/images/whatsapp.svg"></a>
                        </div>
                        <div class="item viber">
                            <a href="viber://chat?number=79519485262"><img src="/assets/images/viber.svg"></a>
                        </div>
                        <div class="item telegram">
                            <a href="tg://resolve?domain=zeroWiNNeR"><img src="/assets/images/telegram.svg"></a>
                        </div>
                        <div class="phone">
                            <div class="number">+7 951 948 52 62</div>
                        </div>
                        <div>
                            <a style="color: #fff;font-size: 25px;"
                               href="mailto:vekovshinin.aiu@gmail.com ?subject=Письмо с сайта визитки">Отправить
                                e-mail</a>
                        </div>
                    </div>
                </div>
            </div>
        </v-row>

        <v-container @click="this.scrollToCV" class="scroll-down" >
            <span class="scroll-down-span">РЕЗЮМЕ</span><i class="scroll-down-i"></i>
        </v-container>

        <v-dialog v-model="dialog" max-width="50%">
            <v-card>
                <v-card-title class="headline">
                    {{ this.dialogHeader }}
                </v-card-title>
                <v-card-text>
                    {{ this.dialogText }}
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: "HomeAbout",
    props: ['scrollToCV'],
    data() {
        return {
            sizeProgressCircular: 150, sizeMiniProgressCircular: 110,
            dialog: false,
            dialogHeader: '', dialogText: ''
        }
    },
    methods: {
        showBackendInfo() {
            this.dialogHeader = 'Backend'
            this.dialogText = 'Разработка сложных приложений для различных типов задач. ' +
                'Не просто создание сайтов, возможна реализация именно того, что ищет заказчик, ' +
                'например, пользовательское приложение электронной ' +
                'коммерции, клиентские порталы, CRM системы, разработку API и базы данных SQL.'
            this.dialog = true
        },
        showFrontendInfo() {
            this.dialogHeader = 'Frontend'
            this.dialogText = 'Я являюсь разработчиком веб-сайтов, разработанных с учетом потребностей заказчика. ' +
                'Стремлюсь реализовать уникальный дизайн для веб-сайтов, который позволит выделиться бизнесу.'
            this.dialog = true
        },
    }
}
</script>

<style scoped>
.about-container {
    width: 100vw;
    height: 100vh;
    background-color: #161920;
}

.about-skills {
    opacity: 0;
    transition: all 1s;
}

.about-skills-rectangle {
    width: 100px;
    height: 4px;
    background: #2a2e32;
}

/* Development directions circle */
.main-circle {
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 rgba(255, 255, 255, 0.8);
    animation: anim-main-circle-border 2s infinite;
}

@-webkit-keyframes anim-main-circle-border {
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

@keyframes anim-main-circle-border {
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

.second-circle {
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

.second-circle:hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
}

.contacts-container {
    position: relative;
    left: 10%;
    z-index: 10;
}


.title {
    font-family: 'EuropeCondensedC', sans-serif;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.54;
    letter-spacing: 1.9px;
    color: #ffffff;
    text-transform: uppercase;
}

.subtitle {
    margin: 25px 0 48px 0;
}

.subtitle {
    font-family: 'EuropeCondensedC', sans-serif;
    font-size: 36px;
    line-height: 1.11;
    color: #ffffff;
}

.item {
    display: inline-block;
    margin-right: 15px;
}

a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}

.item img {
    width: 50px;
    height: 50px;
}


.phone {
    padding-top: 24px;
}

.number {
    font-family: 'EuropeCondensedC', sans-serif;
    font-size: 30px;
    color: #ffffff;
    margin-bottom: 6px;
}

.scroll-down {
    position: absolute;
    left: 50vw;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    bottom: -100vh;
    z-index: 100;
    width: 60px;
    margin-left: -31px;
    height: 100px;
    cursor: pointer;
    opacity: 1;
    -webkit-transition-duration: 0.5s;
    -moz-transition-duration: 0.5s;
    -o-transition-duration: 0.5s;
    transition-duration: 0.5s;
}

.scroll-down-span {
    font-family: 'EuropeCondensedC', sans-serif;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.54;
    letter-spacing: 2px;
    text-align: left;
    color: #ffffff;
    display: block;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    position: absolute;
    left: 8px;
    top: 18px;
    text-transform: uppercase;
    -webkit-transition: color 0.1s ease;
    -o-transition: color 0.1s ease;
    -moz-transition: color 0.1s ease;
    transition: color 0.1s ease;
}

.scroll-down-i {
    width: 2px;
    height: 100px;
    position: absolute;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.5);
    overflow: hidden;
}

.scroll-down-i:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 2px;
    background: #ffffff;
    -webkit-animation-name: scroll-down-btn;
    -moz-animation-name: scroll-down-btn;
    -o-animation-name: scroll-down-btn;
    animation-name: scroll-down-btn;
    -webkit-animation-duration: 2s;
    -moz-animation-duration: 2s;
    -o-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -o-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -o-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-transition: background 0.1s ease;
    -o-transition: background 0.1s ease;
    -moz-transition: background 0.1s ease;
    transition: background 0.1s ease;
}
</style>
