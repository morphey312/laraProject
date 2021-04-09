import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth.js'
import router from './router'

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
        showModal: false,
        idForDelete: 0,
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
        setShowModal(state, data) {
            state.showModal = data.showModal;
            state.idForDelete = data.id;

        },
        deletePost(state, id) {
            if (state.currentPages.data) {
                let arrPost = state.currentPages.data;
                let indexPost = arrPost.findIndex(item => item.id === id);
                state.currentPages.data.splice(indexPost, 1);
            };
            if (state.authorPost.data) {
                let arrAuthor = state.authorPost.data;
                let indexAuthor = arrAuthor.findIndex(item => item.id === id);
                state.authorPost.data.splice(indexAuthor, 1);
            };
            if (state.categoriesPost.data) {
                let arrCategory = state.categoriesPost.data;
                let indexCategory = arrCategory.findIndex(item => item.id === id);
                state.categoriesPost.data.splice(indexCategory, 1);
            };
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
        showModal: state => state.showModal,
        idForDelete: state => state.idForDelete,
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
        getCategoryPost({ commit }, data) {
            console.log('setCategoryPosts 1', data);
            axios.get(`/api/categoryPosts/${data.category_id}/?page=${data.page}`)
                .then(res => {
                    commit('setCategoryPosts', res.data);
                    console.log('setCategoryPosts 2', res.data);
                }).catch(err => {
                    console.log(err)
                })
        },
        getAuthorPosts({ commit }, data) {
            console.log('setAuthorPosts', data);
            axios.get(`/api/authorPosts/${data.user_id}/?page=${data.page}`)
                .then(res => {
                    commit('setAuthorPosts', res.data);
                    console.log('setAuthorPosts', res.data);
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
        getOrderPosts({ commit },) {
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
        createPost({ commit }, data) {
            console.log('createPost 1', data);
            console.log('createPost 2', data.form);
            console.log('createPost 3', data.user_id);
            axios.post('/api/posts', data.form)
                .then(res => {
                    if (res.status == 201) {
                        router.push({
                            name: "authorPostsID",
                            params: { user_id: data.user_id },
                        });
                    }
                }).catch(err => {
                    console.log(err)
                })
        },
        editPost({ commit }, data) {
            console.log('Edit 2', data);
            axios.post('/api/posts', data.form)
                .then(res => {
                    if (res.status == 201) {
                        router.push({
                            name: "singleID",
                            params: { id: data.post_id },
                        });
                    }
                }).catch(err => {
                    console.log(err)
                })
        },
        setShowModal({ commit, dispatch }, data) {
            console.log(data);
            commit('setShowModal', data);

        },
        deletePost({ commit, dispatch }, id) {
            console.log('deletePost', id);
            axios.delete('/api/posts/' + id)
                .then(res => {
                    if (res.data === 'ok') {
                        commit('deletePost', id);
                        dispatch('getCurrentPages');
                        dispatch('setShowModal', {showModal: false, id: 0});
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
