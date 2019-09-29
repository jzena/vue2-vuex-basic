export default {
    register(state, userId) {
        const date = new Date();
        const user = state.users.find(user => user.id === userId);
        user.registered = true;
        const registrarion = {
            userId,
            name: user.name,
            date: date.getMonth() + "/" + date.getDay()
        };

        state.registrations.push(registrarion);
    },
    unregister(state, payload) {
        const user = state.users.find(user => user.id == payload.userId);
        user.registered = false;
        const registrationIndex = state.registrations.findIndex(reg => reg.userId == payload.userId);
        state.registrations.splice(registrationIndex, 1);
    }
}