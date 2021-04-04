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
        currentPages: {},
        errors: [],
    },
    mutations: {
        setPosts(state, data) {
            state.posts = data;
        },
        setOrderPosts(state, data) {
            state.orderPosts = data;
        },
        setCategories(state, data) {
            state.categories = data;
        },
        setPost(state, data) {
            state.singlePost = data[0];
        },
        setAuthorPosts(state, data) {
            state.authorPost = data;
        },
        setCategoryPosts(state, data) {
            state.categoriesPost = data;
        },
        setErrors(state, errors) {
            state.errors = errors;
        },
        setCurrentPages(state, data) {
            state.currentPages = data;
        },
        deletePost(state, id) {
            let arr = state.currentPages.data;
            let index = arr.findIndex(item => item.id === id);
            state.currentPages.data.splice(index, 1);
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
        currentPages: state => state.currentPages,
    },
    actions: {
        getCurrentPages({ commit }, page) {
            axios.get("api/curentPage?page=" + page).then((res) => {
                commit('setCurrentPages', res.data);
                console.log('setCurrentPages', res.data);
            }).catch(err => {
                console.log(err)
            });
        },
        getCategoryPost({ commit }, category_id = 1) {
            console.log('setCategoryPosts', category_id);
            axios.get('/api/categoryPosts/' + category_id)
                .then(res => {
                    commit('setCategoryPosts', res.data);
                    console.log('setCategoryPosts', res.data);
                }).catch(err => {
                    console.log(err)
                })
        },
        getAuthorPosts({ commit }, user_id = 1) {
            console.log('setAuthorPosts', user_id);
            axios.get('/api/authorPosts/' + user_id)
                .then(res => {
                    commit('setAuthorPosts', res.data);
                    console.log('getAuthorPosts', res.data);
                }).catch(err => {
                    console.log(err)
                })
        },
        getPost({ commit }, id = 1) {
            console.log(id);
            axios.get('/api/single/' + id)
                .then(res => {
                    commit('setPost', res.data);
                    console.log('setPost', res.data);
                }).catch(err => {
                    console.log(err)
                })
        },
        getPosts({ commit }) {
            axios.get('/api/allPosts')
                .then(res => {
                    commit('setPosts', res.data);
                    console.log('setPosts', res.data);
                }).catch(err => {
                    console.log(err)
                })
        },
        getOrderPosts({ commit }) {
            axios.get('/api/orderPosts')
                .then(res => {
                    commit('setOrderPosts', res.data);
                    console.log('setorderPosts', res.data);
                }).catch(err => {
                    console.log(err)
                })
        },
        getCategories({ commit }) {
            axios.get('/api/categories')
                .then(res => {
                    commit('setCategories', res.data);
                    console.log('setCategories', res.data);
                }).catch(err => {
                    console.log(err)
                })
        },
        deletePost({ commit, dispatch }, id) {
            console.log('deletePost', id);
            axios.delete('/api/posts/' + id)
                .then(res => {
                    if (res.data === 'ok') {
                        commit('deletePost', id);
                        dispatch('getCurrentPages');
                    }
                }).catch(err => {
                    console.log(err)
                })
        }
    },
    modules: {
        auth,
    }
})

export default store
