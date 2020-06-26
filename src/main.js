import Vue from 'vue'

// Import Vue App, router, store
import App from './App.vue'
import router from './plugins/router'
import store from './store'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
}).$mount('#app')
