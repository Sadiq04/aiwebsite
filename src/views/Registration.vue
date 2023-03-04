<template>
    <div>
        <!--<div style="float: left; text-align: left; margin-left: 5%; font-size: 1.5vh; margin-top: 5%">
            <label style="margin-top: 3%" for="email">Sabanci email </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="email" v-model="email" /><br>
            <h3 v-if="showEmailAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter your email address.</h3>
            <h3 v-if="showSabanciEmailAlert" style="margin-top: 1%; color: red; font-size: 15px">Please make sure you entered your Sabanci email address.</h3>
            <h3 v-if="showMemberEmailAlert" style="margin-top: 1%; color: red; font-size: 15px">This email does not belong to an approved club member.</h3>       
            <h3 v-if="showMemberIsRegisteredAlert" style="margin-top: 1%; color: red; font-size: 15px">There is already a password associated to this email address, please consider using the normal login instead.</h3>            
            <label style="margin-top: 3%" for="password">Password </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="password" v-model="password" /><br>
            <h3 v-if="showPasswordDescription" style="margin-top: 1%; color: gray; font-size: 15px">A password must be at least 8 characters long and contain both lower and uppercase letters, digits</h3>            
            <h3 v-if="showPasswordAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter a password.</h3>
            <h3 v-if="showPasswordLengthAlert" style="margin-top: 1%; color: red; font-size: 15px">Please make sure your password is at least 8 characters long.</h3>
            <h3 v-if="showPasswordNoUpperAlert" style="margin-top: 1%; color: red; font-size: 15px">Please make sure the password has uppercase letters.</h3>
            <h3 v-if="showPasswordNoLowerAlert" style="margin-top: 1%; color: red; font-size: 15px">Please make sure the password has lowercase letters.</h3>
            <h3 v-if="showPasswordNoDigitsAlert" style="margin-top: 1%; color: red; font-size: 15px">Please make sure the password you entered has digits.</h3>
            <h3 v-if="showPasswordNoSymbolsAlert" style="margin-top: 1%; color: red; font-size: 15px">Please make sure the password you entered has special symbols</h3>
            <label style="margin-top: 3%" for="passwordRepeat">Confirm Password </label><span style="color: red">*</span><span>:</span>
            <input type="password" id="passwordRepeat" v-model="passwordRepeat" /><br>
            <h3 v-if="showPasswordRepeatAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter your password again.</h3>
            <h3 v-if="showPasswordRepeatMatchAlert" style="margin-top: 1%; color: red; font-size: 15px">The password confirmation must match the password.</h3>
            <b-button @click="sendForm()">Submit</b-button>
        </div>-->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <b-container>
          <b-row style="padding-top:10%" align-h="center" class="sign-up-two">
              <p class="your-account">Your Account</p>
              <p class="is-it-your-first-time-here-you-can-crea">
                  Has you membership application been approved? Login from below to access your profile.
              </p>
              <input class="group-16" placeholder="Email" />
              <input class="group-17" placeholder="Password" />
              <input class="group-18" placeholder="Password again">
              <div @click="sendForm()" class="submit-button">
                  <p class="sign-up">Sign Up</p>
              </div>
              <router-link to="/login"><p class="already-have-an-account-you-can-log-in">Have you logged in before? Log in normally from here.</p></router-link>
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
import members from '@/assets/members'
export default {
   data() {
     return {
      members,  
      email: "",
      password: "",
      passwordRepeat: "",
      showNameAlert: false,
      showEmailAlert: false,
      showSabanciEmailAlert: false,
      showMemberEmailAlert: false,
      showMemberIsRegisteredAlert: false,
      showPasswordAlert: false,
      showPasswordLengthAlert: false,
      showPasswordDescription: true,
      showPasswordNoUpperAlert: false,
      showPasswordNoLowerAlert: false,
      showPasswordNoDigitsAlert: false,
      showPasswordNoSymbolsAlert: false,
      showPasswordRepeatAlert: false,
      showPasswordRepeatMatchAlert: false,
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
        if(this.password==""){this.showPasswordAlert=true; this.showPasswordLengthAlert=false; this.showPasswordNoUpperAlert=false; this.showPasswordNoLowerAlert=false; this.showPasswordNoDigitsAlert=false; this.showPasswordNoSymbolsAlert=false; this.showPasswordDescription=false; valid=false}
        else if(this.password.length < 8){this.showPasswordAlert=false; this.showPasswordLengthAlert=true; this.showPasswordNoUpperAlert=false; this.showPasswordNoLowerAlert=false; this.showPasswordNoDigitsAlert=false; this.showPasswordNoSymbolsAlert=false; this.showPasswordDescription=false; valid=false}
        else if(!/[A-Z]/.test(this.password)){this.showPasswordAlert=false; this.showPasswordLengthAlert=false; this.showPasswordNoUpperAlert=true; this.showPasswordNoLowerAlert=false; this.showPasswordNoDigitsAlert=false; this.showPasswordNoSymbolsAlert=false; this.showPasswordDescription=false; valid=false}
        else if(!/[a-z]/.test(this.password)){this.showPasswordAlert=false; this.showPasswordLengthAlert=false; this.showPasswordNoUpperAlert=false; this.showPasswordNoLowerAlert=true; this.showPasswordNoDigitsAlert=false; this.showPasswordNoSymbolsAlert=false; this.showPasswordDescription=false; valid=false}
        else if(!/\d/.test(this.password)){this.showPasswordAlert=false; this.showPasswordLengthAlert=false; this.showPasswordNoUpperAlert=false; this.showPasswordNoLowerAlert=false; this.showPasswordNoDigitsAlert=true; this.showPasswordNoSymbolsAlert=false; this.showPasswordDescription=false; valid=false}
        else if(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/.test(this.password)){this.showPasswordAlert=false; this.showPasswordLengthAlert=false; this.showPasswordNoUpperAlert=false; this.showPasswordNoLowerAlert=false; this.showPasswordNoDigitsAlert=false; this.showPasswordNoSymbolsAlert=true; this.showPasswordDescription=false; valid=false}
        else{this.showPasswordAlert=false; this.showPasswordLengthAlert=false; this.showPasswordNoUpperAlert=false; this.showPasswordNoLowerAlert=false; this.showPasswordNoDigitsAlert=false; this.showPasswordNoSymbolsAlert=false; this.showPasswordDescription=true;}
        if(this.passwordRepeat==""){this.showPasswordRepeatAlert=true; this.showPasswordRepeatMatchAlert=false; valid = false}
        else if(this.passwordRepeat != this.password){this.showPasswordRepeatAlert=false; this.showPasswordRepeatMatchAlert=true; valid=false}
        else{this.showPasswordRepeatAlert=false; this.showPasswordRepeatMatchAlert=false}
        if(valid){
            let members = this.$store.getters.members
            let memberExists = false;
            for(let i=0; i < members.length; i++){
                console.log(members)
                if(members[i].email==this.email && !members[i].regisered==false){
                    memberExists = true;
                    //const bcrypt = require('bcrypt');
                    //const saltRounds = 12;
                    //bcrypt.hash(this.password, saltRounds, function(err, hash) {
                        let login = {email: this.email, password: this.password}
                        store.dispatch('register', login)
                        this.$store.commit('setRegistered', i)
                    //});
                    break;
                }
                else if(members[i].email==this.email && members[i].registered){
                    memberExists=true;
                    this.showMemberIsRegisteredAlert=true;
                    break;
                }
            }
            if(!memberExists){this.showMemberEmailAlert=true}
            else{
                this.email = "";
                this.password = "";
                this.passwordRepeat = "";
            }
        }
    }
   } 
}
</script>

<style scoped>
.sign-up-two {
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
.is-it-your-first-time-here-you-can-crea {
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
.username {
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
.group-18 {
  padding: 3% 0% 3% 2%;
  display: flex;
  align-items: center;
  border: 2px solid rgba(225, 225, 225, 1);
  margin-top: 2%;
  max-width: 70%;
  margin-left: 15%;
  margin-right: 15%;
}
/*
.captcha-two {
  background-color: rgba(233, 233, 233, 1);
  margin-bottom: 50px;
  margin-left: 500px;
  padding: 19px 15px 11px 22px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.captcha {
  font-family: "Inter";
  font-size: 22px;
  font-weight: 400;
  line-height: normal;
  color: black;
  text-align: center;
  margin-bottom: 4px;
}
*/
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
.sign-up {
  width: 120.41px;
  font-family: "Inter";
  font-size: 22px;
  font-weight: 400;
  line-height: normal;
  color: rgba(84, 84, 84, 1);
  text-align: center;
}
.sign-up:hover {
  width: 120.41px;
  font-family: "Inter";
  font-size: 22px;
  font-weight: 400;
  line-height: normal;
  color: white;
  text-align: center;
}
.already-have-an-account-you-can-log-in {
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