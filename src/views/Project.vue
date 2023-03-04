<template>
    <div>
        <router-link style="position: absolute; left: 1%; top: 3%; font-size: 35px" to="/projects">Projects</router-link>
        <div v-if="index < currentProjects.length">
            <div style="text-align: left; margin-left: 2%; margin-top: 5%; width: 49%">  
                <h1 style="font-size: 2.5vh">{{ currentProjects[index]["name"] }} </h1>
                <h1 style="margin-top:2%; font-size: 2.5vh">Field: {{ currentProjects[index]["field"] }} </h1>
                <h1 style="margin-top:2%; font-size: 2.5vh">Lead by {{ currentProjects[index]["projectLeader"] }} </h1>
                <h1 style="margin-top:2%; font-size: 2.5vh">Project members: </h1>
                <div style="margin-top:2%;" v-for="member in currentProjects[index]['projectMembers']" :key="member"><h1 style="margin-top:2%; font-size: 2.5vh">&emsp;{{ member }}</h1></div>
                <h1 style="margin-top:2%; font-size: 2.5vh">Goals: </h1>
                <div style="margin-top:2%;; font-size: 2.5vh" v-for="(goal, i) in currentProjects[index]['goals']" :key="goal">
                    <div style="margin-top:2%;">
                        <h1 v-if="currentProjects[index]['goalCompletion'][i]" style="font-size: 2.5vh">● {{ goal }}</h1>
                        <h1 v-else style="font-size: 2.5vh">○ {{ goal }}</h1>
                    </div>
                </div>
            </div>
            <div style="position: absolute; right: 0%; text-align: left; top: 13%; width: 49%">
                <h1>{{ askProjectOutcome }}</h1>
                <b-button v-if="isAdmin" style="margin-top:2%; font-size: 2.5vh"  @click="askProjectOutcome=true">Mark as complete</b-button>
                <img style="object-fit: contain; margin-top:2%; float:left; margin-left: 3%; min-height: 50%; min-width: 50%" v-bind:src='currentProjects[index]["img"]'>
                <h1 style="float: left; margin-top:2%; margin-right: 2%; font-size: 2.5vh; min-width: 24%">{{ currentProjects[index]["description"] }} </h1>
                <h1 style="float: left; margin-top:2.5%; margin-right: 1%; font-size: 2.5vh; min-width: 8%">GitHub Link: </h1>
                <a :href="'//'+`${currentProjects[index]['githubLink']}`" targer="_blank" style="float: left; margin-top:2%; margin-left: 0%; font-size: 2.5vh; min-width: 15%">{{ currentProjects[index]["githubLink"] }}</a>
            </div>
        </div>
        <div v-else>
            <div style="text-align: left; margin-top: 5%; width: 49%">  
                <h1 style="font-size: 2.5vh">{{ pastProjects[index-currentProjects.length]["name"] }} </h1>
                <h1 style="margin-top:2%; font-size: 2.5vh">Field: {{ pastProjects[index-currentProjects.length]["field"] }} </h1>
                <h1 style="margin-top:2%; font-size: 2.5vh">Lead by {{ pastProjects[index-currentProjects.length]["projectLeader"] }} </h1>
                <h1 style="margin-top:2%; font-size: 2.5vh">Project members: </h1>
                <div style="margin-top:2%;" v-for="member in pastProjects[index-currentProjects.length]['projectMembers']" :key="member"><h1 style="margin-top:2%; font-size: 2.5vh">&emsp;{{ member }}</h1></div>
                <h1 style="margin-top:2%; font-size: 2.5vh">Goals: </h1>
                <div style="margin-top:2%;" v-for="(goal) in pastProjects[index-currentProjects.length]['goals']" :key="goal">
                    <div style="margin-top:2%;">
                        <h1 style="font-size: 2.5vh">&emsp; {{ goal }}</h1>
                    </div>
                </div>
            </div>
            <div style="position: absolute; right: 0%; text-align: right; top: 13%; width: 49%">
                <img style="object-fit: contain; margin-top:2%; float:left; margin-left: 3%; min-height: 50%; min-width: 50%" v-bind:src='pastProjects[index-currentProjects.length]["img"]'>
                <h1 style="float: right; margin-top:2%; margin-right: 2%; font-size: 2.5vh; min-width: 49%">{{ pastProjects[index-currentProjects.length]["description"] }} </h1>
                <h1 style="float: left; margin-top:2.5%; margin-right: 1%; font-size: 2.5vh; min-width: 8%">GitHub Link: </h1>
                <a :href="'//'+`${pastProjects[index-currentProjects.length]['githubLink']}`" targer="_blank" style="float: left; margin-top:2%; margin-left: 0%; font-size: 35px; min-width: 15%">{{ pastProjects[index-currentProjects.length]["githubLink"] }}</a>
            </div>
        </div>
        <div v-if="askProjectOutcome" style="position: absolute; z-index: 3; height: 50%; width: 60%; margin: auto; float: center; border: 3px solid black; background-color: white; left: 50%; top: 50%; transform: translateX(-50%) translateY(-50%);">
            <label style="margin-top: 3%" for="result">Result </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="result" v-model="result" /><br>
            <h3 v-if="showResultAlert" style="margin-top: 1%; color: red; font-size: 1.5vh">Please enter the result of the project.</h3>
            <b-button @click="sendForm()">Submit</b-button>
            <h1 @click="askProjectOutcome=false" style="position: absolute; bottom: 1%; right: 1%; font-size: 1.5vh;">close</h1>
        </div>
    </div>
 </template>
 
 <script>
 import { collection, addDoc, getDoc, setDoc, getFirestore, doc } from "firebase/firestore"; 
 import { db } from '../firebase'
 export default {
   data() {
     return {
      currentProjects: this.$store.getters.currentProjects,
      pastProjects: this.$store.getters.pastProjects,
      index: 0,
      isAdmin: true,
      askProjectOutcome: false,
      result: "",
      showResultAlert: false,
     }
   },
   methods: {
    sendForm(){
        if(this.result==""){this.showResultAlert=true}
        else{
            
        }
    }
   },
   mounted() {
    this.index = this.$route.params.id;
    if(this.index > this.currentProjects.length){this.link} 
   }
 }
 </script>
 