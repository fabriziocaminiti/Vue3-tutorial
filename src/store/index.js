import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            isloggedIn: false,
            authUser: {},
            isLoginOpen: false,
        };
    },
    mutations: {
        setisloggedIn(state, payload) {
            state.isloggedIn = payload;
        },
        setAuthUser(state, payload) {
            state.authUser = payload;
        },
        setLogin(state, payload) {
            state.isLoginOpen = payload;
        }
    }
});

export default store;