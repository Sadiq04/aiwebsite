import Vue from 'vue'
import Vuex from 'vuex'
import members from '@/assets/members';
import memberApplications from '@/assets/memberApplications';
import projectProposals from '@/assets/projectProposals';
import currentProjects from '@/assets/currentProjects';
import backupCurrentProjects from '@/assets/backupCurrentProjects';
import pastProjects from '@/assets/pastProjects';

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
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
      state.members.push(state.memberApplications[applicantIndex]);
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
    }

  },
  actions: {
  },
  modules: {
  }
})
