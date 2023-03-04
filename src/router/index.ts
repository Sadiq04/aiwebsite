import Vue from 'vue'
import VueRouter, { Route, RouteConfig } from 'vue-router'
//import createWebHistory from 'vue-router'
import Home from '../views/Home.vue'
import ProjectAddingForm from '../views/ProjectAddingForm.vue'
import ApplicationForm from '../views/ApplicationForm.vue'
import Project from '../views/Project.vue'
import Projects from '../views/Projects.vue'
import Applicant from '../views/Applicant.vue'
import ViewApplications from '../views/ViewApplications.vue'
import AIChatbox from '../views/aiChatbox.vue'
import Registration from '../views/Registration.vue'
import Login from '../views/Login.vue'
import Account from '../views/Account.vue'
import Workshops from '../views/Workshops.vue'
import AboutUs from '../views/AboutUs.vue'
import Events from '../views/Events.vue'
import Event from '../views/Event.vue'
import { auth } from '../firebase'
require('dotenv').config()
Vue.use(VueRouter)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projectAddingForm',
    name: 'ProjectAddingForm',
    component: ProjectAddingForm
  },
  {
    path: '/applicationForm',
    name: 'ApplicationForm',
    component: ApplicationForm
  },
  {
    path: '/project/:id',
    name: 'Project',
    component: Project
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/applicant/:id',
    name: 'Applicant',
    component: Applicant
  },
  {
    path: '/viewApplications',
    name: 'ViewApplications',
    component: ViewApplications
  },
  {
    path: '/aiChatbox',
    name: 'AIChatbox',
    component: AIChatbox
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/workshops',
    name: 'Workshops',
    component: Workshops
  },
  {
    path: '/aboutUs',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  },
  {
    path: '/event/:id',
    name: 'Event',
    component: Event
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  //history: new createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return {x: 0, y: 0}
    }
  },

})

router.beforeEach((to, from, next) => {
  /*if (to.path === '/login' && auth.currentUser) {
    next('/')
    return;
  }*/

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return;
  }

  next();
})


export default router
