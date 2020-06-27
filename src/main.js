import Vue from 'vue'

// Import Vue App, router, store
import App from './App.vue'
import router from './plugins/router'
import store from './store'
import vuetify from "./plugins/vuetify"
import resource from "./plugins/resource"

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    vuetify,
    resource,
    render: h => h(App),
}).$mount('#app')
