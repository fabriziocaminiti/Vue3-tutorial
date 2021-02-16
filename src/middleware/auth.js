export default function (next, store) {
    if (!store.state.isloggedIn) {
        next("/");
        store.commit("setLogin", true);
    } else {
        next();
    }
}