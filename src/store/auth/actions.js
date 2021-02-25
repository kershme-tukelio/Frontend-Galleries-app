import authService from '../../services/AuthService.js'

export const actions = {
    async login(store, credentials) {
        const { user, token } = await authService.login(credentials);
        localStorage.setItem('token', JSON.stringify(token));

        store.commit('setActiveUser', user);
        store.commit('setToken', token);
    },

    async register(store, userData) {
        const { user, token } = await authService.register(userData);
        localStorage.setItem('token', token);

        store.commit('setActiveUser', user);
        store.commit('setToken', token);
    },

    async getActiveUser(store) {
        if (store.getters.isAuthenticated) {
            const activeUser = await authService.getMyProfile();
            store.commit('setActiveUser', activeUser);
        } else {
            store.commit('setActiveUser', {});
        }
    },

    async logout(store) {
        await authService.logout();
        store.commit('setToken', null);
        store.commit('setActiveUser', {});
        localStorage.removeItem('token');
    }
};