<template>
    <div>
        <div style="float: left; text-align: left; margin-left: 5%; font-size: 20px; margin-top: 5%">
            <label style="margin-top: 3%" for="name">Full name </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="name" v-model="fullName" /><br>
            <label style="margin-top: 3%" for="email">Sabanci email </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="email" v-model="email" /><br>
            <label style="margin-top: 3%" for="program">Program / Department </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="program" v-model="program" /><br>
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
            <label style="margin-top: 3%" for="GPA">GPA </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="GPA" v-model="GPA" /><br>
            <label style="margin-top: 3%" for="aiInterest">Have you worked on / took interest in AI in the past? Elaborate on your experience / knowledge </label><span style="color: red">*</span><span>:</span><br>
            <textarea style="width:50%" type="text" id="aiInterest" v-model="aiInterest"></textarea><br>
            <label style="margin-top: 3%" for="clubKnowledge">How did you hear about our club? </label><span style="color: red">*</span><span>:</span><br>
            <textarea style="width:50%" type="text" id="clubKnowledge" v-model="clubKnowledge"></textarea><br>
            <label style="margin-top: 3%" for="clubInterest">Why are you interested in joining our club? </label><span style="color: red">*</span><span>:</span><br>
            <textarea style="width:50%" type="text" id="clubInterest" v-model="clubInterest"></textarea><br>
            <label style="margin-top: 3%" for="linkedIn">Link to your LinkedIn account: </label>
            <input type="text" id="linkedIn" v-model="LinkedIn" /><br>
            <label style="margin-top: 3%" for="github">Link to your GitHub account: </label>
            <input type="text" id="github" v-model="GitHub" /><br>
            <label style="margin-top: 3%" for="CV">CV: </label>
            <input type="file" id="CV" ref="file" v-on:change="handleFileUpload()"/>
            <b-button @click="sendForm()">Submit</b-button>
            <form action="mailto:sadig.gara@sabanciuniv.com" method="post" enctype="text/plain">
                Name:<br>
                <input type="text" name="name"><br>
                E-mail:<br>
                <input type="text" name="mail"><br>
                Comment:<br>
                <input type="text" name="comment" size="50"><br><br>
                <input type="submit" value="Send">
                <input type="reset" value="Reset">
            </form>
        </div>
    </div>
</template>

<script>
import { Email } from "@/smtp.js"
export default {
   data() {
     return {
      fullName: "",
      email: "",
      program: "",
      year: "",
      GPA: "",
      aiInterest: "",
      clubKnowledge: "",
      clubInterest: "",
      LinkedIn: "",
      GitHub: "",
      CV: "",
      showNameAlert: false,
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
    handleFileUpload(){
      this.CV = this.$refs.file.files[0];
    },
    sendForm(){
        let valid = true;
        String.prototype.isNumber = function(){return /^\d+$/.test(this);}
        if(this.fullName=="" || !this.fullName.includes(" ")){this.showNameAlert=true; valid=false}
        else{this.showNameAlert=false}
        if(this.email==""){this.showEmailAlert=true; valid=false}
        else if(!this.email.includes("@sabanciuniv.edu")){this.showSabanciEmailAlert=true; this.showEmailAlert=false; valid=false}
        else{this.showEmailAlert=false; this.showSabanciEmailAlert=false}
        if(this.program==""){this.showProgramAlert=true; valid=false}
        else{this.showProgramAlert=false}
        if(this.year==""){this.showYearAlert=true; valid=false}
        else{this.showYearAlert=false}
        if(this.GPA=="" || !this.GPA.isNumber()){this.showGPAAlert=true; valid=false}
        else{this.showGPAAlert=false}
        if(this.aiInterest==""){this.showAIInterestAlert=true; valid=false}
        else{this.showAIInterestAlert=false}
        if(this.clubKnowledge==""){this.showClubKnowledgeAlert=true; valid=false}
        else{this.showClubKnowledgeAlert=false}
        if(this.clubInterest==""){this.showClubInterestAlert=true; valid=false}
        else{this.showClubInterestAlert=false}
        valid = true;
        if(valid){console.log("stinky")
        }
    }
   } 
}
</script>


