export default {
    // register(context, userId) {
    register({ commit }, userId) {
        setTimeout(() => {
            commit('register', userId);
        }, 1000);
    }
}