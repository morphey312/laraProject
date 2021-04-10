import axios from "axios";

export default {
    namespaced: true,

    state: {
        userData: null
    },

    getters: {
        user: state => state.userData
    },

    mutations: {
        setUserData(state, user) {
            state.userData = user;
        }
    },

    actions: {
        getUserData({ commit }) {
            axios
                .get("/api/user")
                .then(response => {
                    commit("setUserData", response.data);
                    console.log('setUserData', response.data);
                })
                .catch(() => {
                    localStorage.removeItem("authToken");
                });
        },
        sendLoginRequest({ commit }, data) {
            console.log('sendLoginRequest 1', data);
            commit("setErrors", {}, { root: true });
            return axios
                .post('/api/login', data)
                .then(response => {
                    commit("setUserData", response.data.user);
                    localStorage.setItem("authToken", response.data.token);
                    console.log('sendLoginRequest 2 ', response.data);
                }).catch(err => {
                    console.log(err)
                });
        },
        sendRegisterRequest({ commit }, data) {
            console.log('sendRegisterRequest 1', data);
            commit("setErrors", {}, { root: true });
            return axios
                .post("/api/register", data)
                .then(response => {
                    commit("setUserData", response.data.user);
                    localStorage.setItem("authToken", response.data.token);
                    console.log('sendRegisterRequest 2 ', response.data);
                });
        },
        sendLogoutRequest({ commit }) {
            axios.post("/api/logout").then(() => {
                commit("setUserData", null);
                localStorage.removeItem("authToken");
            });
        },
        sendVerifyResendRequest() {
            return axios.get("/api/email/resend");
        },
        sendVerifyRequest({ dispatch }, hash) {
            return axios
                .get("/api/email/verify/" + hash)
                .then(() => {
                    dispatch("getUserData");
                });
        }
    }
};
