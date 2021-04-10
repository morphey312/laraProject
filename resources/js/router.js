import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'
import Single from './pages/Single.vue'
import OrderedAuthor from './pages/OrderedAuthor.vue'
import OrderedCategory from './pages/OrderedCategory.vue'
import Login from './pages/Auth/Login.vue'
import Register from './pages/Auth/Register.vue'
import Registered from './pages/Auth/Registered.vue'
import Verify from './pages/Auth/Verify.vue'
import NotFound from './pages/NotFound.vue'
import CreatePost from './pages/CreatePost.vue'
import EditPost from './pages/EditPost.vue'
import store from './store';

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
        name: 'singleID',
        component: Single,
        props: true
    },
    {
        path: '/authorPosts/:user_id',
        name: 'authorPostsID',
        component: OrderedAuthor,
        props: true
    },
    {
        path: '/category/:category_id',
        name: 'categoryID',
        component: OrderedCategory,
        props: true
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    },
    {
        path: '/registered',
        name: 'registered',
        component: Registered,
        meta: {
			requiresAuth: true
		  }
    },
    {
        path: '/verify',
        name: 'verify',
        component: Verify,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        props: true
    },
    {
        path: '/create',
        name: 'create',
        component: CreatePost,
        props: true,
        meta: {
			requiresAuth: true
		  }
    },
    {
        path: '/edit/:post_id',
        name: 'edit',
        component: EditPost,
        props: true,
        meta: {
			requiresAuth: true
		  }
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
