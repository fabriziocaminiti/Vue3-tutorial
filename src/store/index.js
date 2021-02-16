import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            isloggedIn: false,
            authUser: {}
        };
    },
    mutations: {
        setisloggedIn(state, payload) {
            state.isloggedIn = payload;
        },
        setAuthUser(state, payload) {
            state.authUser = payload;
        }
    }
});

export default store;