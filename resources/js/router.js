// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import About from './pages/About.vue'
// import Home from './pages/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
]

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
    routes
})

export default router
