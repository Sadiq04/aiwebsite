<template>
    <div>
        <router-link style="position: absolute; top: 4%; left: 0%; height: 8vh; width: 25vh; font-size: 3vh" to="/">Home</router-link>
        <div style="float: left; text-align: left; margin-left: 5%; font-size: 1.5vh; margin-top: 5%">
            <label style="margin-top: 3%" for="name">Full name </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="name" v-model="fullName" /><br>
            <h3 v-if="showNameAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter your full name.</h3>
            <label style="margin-top: 3%" for="email">Sabanci email </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="email" v-model="email" /><br>
            <h3 v-if="showEmailAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter your email address.</h3>
            <h3 v-if="showSabanciEmailAlert" style="margin-top: 1%; color: red; font-size: 15px">Please make sure you entered your Sabanci email address.</h3>
            <label style="margin-top: 3%" for="email">Phone number </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="email" v-model="phone" /><br>
            <h3 v-if="showPhoneAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter your phone number.</h3>
            <label style="margin-top: 3%" for="program">Program / Department </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="program" v-model="program" /><br>
            <h3 v-if="showProgramAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter your Program/Major.</h3>
            <label style="margin-top: 3%" for="year">Level / Year </label><span style="color: red">*</span><span>:</span>
            <select v-model="year" id="year">
                <option disabled value="">Please select one</option>
                <option>Foundation Year</option>
                <option>Freshman (Year 1)</option>
                <option>Sophomore (Year 2)</option>
                <option>Junior (Year 3)</option>
                <option>Senior (Year 4 or above)</option>
                <option>Master</option>
                <option>Bachelors</option>
                <option>Doctorate</option>
            </select><br>
            <h3 v-if="showYearAlert" style="margin-top: 1%; color: red; font-size: 15px">Please choose a year.</h3>
            <label style="margin-top: 3%" for="GPA">GPA </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="GPA" v-model="GPA" /><br>
            <h3 v-if="showGPAAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter your GPA.</h3>
            <label style="margin-top: 3%" for="aiInterest">Have you worked on / took interest in AI/ML in the past? Elaborate on your experience / knowledge </label><span style="color: red">*</span><span>:</span><br>
            <textarea style="width:50%" type="text" id="aiInterest" v-model="aiInterest"></textarea><br>
            <h3 v-if="showAIInterestAlert" style="margin-top: 1%; color: red; font-size: 15px">Please tell us your interest/experience with AI/ML.</h3>
            <label style="margin-top: 3%" for="clubKnowledge">How did you hear about our club? </label><span style="color: red">*</span><span>:</span><br>
            <textarea style="width:50%" type="text" id="clubKnowledge" v-model="clubKnowledge"></textarea><br>
            <h3 v-if="showClubKnowledgeAlert" style="margin-top: 1%; color: red; font-size: 15px">Please tell us how you heard about the club.</h3>
            <label style="margin-top: 3%" for="clubInterest">Why are you interested in joining our club? </label><span style="color: red">*</span><span>:</span><br>
            <textarea style="width:50%" type="text" id="clubInterest" v-model="clubInterest"></textarea><br>
            <h3 v-if="showClubInterestAlert" style="margin-top: 1%; color: red; font-size: 15px">Please tell us why you are interested in joining out club.</h3>
            <label style="margin-top: 3%" for="linkedIn">Link to your LinkedIn account: </label>
            <input type="text" id="linkedIn" v-model="LinkedIn" /><br>
            <label style="margin-top: 3%" for="github">Link to your GitHub account: </label>
            <input type="text" id="github" v-model="GitHub" /><br>
            <!--<label style="margin-top: 3%" for="CV">CV: </label>
            <input type="file" id="CV" ref="file" v-on:change="handleFileUpload()"/>-->
            <b-button @click="sendForm()">Submit</b-button>
        </div>
    </div>
</template>

<script>
import { Email } from "@/smtp.js"
export default {
   data() {
     return {
      fullName: "",
      phone: "",
      email: "",
      program: "",
      year: "",
      GPA: "",
      aiInterest: "",
      clubKnowledge: "",
      clubInterest: "",
      LinkedIn: "",
      GitHub: "",
      //CV: "",
      showNameAlert: false,
      showPhoneAlert: false,
      showEmailAlert: false,
      showSabanciEmailAlert: false,
      showProgramAlert: false,
      showYearAlert: false,
      showGPAAlert: false,
      showAIInterestAlert: false,
      showClubKnowledgeAlert: false,
      showClubInterestAlert: false,
      Email,
     }
     /* Name, Surname: 
        Sabanci email: 
        Program/Department: 
        Level/Year: 
        Level of education: (Undergraduate/Graduate/Master)
        GPA: (Kinda mixed on this one)
        Have you worked on/took interest in AI in the past?:
        How did you hear about our club?: 
        Why are you interested in joining our club?: 
        LinkedIn: (optional)
        Github: (optional)
        CV: (optional)
        */
   },
   methods: {
    //handleFileUpload(){
    //  this.CV = this.$refs.file.files[0];
    //},
    sendForm(){
        let valid = true;
        String.prototype.isNumber = function(){return /^\d+$/.test(this);}
        if(this.fullName=="" || !this.fullName.includes(" ")){this.showNameAlert=true; valid=false}
        else{this.showNameAlert=false}
        if(this.phone==""){this.showPhoneAlert=true; valid=false}
        else{this.showPhoneAlert=false}
        if(this.email==""){this.showEmailAlert=true; valid=false}
        else if(!this.email.includes("@sabanciuniv.edu")){this.showSabanciEmailAlert=true; this.showEmailAlert=false; valid=false}
        else{this.showEmailAlert=false; this.showSabanciEmailAlert=false}
        if(this.program==""){this.showProgramAlert=true; valid=false}
        else{this.showProgramAlert=false}
        if(this.year==""){this.showYearAlert=true; valid=false}
        else{this.showYearAlert=false}
        if(this.GPA==""){this.showGPAAlert=true; valid=false}
        else{this.showGPAAlert=false}
        if(this.aiInterest==""){this.showAIInterestAlert=true; valid=false}
        else{this.showAIInterestAlert=false}
        if(this.clubKnowledge==""){this.showClubKnowledgeAlert=true; valid=false}
        else{this.showClubKnowledgeAlert=false}
        if(this.clubInterest==""){this.showClubInterestAlert=true; valid=false}
        else{this.showClubInterestAlert=false}
        if(valid){
            /*const res = fetch('http://localhost:465',
            {
                mode: 'no-cors',
                method: 'POST',
                headers: {
                    "Content-Type": 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify({fullName: this.fullName,
                        email: this.email,
                        program: this.program,
                        year: this.year,
                        GPA: this.GPA,
                        aiInterest: this.aiInterest,
                        clubKnowledge: this.clubKnowledge,
                        clubInterest: this.clubInterest,
                        LinkedIn: this.LinkedIn,
                        GitHub: this.GitHub,
                        //CV: this.CV,
                    })
            })*/
            //console.log(application)
            this.$store.commit('addMemberApplication', {   
                fullName: this.fullName,
                email: this.email,
                program: this.program,
                year: this.year,
                GPA: this.GPA,
                aiInterest: this.aiInterest,
                clubKnowledge: this.clubKnowledge,
                clubInterest: this.clubInterest,
                LinkedIn: this.LinkedIn,
                GitHub: this.GitHub,
                //CV: this.CV,
            })
            this.fullName = "";
            this.phone = "";
            this.email = "";
            this.program = "";
            this.year = "";
            this.GPA = "";
            this.aiInterest = "";
            this.clubKnowledge = "";
            this.clubInterest = "";
            this.LinkedIn = "";
            this.GitHub = "";
        }
    }
   } 
}
</script>


