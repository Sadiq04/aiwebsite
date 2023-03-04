<template>
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!--<div style="float: left; text-align: left; margin-left: 5%; font-size: 1.5vh; margin-top: 5%; width: 100%">
            <h1 style="font-size: 5vh">Member Login</h1>
            <label style="margin-top: 3%" for="email">Sabanci email </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="email" v-model="email" /><br>
            <h3 v-if="showEmailAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter your email address.</h3>
            <h3 v-if="showSabanciEmailAlert" style="margin-top: 1%; color: red; font-size: 15px">Please make sure you entered your Sabanci email address.</h3>
            <h3 v-if="showMemberEmailAlert" style="margin-top: 1%; color: red; font-size: 15px">Please make sure you have made a first time login.</h3>            
            <label style="margin-top: 3%" for="password">Password </label><span style="color: red">*</span><span>:</span>
            <input type="password" id="password" v-model="password" /><br>        
            <h3 v-if="showPasswordAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter a password.</h3>
            <b-button style="margin-top: 1%" @click="sendForm()">Submit</b-button>
            <div style="width: 100%">
                <router-link style="margin-top: 3%; font-size:2vh; display: inline-block;" to="/registration">First time logging in? Register a password here.</router-link><h1 style="font-size: 2vh; display: inline-block;">&nbsp; (For students whose applications were approved)</h1>
            </div>
        </div>-->
      <b-container>
        <b-row style="padding-top:10%" align-h="center" class="log-in-two">
            <p class="your-account">Your Account</p>
            <p class="welcome-back">Welcome back!</p>
            <input class="group-16" v-model="email" placeholder="Sabanci Email" />
            <h3 v-if="showEmailAlert" style="margin-top: 1%; color: red; font-size: 15px; margin-left: 15%">Please enter your email address.</h3>
            <h3 v-if="showSabanciEmailAlert" style="margin-top: 1%; color: red; font-size: 15px; margin-left: 15%">Please make sure you entered your Sabanci email address.</h3>
            <h3 v-if="showMemberEmailAlert" style="margin-top: 1%; color: red; font-size: 15px; margin-left: 15%">Please make sure you have made a first time login.</h3>  
            <input class="group-17" v-model="password" placeholder="Password" />
            <h3 v-if="showPasswordAlert" style="margin-top: 1%; color: red; font-size: 15px; margin-left: 15%">Please enter a password.</h3>
            <div @click="sendForm()" class="submit-button">
                <p class="log-in">Log In</p>
            </div>
            <router-link to="registration"><p class="dont-have-an-account-you-can-sign-up-f">For first time member login click here.</p></router-link>
            <div class="relative-wrapper-one">
            </div>
        </b-row>
      </b-container>
    </div>
</template>

<script>
import store from '@/store/index';
import { Email } from "@/smtp.js"
import bcrypt from 'bcryptjs'
import memberApplications from '@/assets/memberApplications';
export default {
   data() {
     return {
      members: this.$store.getters.members,
      email: "",
      password: "",
      showEmailAlert: false,
      showSabanciEmailAlert: false,
      showMemberNotRegisteredAlert: false,
      showMemberEmailAlert: false,
      showPasswordAlert: false,
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
        if(this.email==""){this.showEmailAlert=true; valid=false}
        else if(!this.email.includes("@sabanciuniv.edu")){this.showSabanciEmailAlert=true; this.showEmailAlert=false; valid=false}
        else{this.showEmailAlert=false; this.showSabanciEmailAlert=false}
        if(this.password==""){this.showPasswordAlert=true; valid=false}
        else{this.showPasswordAlert=false;}
        if(valid){
            /*let memberExists = false;
            for(let i=0; i < this.members.length; i++){
                if(this.members[i].email==this.email && this.members[i].password==null){
                    memberExists = true;
                    const bcrypt = require('bcrypt');
                    const saltRounds = 12;
                    bcrypt.hash(this.password, saltRounds, function(err, hash) {
                        store.dispatch('login', {email: this.members[i].email, password: hash})
                        console.log(hash)
                    });
                }
                else if(this.members[i].password!=null){
                    this.showMemberIsRegisteredAlert=true;
                }
            }
            if(!memberExists){this.showMemberEmailAlert=true}
            */
            const saltRounds = 12;
            //bcrypt.hash(this.password, saltRounds, function(err, hash) {
                store.dispatch('login', {email: this.email, password: this.password})
            //});
            this.email = "";
            this.password = "";
        }
    }
   } 
}
</script>

<style scoped>
.log-in-two {
  background-color: white;
  padding: 32px 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.your-account {
  font-family: "Cinzel";
  font-size: 60px;
  font-weight: 400;
  line-height: normal;
  color: gray;
  text-align: center;
}
.welcome-back {
  width: 100%;
  font-family: "Inter";
  font-size: 24px;
  font-weight: 200;
  line-height: normal;
  color: gray;
  text-align: center;
  margin-top: 3%;
}
.group-16 {
  padding: 3% 0% 3% 2%;
  display: flex;
  align-items: center;
  border: 2px solid rgba(225, 225, 225, 1);
  margin-top: 3%;
  max-width: 70%;
  margin-left: 15%;
  margin-right: 15%;
}
.username-or-email {
  font-family: "Inter";
  font-size: 24px;
  font-weight: 200;
  line-height: normal;
  color: rgba(0, 0, 0, 0.3);
}
.group-17 {
  padding: 3% 0% 3% 2%;
  display: flex;
  align-items: center;
  border: 2px solid rgba(225, 225, 225, 1);
  margin-top: 2%;
  max-width: 70%;
  margin-left: 15%;
  margin-right: 15%;
}
.rectangle-78 {
  width: 46px;
  height: 46px;
  background-color: white;
}
.submit-button {
  border-radius: 5px;
  padding: 0.5% 10% 0% 0%;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  color: black;
  align-items: center;
  position: relative;
  border: 2px solid black;
  margin-top: 3%;
  width: 10%;
  margin-left: 45%;
  margin-right: 45%;
}
.submit-button:hover {
  border-radius: 5px;
  padding: 0.5% 10% 0% 0%;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  align-items: center;
  position: relative;
  border: 2px solid rgba(255, 255, 255, 1);
  transition: background-color 0.5s, color 0.5s;
  color: white;
  background-color: black;
  border: 3px solid black;
  margin-top: 3%;
  width: 10%;
  margin-left: 45%;
  margin-right: 45%;
  
}
.log-in {
  width: 120.41px;
  font-family: "Inter";
  font-size: 22px;
  font-weight: 400;
  line-height: normal;
  color: rgba(84, 84, 84, 1);
  text-align: center;
}
.log-in:hover {
  width: 120.41px;
  font-family: "Inter";
  font-size: 22px;
  font-weight: 400;
  line-height: normal;
  color: white;
  text-align: center;
}
.dont-have-an-account-you-can-sign-up-f {
  text-align: center;
  font-family: "Inter";
  font-size: 22px;
  font-weight: 200;
  line-height: normal;
  color: gray;
  margin-top: 3%;
}
.relative-wrapper-one {
  position: relative;
}
.rectangle-35 {
  width: 1302px;
  height: 249px;
  position: absolute;
  right: 266px;
  bottom: -43px;
}
.bottom-bar {
  background-color: black;
  padding: 55px 67px 48px 844px;
  display: flex;
  align-items: flex-start;
  position: relative;
}
.flex-wrapper-two {
  margin-right: 683px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contact-us {
  font-family: "Inter";
  font-size: 24px;
  font-weight: 200;
  line-height: normal;
  color: white;
  margin-bottom: 26px;
}
.powered-by-squared-space {
  font-family: "Inter";
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  color: white;
}
.back-to-top-two {
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.back-to-top-arrow {
  width: 36px;
  height: 18px;
  margin-bottom: 14px;
}
.back-to-top {
  font-family: "Inter";
  font-size: 18px;
  font-weight: 300;
  line-height: normal;
  color: white;
  text-align: center;
}
</style>
