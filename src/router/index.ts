import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import ProjectAddingForm from '../views/ProjectAddingForm.vue'
import ApplicationForm from '../views/ApplicationForm.vue'
import Project from '../views/Project.vue'
import Projects from '../views/Projects.vue'
import Applicant from '../views/Applicant.vue'
import ViewApplications from '../views/ViewApplications.vue'
import AIChatbox from '../views/aiChatbox.vue'

Vue.use(VueRouter)

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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
