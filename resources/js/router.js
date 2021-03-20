import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'
import Single from './pages/Single.vue'
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
        path: '/single',
        name: 'single',
        component: Single
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
