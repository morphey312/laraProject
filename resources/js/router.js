import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'
import Single from './pages/Single.vue'
import OrderedAuthor from './pages/OrderedAuthor.vue'
import NotFound from './pages/NotFound.vue'

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
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/single/:id',
        name: 'single/:id',
        component: Single,
        props: true
    },
    {
        path: '/authorPosts/:user_id',
        name: 'authorPosts/:user_id',
        component: OrderedAuthor,
        props: true
    },
    {
        path: '/404',
        name: '404',
        component: NotFound
    },
    {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
    }
]

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
    routes
})

export default router
