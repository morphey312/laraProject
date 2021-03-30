import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        msg: '',
        singlePost: {},
        posts: {},
        authorPost: {},
        orderPosts: {},
        categories: {},
        categoriesPost: {},
        errors: [],
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
        getPost(state, data) {
            return state.singlePost = data[0];
        },
        getAuthorPosts(state, data) {
            return state.authorPost = data;
        },
        getCategoryPosts(state, data) {
            return state.categoriesPost = data;
        },
        setErrors(state, errors) {
            state.errors = errors;
        },
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
        singlePost(state) {
            return state.singlePost
        },
        authorPost(state) {
            return state.authorPost
        },
        categoriesPost(state) {
            return state.categoriesPost
        },
        errors: state => state.errors,
    },
    actions: {
        getCategoryPost({ commit }, category_id = 1) {
            console.log('getCategoryPosts', category_id);
            axios.get('/api/categoryPosts/' + category_id)
                .then(res => {
                    commit('getCategoryPosts', res.data);
                    console.log('getCategoryPosts', res.data);
                }).catch(err => {
                    console.log(err)
                })
        },
        getAuthorPosts({ commit }, user_id = 1) {
            console.log('getAuthorPosts', user_id);
            axios.get('/api/authorPosts/' + user_id)
                .then(res => {
                    commit('getAuthorPosts', res.data);
                    console.log('getAuthorPosts', res.data);
                }).catch(err => {
                    console.log(err)
                })
        },
        getPost({ commit }, id = 1) {
            console.log(id);
            axios.get('/api/single/' + id)
                .then(res => {
                    commit('getPost', res.data);
                    console.log('getPost', res.data);
                }).catch(err => {
                    console.log(err)
                })
        },
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
    modules: {
        auth,
    }
})

export default store
