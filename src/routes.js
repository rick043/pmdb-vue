import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'

// auth
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Logout from './components/auth/Logout'

// Movies
import Movies from './components/movies/Movies'
import Movie from './components/movies/Movie'
import Request from "./components/Request"

import Profile from './components/Profile.vue'
import AdminDashboard from "./components/AdminDashboard";

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            requiresVisitor: true,
        }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            requiresVisitor: true,
        }
    },
    {
        path: '/logout',
        name: 'logout',
        component: Logout
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },
    {
        path: '/movies',
        name: 'movies',
        component: Movies,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/request',
        name: 'request',
        component: Request,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/movies/:id',
        name: 'movie',
        props: true,
        component: Movie,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/admindashboard',
        name: 'admindashboard',
        component: AdminDashboard,
        meta: {
            requiresAuth: true,
        }
    },
]

export default routes