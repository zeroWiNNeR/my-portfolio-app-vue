import User from './user_help'

export default {
    state: {
        user: null
    },
    getters: {
        // Return user (for get id)
        user (state) {
            return state.user
        },
        // Check User (for logged)
        checkUser (state) {
            return state.user !== null
        }
    },
    mutations: {

    },
    actions: {

    }
}
