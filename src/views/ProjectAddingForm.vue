<template>
    <div>
        <router-link style="position: absolute; left: 1%; top: 3%; font-size: 3vh" to="/projects">Projects</router-link>
        <div style="float: left; text-align: left; margin-left: 5%; font-size: 1.5vh; margin-top: 5%">
            <label style="margin-top: 3%" for="name">Project Name </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="name" v-model="name" /><br>
            <h3 v-if="showNameAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter the name of the project.</h3>
            <label style="margin-top: 3%" for="field">Project field </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="field" v-model="field" /><br>
            <h3 v-if="showFieldAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter the field of AI the project covers..</h3>
            <label style="margin-top: 3%" for="abstract">Abstract </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="abstract" v-model="abstract" /><br>
            <h3 v-if="showAbstractAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter the abstract of the project.</h3>
            <label style="margin-top: 3%" for="description">Description </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="description" v-model="description" /><br>
            <h3 v-if="showDescriptionAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter a description of the project.</h3>
            <label style="margin-top: 3%" for="leader">Project Leader name </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="leader" v-model="projectLeader" /><br>
            <h3 v-if="showLeaderAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter the name of the project leader.</h3>
            <label style="margin-top: 3%" for="mail">Project Leader email </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="mail" v-model="projectLeaderEmail" /><br>
            <h3 v-if="showLeaderEmailAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter the email address of the project leader.</h3>
            <label style="margin-top: 3%" for="phone">Project Leader phone </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="phone" v-model="projectLeaderPhone" /><br>
            <h3 v-if="showLeaderPhoneAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter the phone number of the project leader.</h3>
            <label style="margin-top: 3%" for="members">Members (seperated by a ","): </label>
            <input type="text" id="members" v-model="projectMembers" /><br>
            <label style="margin-top: 3%" for="goals">Goals (seperated by a ",") </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="goals" v-model="goals" /><br>
            <h3 v-if="showGoalsAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter the goals of the project.</h3>
            <label style="margin-top: 3%" for="github">GitHub Link </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="github" v-model="githubLink" /><br>
            <h3 v-if="showGitHubLinkAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter a GitHub link for the project.</h3>
            <!--<label style="margin-top: 3%" for="CV">CV: </label>
            <input type="file" id="CV" ref="file" v-on:change="handleFileUpload()"/>-->
            <b-button @click="sendForm()">Submit</b-button>
        </div>
    </div>
</template>

<script>
import { collection, addDoc, getDoc, setDoc, getFirestore, doc } from "firebase/firestore"; 
import { db } from '../firebase'
export default {
   data() {
     return {
      adding: true,
      name: "",
      field: "",
      abstract: "",
      description: "",
      projectLeader: "",
      projectLeaderEmail: "",
      projectLeaderPhone: "",
      projectMembers: "",
      goals: "",
      githubLink: "",
      img: "",
      //CV: "",
      showNameAlert: false,
      showFieldAlert: false,
      showAbstractAlert: false,
      showDescriptionAlert: false,
      showLeaderAlert: false,
      showLeaderEmailAlert: false,
      showLeaderPhoneAlert: false,
      showGoalsAlert: false,
      showGitHubLinkAlert: false,
     }
     /* name: "Crime Detection System",
        field: "visual detection",
        abstract: "A visual detection system to identify possible criminal activities and report a human operator",
        description: "The goal of this project is to prepare a dataset made of images of lethal weapons and other criminal imagery such as explosions or bleeding. Once the dataset is prepared the AI will be trained to recognize such imagery and then tested for accuracy.",
        projectLeader: "Imam Alimsultanov",
        projectLeaderMail: "imam.alimsultanov@gmail.com",
        projectLeaderPhone: 2345678901,
        projectMembers: ["Imam Alimsultanov", "Imam Alimsultanov2", "Imam Alimsultanov3", "Imam Alimsultanov4"],
        goals: ["Make a dataset", "Train the AI", "Test the AI on images and videos", "Test the AI IRL"],
        goalCompletion: [0, 0, 0, 0],
        githubLink: "github.com/asxvzxzc",
        img
        */
   },
   methods: {
    //handleFileUpload(){
    //  this.CV = this.$refs.file.files[0];
    //},
    sendForm(){
        let valid = true;
        if(this.name==""){this.showNameAlert=true; valid=false}
        else{this.showNameAlert=false}
        if(this.field==""){this.showFieldAlert=true; valid=false}
        else{this.showFieldAlert=false}
        if(this.abstract==""){this.showAbstractAlert=true; valid=false}
        else{this.showAbstractAlert=false}
        if(this.description==""){this.showDescriptionAlert=true; valid=false}
        else{this.showDescriptionAlert=false}
        if(this.projectLeader==""){this.showLeaderAlert=true; valid=false}
        else{this.showLeaderAlert=false}
        if(this.projectLeaderEmail==""){this.showLeaderEmailAlert=true; valid=false}
        else{this.showLeaderEmailAlert=false}
        if(this.projectLeaderPhone==""){this.showLeaderPhoneAlert=true; valid=false}
        else{this.showLeaderPhoneAlert=false}
        if(this.goals==""){this.showGoalsAlert=true; valid=false}
        else{this.showGoalsAlert=false}
        if(this.githubLink==""){this.showGitHubLinkAlert=true; valid=false}
        else{this.showGitHubLinkAlert=false}
        if(valid){
            let projectMembers = this.projectMembers.split(",")
            let goals = this.goals.split(",")
            let goalCompletion = []
            for(let i = 0; i < this.goals.length; i++){goalCompletion.push(0)}
            let project = {
                name: this.name,
                field: this.field,
                abstract: this.abstract,
                description: this.description,
                projectLeader: this.projectLeader,
                projectLeaderEmail: this.projectLeaderEmail,
                projectLeaderPhone: this.projectLeaderPhone,
                projectMembers,
                goals,
                goalCompletion,
                githubLink: this.githubLink,
                img: this.img,
            }
            const firestore = getFirestore()
            if(this.adding){
                try {
                    const projectDoc = doc(firestore, `projects/${project.name}`)
                    setDoc(projectDoc, project)
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            }
            else{
                try {
                    const projectDoc = doc(firestore, `projectProposals/${project.name}`)
                    setDoc(projectDoc, project)
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            }
            this.name = "";
            this.field = "";
            this.abstract = "";
            this.description = "";
            this.projectLeader = "";
            this.projectLeaderEmail = "";
            this.projectLeaderPhone = "";
            this.projectMembers = "";
            this.goals = "";
            this.githubLink = "";
            this.img = "";
    }
   } 
}}
</script>


