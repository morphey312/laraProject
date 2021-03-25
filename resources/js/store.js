import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        msg: '',
        posts: {},
        orderPosts: {},
        categories: {},
        // curentPage: 0,
    },
    mutations: {
        getPosts(state, data) {
            return state.posts = data;
        },
        getOrderPosts(state, data) {
            return state.orderPosts = data;
        },
        getCategories(state, data) {
            return state.categories = data;
        },
        // getPagination(state, data) {
        //     return state.curentPage = data;
        // },
    },
    getters: {
        posts(state) {
            return state.posts;
        },
        orderPosts(state) {
            return state.orderPosts;
        },
        categories(state) {
            return state.categories;
        },
        // curentPage(state) {
        //     return state.curentPage;
        // },
    },
    actions: {
        // getPagination({ commit, page }) {
        //     console.log('page = ', page);
        //     axios.get('/api/' + page)
        //         .then(res => {
        //             commit('getPagination', res.data);
        //             console.log('pagination', res.data);
        //         }).catch(err => {
        //             console.log(err)
        //         })
        // },
        getPosts({ commit }) {
            axios.get('/api/allPosts')
                .then(res => {
                    commit('getPosts', res.data);
                    console.log('getPosts', res.data);
                }).catch(err => {
                    console.log(err)
                })
        },
        getOrderPosts({ commit }) {
            axios.get('/api/orderPosts')
                .then(res => {
                    commit('getOrderPosts', res.data);
                    console.log('orderPosts', res.data);
                }).catch(err => {
                    console.log(err)
                })
        },
        getCategories({ commit }) {
            axios.get('/api/categories')
                .then(res => {
                    commit('getCategories', res.data);
                    console.log('getCategories', res.data);
                }).catch(err => {
                    console.log(err)
                })
        },
    },
})

export default store
