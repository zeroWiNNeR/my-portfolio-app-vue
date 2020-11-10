import Vue from 'vue'

// Import plugins
import App from './App.vue'
import router from './plugins/router'
import store from './store'
import vuetify from "./plugins/vuetify"
import resource from "./plugins/resource"

Vue.config.productionTip = true

new Vue({
    el: '#app',
    router,
    store,
    vuetify,
    resource,
    render: h => h(App),
}).$mount('#app')
