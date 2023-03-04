<template>
    <div>
        <!--<div style="float: left; text-align: left; margin-left: 5%; font-size: 1.5vh; margin-top: 5%">
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
            <label style="margin-top: 3%" for="CV">CV: </label>
            <input type="file" id="CV" ref="file" v-on:change="handleFileUpload()"/>
            <b-button @click="sendForm()">Submit</b-button>
        </div>-->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <div class="join-us-three">
          <b-container fluid>
            <div class="flex-wrapper-seven"></div>
            <div class="relative-wrapper-one">
                <div class="flex-wrapper-five" style="background-color: rgba(207,207,207,1);">
                  <div class="flex-wrapper-six"></div>
                  <p class="join-us-two" style="z-index: 2">Join Us</p>
                  <p class="become-a-part-of-our-club-participate-i">
                    Apply to becoming a member of the club and earn the chance to use top level AI equipment and be directly involved in developing projects related to AI/ML development 
                  </p>
                  <img
                  alt=""
                  class="rectangle-31"
                  src="https://static.overlay-tech.com/assets/1cc15398-f828-48ad-9f49-ca5c88a14079.png"
                  />
                </div>
            </div>
          </b-container>
          <b-container style="overflow:hidden">
            <b-row align-h="center">
              <div align-y="center" style="z-index: 2;" class="group-17">
                <p class="your-name">Your Name *</p>
                <div class="flex-wrapper-eight">
                  <input class="flex-wrapper-one" v-model="firstName" placeholder="First Name" />
                  <input class="flex-wrapper-two" v-model="lastName" placeholder="Last Name" />
                </div>
              </div>
            </b-row>
            <b-row>
              <h3 v-if="showFirstNameAlert" style="margin-top: 1%; color: red; font-size: 15px; width:50%">Please enter your first name.</h3>
              <h3 v-if="showLastNameAlert" style="margin-top: 1%; margin-left: 0.5%; color: red; font-size: 15px; width:45%">Please enter your last name.</h3>
            </b-row>
            <div class="group-16">
              <p class="your-name">Your Sabanci Email *</p>
              <input type="email" v-model="email" class="flex-wrapper-three" />
              <h3 v-if="showEmailAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter your email address.</h3>
              <h3 v-if="showSabanciEmailAlert" style="margin-top: 1%; color: red; font-size: 15px">Please make sure you entered your Sabanci email address.</h3>
              <p class="your-name">Phone number: *</p>
              <input type="phone" v-model="phone" class="flex-wrapper-three" />
              <h3 v-if="showPhoneAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter your phone number.</h3>
              <p class="your-name">Program: *</p>
              <input type="text" v-model="program" class="flex-wrapper-three" placeholder="ex. BSCS" />
              <h3 v-if="showProgramAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter your Program/Major.</h3>
            </div>
            <label class="your-name" for="year">Level / Year: * </label>
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
            <p class="your-name">GPA: *</p>
            <input type="number" step="0.1" min="1" max="4" v-model="GPA" style="padding-right: 2%;" class="flex-wrapper-three" />
            <h3 v-if="showGPAAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter your GPA.</h3>
            <div class="group-15">
            <p class="your-name">Please tell us about your interest/experience with AI/ML. *</p>
            <textarea cols="140" v-model="aiInterest" class="flex-wrapper-four"></textarea>
            <h3 v-if="showAIInterestAlert" style="margin-top: 1%; color: red; font-size: 15px">Please tell us your interest/experience with AI/ML.</h3>
            <p class="your-name">How did you hear about our club? *</p>
            <textarea cols="140" v-model="clubKnowledge" class="flex-wrapper-four"></textarea>
            <h3 v-if="showClubKnowledgeAlert" style="margin-top: 1%; color: red; font-size: 15px">Please tell us how you heard about the club.</h3>
            <p  class="your-name">Why are you interested in joining our club? *</p>
            <textarea cols="140" v-model="clubInterest" class="flex-wrapper-four"></textarea>
            <h3 v-if="showClubInterestAlert" style="margin-top: 1%; color: red; font-size: 15px">Please tell us why you are interested in joining out club.</h3>
            <p class="your-name">GitHub: </p>
            <input type="text" v-model="GitHub" class="flex-wrapper-three" placeholder="GitHub link" />
            <p class="your-name">LinkedIn: </p>
            <input type="text" v-model="LinkedIn" class="flex-wrapper-three" placeholder="LinkedIn link" />
            </div>
          </b-container>
          <b-container>
            <b-row align-h="center">
              <div class="submit-button">
                <p @click="sendForm()" class="submit">Submit</p>
              </div>
            </b-row>
          </b-container>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import VueTelInput from 'vue-tel-input'
const VuePhoneNumberInput = window['vue-phone-number-input'];
Vue.use(VueTelInput)
Vue.component('vue-tel-input', VueTelInput.VueTelInput)
//Vue.component('vue-phone-number-input', VuePhoneNumberInput);
import { Email } from "@/smtp.js"
import memberApplications from '@/assets/memberApplications';
import { collection, addDoc, getDoc, setDoc, getFirestore, doc } from "firebase/firestore"; 
import { db } from '../firebase'
export default {
   data() {
     return {
      firstName: "",
      lastName: "",
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
      showFirstNameAlert: false,
      showLastNameAlert: false,
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
        if(this.firstName==""){this.showFirstNameAlert=true; valid=false}
        else{this.showFirstNameAlert=false}
        if(this.lastName==""){this.showLastNameAlert=true; valid=false}
        else{this.showLastNameAlert=false}
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
            let application = {    
                firstName: this.firstName,
                lastName: this.lastName,
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
            }
            //console.log(application)
            const firestore = getFirestore()
            try {
                const applicationDoc = doc(firestore, `memberApplications/${application.fullName}`)
                setDoc(applicationDoc, application)
            } catch (e) {
                console.error("Error adding document: ", e);
            }
            this.firstName = "";
            this.lastName = "";
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
            
            //})
        }
    }
   } 
}
</script>


<style scoped>
textarea {
  max-width: 100%;
}
.join-us-three {
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.relative-wrapper-one {
  position: relative;
}
.join-us-two {
  font-family: "Cinzel";
  font-size: 60px;
  font-weight: 400;
  line-height: normal;
  color: gray;
  text-align: center;
  position: relative;
  width: 100%;
}
.group-17 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
}
.your-name {
  font-family: "Inter";
  font-size: 24px;
  font-weight: 200;
  line-height: normal;
  color: gray;
  margin-top: 5%;
}
.flex-wrapper-eight {
  display: flex;
  align-items: flex-start;
}
.flex-wrapper-one {
  padding: 2% 28% 2% 3%;
  display: flex;
  align-items: center;
  border: 2px solid rgba(225, 225, 225, 1);
}
.first-name {
  font-family: "Inter";
  font-size: 22px;
  font-weight: 200;
  line-height: normal;
  color: rgba(0, 0, 0, 0.3);
}
.flex-wrapper-two {
  padding: 2% 28% 2% 3%;
  display: flex;
  align-items: center;
  border: 2px solid rgba(225, 225, 225, 1);
  margin-left: 4%;
}
.flex-wrapper-five {
  background-size: 100%;
  background-position: center;
  background-image: url("https://static.overlay-tech.com/assets/5a0d0b7d-cd26-48e7-ab12-c32c44a0620a.png");
  position: relative;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat
}
.rectangle-31 {
  width: 100%;
  height: 100%;
  position: relative;
}
.flex-wrapper-six {
  background: linear-gradient(
    180deg,
    rgba(255,255,255,1) 0%,
    rgba(207,207,207,1) 50%
  );
  margin-top: 3%;
  padding: 4% 10% 0% 0%;
  display: flex;
  align-items: flex-start;
  position: relative;
}
.become-a-part-of-our-club-participate-i {
  height: 100%;
  width: 25%;
  padding-left: 15%;
  padding-top: 10%;
  font-family: "Inter";
  font-size: 24px;
  font-weight: 200;
  line-height: normal;
  color: gray;
  display: flex;
  align-items: center;
}
.group-16 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.flex-wrapper-three {
  padding: 2% max(80%) 2% 3%;
  align-items: center;
  border: 2px solid rgba(225, 225, 225, 1);
}
.group-15 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%
}
.submit-button {
  margin-top: 5%;
  width: 10%;
  height: 10%;
  margin-bottom: 5%;
  border-radius: 5px;
  padding: 1% 0% 0% 1.5%;
  display: flex;
  align-items: center;
  border: 3px solid rgba(84, 84, 84, 1);
}
.submit-button:hover {
  margin-top: 5%;
  width: 10%;
  height: 10%;
  margin-bottom: 5%;
  border-radius: 5px;
  padding: 1% 0% 0% 1.5%;
  display: flex;
  align-items: center;
  border: 3px solid rgba(84, 84, 84, 1);
  color: white;
  transition: background-color 0.5s, color 0.5s;
  background-color: black;
  }
 
</style>
