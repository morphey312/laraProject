import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        msg: '',
        posts: {},
    },
    mutations: {
        getPosts(state, posts) {
            return state.posts = posts;
        }
    },
    getters: {
        posts(state) {
            return state.posts;
        }
    },
    actions: {
        getMsg({ commit }) {
            axios.get('/api/posts')
                .then(res => {
                    commit('getPosts', res.data);
                    console.log(res.data);
                }).catch(err => {
                    console.log(err)
                })
        },
    },
})

export default store
