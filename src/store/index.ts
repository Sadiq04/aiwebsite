// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/* @ts-ignore */
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist';
import members from '@/assets/members';
import memberApplications from '@/assets/memberApplications';
import projectProposals from '@/assets/projectProposals';
import currentProjects from '@/assets/currentProjects';
import backupCurrentProjects from '@/assets/backupCurrentProjects';
import pastProjects from '@/assets/pastProjects';
import router from '../router'
import { auth } from '../firebase'
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut 
} from 'firebase/auth'

require('dotenv').config()
const vuexLocalStorage = new VuexPersist({
  key: 'vuex', // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => state,
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
})


Vue.use(Vuex)
export default new Vuex.Store({
  //plugins: [vuexLocalStorage.plugin],
  state: {
    user: null,
    isAdmin: true,
    members,
    memberApplications,
    projectProposals,
    currentProjects,
    pastProjects,
    backupCurrentProjects,
  },
  getters: {
    members(state){return state.members;},
    memberApplications(state){return state.memberApplications;},
    projectProposals(state){return state.projectProposals;},
    currentProjects(state){return state.currentProjects;},
    pastProjects(state){return state.pastProjects;},
    isAdmin(state){return state.isAdmin;},
    user(state){return state.user;},
  },
  mutations: {
    addProject(state, newProject) {
      state.currentProjects.push({
        name: newProject.name,
        field: newProject.field,
        abstract: newProject.abstract,
        description: newProject.description,
        projectLeader: newProject.projectLeader,
        projectLeaderMail: newProject.projectLeaderMail,
        projectLeaderPhone: newProject.projectLeaderPhone,
        projectMembers: newProject.projectMembers,
        goals: newProject.goals,
        goalCompletion: newProject.goalCompletion,
        githubLink: newProject.githubLink,
        img: newProject.img,
      })
      state.backupCurrentProjects.push({
        name: newProject.name,
        field: newProject.field,
        abstract: newProject.abstract,
        description: newProject.description,
        projectLeader: newProject.projectLeader,
        projectLeaderMail: newProject.projectLeaderMail,
        projectLeaderPhone: newProject.projectLeaderPhone,
        projectMembers: newProject.projectMembers,
        goals: newProject.goals,
        goalCompletion: newProject.goalCompletion,
        githubLink: newProject.githubLink,
        img: newProject.img,
      })
    },
    addProjectProposal(state, newProject){
      state.projectProposals.push({
        name: newProject.name,
        field: newProject.field,
        abstract: newProject.abstract,
        description: newProject.description,
        projectLeader: newProject.projectLeader,
        projectLeaderMail: newProject.projectLeaderMail,
        projectLeaderPhone: newProject.projectLeaderPhone,
        projectMembers: newProject.projectMembers,
        goals: newProject.goals,
        goalCompletion: newProject.goalCompletion,
        githubLink: newProject.githubLink,
        img: newProject.img,
      })
    },
    addMemberApplication(state, newApplication){
      state.memberApplications.push({
        fullName: newApplication.fullName,
        email: newApplication.email,
        program: newApplication.program,
        year: newApplication.year,
        GPA: newApplication.GPA,
        aiInterest: newApplication.aiInterest,
        clubKnowledge: newApplication.clubKnowledge,
        clubInterest: newApplication.clubInterest,
        LinkedIn: newApplication.LinkedIn,
        GitHub: newApplication.GitHub,
      })
    },
    approveMemberApplication(state, applicantIndex){
      state.members.push({
        fullName: state.memberApplications[applicantIndex].fullName,
        email: state.memberApplications[applicantIndex].email,
        registered: false,
        admin: false,
        program: state.memberApplications[applicantIndex].program,
        year: state.memberApplications[applicantIndex].year,
        GPA: state.memberApplications[applicantIndex].GPA,
        LinkedIn: state.memberApplications[applicantIndex].LinkedIn,
        GitHub: state.memberApplications[applicantIndex].GitHub,
      })
      state.memberApplications.splice(applicantIndex, 1)
    },
    markProjectAsComplete(state, project){
      state.pastProjects.push({
        name: state.currentProjects[project[0]].name,
        field: state.currentProjects[project[0]].field,
        abstract: state.currentProjects[project[0]].abstract,
        description: state.currentProjects[project[0]].description,
        projectLeader: state.currentProjects[project[0]].projectLeader,
        projectLeaderMail: state.currentProjects[project[0]].projectLeaderMail,
        projectLeaderPhone: state.currentProjects[project[0]].projectLeaderPhone,
        projectMembers: state.currentProjects[project[0]].projectMembers,
        goals: state.currentProjects[project[0]].goals,
        githubLink: state.currentProjects[project[0]].githubLink,
        img: state.currentProjects[project[0]].img,
        result: project[1],
      })
      state.currentProjects.splice(project[0], 1)
    },
    makeAdmin(state){state.isAdmin=true;},
    setRegistered(state, i){state.members[i].registered=true},
    SET_USER (state, user) {state.user = user},
    CLEAR_USER (state) {state.user = null},
  },
  actions: {
    async login ({ commit }, details) {
      const { email, password } = details;
      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error: any) {
        switch(error.code) {
          case 'auth/user-not-found':
            alert("User not found")
            break
          case 'auth/wrong-password':
            alert("Wrong password")
            break
          default:
            alert("Something went wrong")
        }

        return
      }

      commit('SET_USER', auth.currentUser)

      router.push('/')
    },
    async register ({ commit}, details) {
      const { email, password } = details
      console.log({email, password})
     try {
       await createUserWithEmailAndPassword(auth, email, password)
     } catch (error: any) {
       switch(error.code) {
         case 'auth/email-already-in-use':
           alert("Email already in use")
           break
         case 'auth/invalid-email':
           alert("Invalid email")
           break
         case 'auth/operation-not-allowed':
           alert("Operation not allowed")
           break
         case 'auth/weak-password':
           alert("Weak password")
           break
         default:
           alert(error)
       }

       return
     }

     commit('SET_USER', auth.currentUser)

     router.push('/')
   },
   async logout ({ commit }) {
    await signOut(auth)

    commit('CLEAR_USER')

    router.push('/login')
  },

  fetchUser ({ commit }) {
    auth.onAuthStateChanged(async user => {
      if (user === null) {
        commit('CLEAR_USER')
      } else {
        commit('SET_USER', user)
        router.push('/')
      }
    })
  }
  },
  modules: {
  }
})
