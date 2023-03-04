<template>
    <!--<div style="height: 600%">
        <div id="nav bar" style="position: fixed; width: 100%; height: 10%; top:0%; background-color: black; float: right; z-index: 1;">
            <router-link v-if="user!=null" to="/account" style="margin: 0; position: relative; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%); right: 9%; color: white; margin-right: 0; margin-left: auto; float: right;"><b-button variant="info" style="font-size:2vh" size="sm">Account</b-button></router-link>
            <router-link v-if="user==null" to="/login" style="margin: 0; position: relative; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%); right: 9%; color: white; margin-right: 0; margin-left: auto; float: right;"><b-button @click="logUser()" variant="info" style="font-size:2vh" size="sm">Login</b-button></router-link>
            <b-button v-if="user!=null" variant="info" @click="logout()" style="margin: 0; position: relative; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%); right: 9%; color: white; font-size: 2vh; margin-right: 0; margin-left: auto; float: right;" size="sm">Logout</b-button>
            <a href="#Contact" style="margin: 0; position: relative; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%); right: 12%; color: white; font-size: 3vh; margin-right: 0; margin-left: auto; float: right;">Contact us</a>
            <a href="#Join the team" style="margin: 0; position: relative; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%); right: 15%; color: white; font-size: 3vh; margin-right: 0; margin-left: auto; float: right;">Join us</a>
            <a href="#Sponsors" style="margin: 0; position: relative; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%); right: 18%; color: white; font-size: 3vh; margin-right: 0; margin-left: auto; float: right;">Sponsors</a>
            <a href="#The Team" style="margin: 0; position: relative; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%); right: 21%; color: white; font-size: 3vh; margin-right: 0; margin-left: auto; float: right;">The Team</a>
            <a href="#Projects" style="margin: 0; position: relative; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%); right: 24%; color: white; font-size: 3vh; margin-right: 0; margin-left: auto; float: right;">Projects</a>
            <a href="#AI info" style="margin: 0; position: relative; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%); right: 27%; color: white; font-size: 3vh; margin-right: 0; margin-left: auto; float: right;">What is an AI</a>
            <a href="#Who we are" style="margin: 0; position: relative; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%); right: 30%; color: white; font-size: 3vh; margin-right: 0; margin-left: auto; float: right;">Who we are</a>
            <h1 style="margin: 0; position: relative; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%); right: 3%; color: white; font-size: 2.5vh; margin-right: 0; margin-left: auto; float: left;">(Insert club logo)</h1>
        </div>    
        <div style="position: absolute; top: 0%;" id="Who we are"></div>
        <div style="position: absolute; top: 100%;" id="AI info"></div>
        <div style="position: absolute; top: 200%;" id="Projects"></div>
        <div style="position: absolute; top: 300%;" id="The Team"></div>
        <div style="position: absolute; top: 400%;" id="Sponsors"></div>
        <div style="position: absolute; top: 450%;" id="Join the team"></div>
        <div style="position: absolute; top: 500%;" id="Contact"></div>

        <div style="position: absolute; top: 40%; left: 50%; transform: translateX(-50%) translateY(-50%);">
            <h1 style="font-size: 5vh">Who we are. What we do.</h1>
            <h1 style="font-size: 2.5vh;">We are a group of passionate students who are interested in AI/ML development and deployment. </h1>
            <h1 style="font-size: 2.5vh;">Our mission is to foster a community of like-minded individuals who can come together to share ideas, collaborate on projects, and push the boundaries of what is possible with AI.</h1>
            <h1 style="font-size: 2.5vh;">We will hold weekly meetings, workshops, conferences as well as learning sessions, sponsored by companies that are pioneers in the AI/ML areas.</h1>
            <h1 style="font-size: 2.5vh;">(Insert group photo)</h1>
        </div>
        <div style="position: absolute; top: 125%">
            <h1 style="position: absolute; font-size: 5vh; bottom: 110%;left: 50%; transform: translateX(-50%) translateY(-50%);">What is an AI?</h1>
            <h1 style="text-align: left; margin-left: 5%; margin-top: 5%; width: 50%; font-size: 2.5vh">An AI, or artificial intelligence, is a computer system that is designed to simulate human intelligence and thought processes. This can include tasks such as problem solving, decision making, and learning. AIs can be programmed to perform a wide range of tasks, from simple automation to complex decision-making and analysis. They can be found in many different applications, from self-driving cars to virtual personal assistants.</h1>
            <img style="width:35%; position:absolute; right: 5%; top: 0px" alt="AI image" src="../assets/ai-technology-brain-background-digital-transformation-concept.jpg">
            <router-link to="/aiChatbox"><b-button variant="info">Try out an AI chatbox</b-button></router-link>
        </div>
        <div style="position: absolute; top: 230%; left: 50%; transform: translateX(-50%) translateY(-50%);">
            <h1 style="font-size: 5vh">Projects</h1>
            <h1 style="font-size: 2.5vh">As an AI club we offer the possibility to directly work on projects related to AI/ML. If you would like the chance to work on such projects, or if you are interested in seeing what we have done, click the button below.</h1>
            <router-link to="/projects"><b-button variant="info">Projects</b-button></router-link>
        </div> 
        <div style="position: absolute; top: 330%; left: 50%; transform: translateX(-50%) translateY(-50%);">
            <h1 style="font-size: 5vh">The team:</h1>
            <h1 style="font-size: 2.5vh">(To be decided what we will put here)</h1>
        </div>
        <div style="position: absolute; top: 450%; left: 50%; transform: translateX(-50%) translateY(-50%);">
            <h1 style="font-size: 5vh">Our Sponsor: </h1>
            <img alt="NVidia logo" src="../assets/01-nvidia-logo-vert-500x200-2c50-d.png">
        </div>
        <div style="position: absolute; top: 500%; left: 50%; transform: translateX(-50%) translateY(-50%);">
            <h1 style="font-size: 5vh">Join us:</h1>
            <h1 style="font-size: 2.5vh">If you're interested in joining our club and becoming a part of our community, we'd love to hear from you. Let's work together to shape the future of AI.</h1>
            <router-link to="/applicationForm"><b-button variant="info">Join the club</b-button></router-link>
            <router-link to="/viewApplications"><b-button variant="info">Applications</b-button></router-link>
        </div>
        <div style="position: absolute; top: 550%; left: 50%; text-align: left; transform: translateX(-50%) translateY(-50%);">
            <h1 style="font-size: 5vh">Contact us: </h1>
            <h1 style="font-size: 2.5vh">&emsp; Mail: (Insert contact mail)</h1>
            <h1 style="font-size: 2.5vh">&emsp; Phone Number: (Insert contact phone number)</h1>
        </div>-->
        <div class="landing-page" style="width: 100%; z-index: 1;">
            <b-container fluid class="flex-wrapper-five" >
              <b-row style="width: 100%">
                <b-col>
                    <div style="margin-top: 20%; margin-bottom:20%; margin-left: 0%; margin-right: 0%;" >
                        <p class="ai-sabanci">AI &#64; SABANCI</p>
                        <p class="where-dreams-come-true-baby" style="">
                            Where dreams come true!
                        </p>
                    </div>
                </b-col>
              </b-row>
            </b-container>
            <div class="rectangle-92"></div>
            <b-container fluid class="flex-wrapper-six" style="width: 100%">
                <div class="flex-wrapper-nine">
                    <div class="workshops">
                    <p class="ai-workshops">AI Workshops</p>
                    <p
                        class="we-organize-workshops-regarding-deep-lea"
                    >
                        We organize workshops regarding Deep Learning,
                        High-performance computing, and similar topics,
                        where anyone can join and learn from our
                        esteemed lecturers.
                    </p>
                    <router-link to="/workshops"><p class="read-more">Read More</p></router-link>
                    </div>
                    <div class="workshops">
                    <p class="ai-workshops">AI Projects</p>
                    <p
                        class="in-our-club-a-number-of-ai-projects-are"
                    >
                        In our club, a number of AI projects are carried
                        out simultaneously, ranging from Machine
                        Learning to Bioinformatics.
                    </p>
                    <router-link to="/projects"><p class="read-more-two">Read More</p></router-link>
                    </div>
                </div>
            </b-container>
            <b-container fluid class="flex-wrapper-two" style="width: 100%">
                <div class="flex-wrapper-three">
                    <b-row align-self="end" class="accomplish">
                      <p class="what-do-we-want-to-accomplish">
                          What Do We Want to Accomplish?
                      </p>
                      <p class="our-aim-is-to-expand-the-horizon-of-ai">
                          Our aim is to expand the horizon of AI, and to
                          be the one of the pioneers of Deep Learning in
                          Turkey.
                      </p>
                      <router-link to="/aboutUs"><p style="text-align:right; width: 75%; margin-top: 3%" class="more-about-us">More About Us</p></router-link>
                    </b-row>
                  </div>
                <div style="height: 100%;" class="flex-wrapper-four"></div>
            </b-container>
            <div style="width:100%; height: 100vh; background-color: black;" class="relative-wrapper-one">
                <b-container fluid class="turkey">
                    <p class="first-student-club-in-tuerk-iye">
                    First Student Club in Türkiye
                    </p>
                    <p class="our-ai-club-here-at-sabanci-is-the-fir" style="text-align: center;">
                    Our AI club, here at Sabancı, is the first ever
                    student club that has established itself with the
                    sponsorship of world-renowned tech companies such
                    as NVIDIA.
                    </p>
                </b-container>
                <b-container style="height: 100%;" fluid class="flex-wrapper-one">
                  <div class="white-shade"></div>
                  <div class="dark-shade"></div> 
                  </b-container>
                <b-container fluid style="padding-bottom: 5%; background-color: black; width: 100%;">
                      <b-row class="text-center" align-h="center">
                          <div style="align-content: center;">
                            <p class="want-to-join-our-club">
                              Want to Join Our Club?
                            </p>
                            <router-link to="/applicationForm"><div class="submit-button" style="margin-top: 2%"><p class="click-here">Click Here</p></div></router-link>
                          </div>
                      </b-row>
                    </b-container>
                <b-container fluid class="bottom-bar">
                  
                    <div class="flex-wrapper-seven">
                        <b-row>
                          <b-col align-self="baseline" style="width: 100%"><p class="contact-us">Contact Us:</p></b-col>
                          <b-col align-self="stretch" style="width: 100%">
                            <p class="contact-us">Phone: +90 543 798 81 34</p>
                            <p class="contact-us">Email: serhan.yilmaz@sabanciuniv.edu</p>
                          </b-col>
                        </b-row>
                    </div>
                </b-container>
            </div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </div>
    <!--</div>-->
</template>

<script>
import store from '@/store/index';
export default {
    data(){
        return{
            user: this.$store.getters.user,
        }
    },
   methods: {
    logout(){
        store.dispatch('logout');
    },
    logUser(){
        console.log(this.user)
    }
   }
}
</script>


<style scoped>
img {
  max-width: 100%;
}
html { 
  scroll-behavior: smooth;
  overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: hidden; /* Hide horizontal scrollbar */}
.landing-page {
  background-color: rgba(255, 255, 255, 1);
  /*padding: 0 0 175px;*/
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
.flex-wrapper-five {
  background-size: 100%;
  background-position: center;
  background-image: url("https://storage.googleapis.com/luciaai-assets/img/1423.webp");
  /*padding: 32px 0 0;*/
  background-repeat: no-repeat;
  width: 100%;
  background-color: rgba(222, 219, 222, 1);
}
.subtract {
  width: 3.3%;
  height: 1.85%;
  margin-bottom: 18.15%;
  margin-left: 94.9%;
}
.ai-sabanci {
  width: 100%;
  font-family: "Michroma";
  font-size: 7vh;
  font-weight: 400;
  line-height: normal;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  text-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
  font-family: 'Michroma';
  font-style: normal;
  line-height: 114px;
}
.where-dreams-come-true-baby {
  font-family: "Inter";
  font-size: 3vh;
  width: 70%;
  font-weight: 500;
  line-height: normal;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  margin-bottom: 0%;
  margin-left: 15%;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
.rectangle-92 {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    360deg,
    rgba(244, 244, 244, 1) 0%,
    rgba(244, 244, 244, 0) 100%
  );
  margin-top: 0%;
  z-index: 1;
}
.flex-wrapper-six {
  background: linear-gradient(
    360deg,
    rgba(255,255,255,1) 50%,
    rgba(222,219,222,1) 100%
  );
  /*padding: 4.35% 20.5% 5% 19.79%;*/
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
.union {
  width: 1.78%;
  height: 1.78%;
  margin-bottom: 13%;
  margin-left: 29.3%;
}
.flex-wrapper-nine {
  display: flex;
  align-items: flex-start;
  margin-top: 20%;
  margin-left: 20%;
  margin-right: 20%;
}
.workshops {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 2.44%;
  height: 40%;
  width:100%
}
.ai-workshops {
  font-family: "Cinzel";
  font-size: 3vh;
  font-weight: 400;
  line-height: normal;
  color: rgba(54, 54, 54, 1);
  text-align: center;
  margin-bottom: 1.9%;
}
.we-organize-workshops-regarding-deep-lea {
  height: 11.5%;
  width: 100%;
  font-family: "Inter";
  font-size: 2vh;
  font-weight: 200;
  line-height: normal;
  color: rgba(86, 86, 86, 1);
  display: flex;
  margin-bottom: 3.7%;
}
.read-more {
  font-family: "Inter";
  width: 100%;
  font-size: 1.5vh;
  font-weight: 200;
  line-height: normal;
  color: rgba(0, 0, 0, 1);
  text-decoration: underline;
  margin-left: 0%;
}
.in-our-club-a-number-of-ai-projects-are {
  height: 7.65%;
  width: 100%;
  font-family: "Inter";
  font-size: 2vh;
  font-weight: 200;
  line-height: normal;
  color: rgba(86, 86, 86, 1);
  display: flex;
  margin-bottom: 6%;
  margin-left: 1px;
}
.read-more-two {
  font-family: "Inter";
  width: 100%;
  font-size: 1.5vh;
  font-weight: 200;
  line-height: normal;
  color: rgba(0, 0, 0, 1);
  text-decoration: underline;
  margin-left: 0%;
}
.flex-wrapper-two {
  background-size: 100%;
  background-position: center;
  background-image: url("https://images.squarespace-cdn.com/content/v1/5dc00e9e32cd095744be7634/3c59b614-0c48-4c09-82d9-f0e3c052baf6/deepmind-4sRFTaQSM8Q-unsplash+%281%29.jpg?format=1500w");
  padding: 0 0 0%;
  position: relative;
  background-repeat: no-repeat;
  background-color: rgba(228, 229, 231, 1);
  z-index: 2;
}
.flex-wrapper-three {
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(241, 241, 241, 0) 100%
  );
  padding: 15% 49.8% 24% 19.79%;
  margin-top: 10%;
  position: relative;
  width: 100%;
}
.accomplish {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.what-do-we-want-to-accomplish {
  max-width: 65%;
  font-family: "Cinzel";
  font-size: 3.5vh;
  font-weight: 400;
  line-height: normal;
  color: rgba(54, 54, 54, 1);
  margin-bottom: 2.8%;
  padding-top: 10%;
}
.our-aim-is-to-expand-the-horizon-of-ai {
  height: 8.6%;
  width: 75.8%;
  font-family: "Inter";
  font-size: 2vh;
  font-weight: 200;
  line-height: normal;
  color: rgba(86, 86, 86, 1);
  display: flex;
}
.flex-wrapper-four {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 29%,
    rgba(240, 240, 240, 1) 100%
  );

  display: flex;
  align-items: flex-start;
  position: relative;
  margin-top: 1
}
.more-about-us {
  font-family: "Inter";
  font-size: 1.5vh;
  font-weight: 200;
  line-height: normal;
  color: rgba(0, 0, 0, 1);
  text-decoration: underline;
}
.relative-wrapper-one {
  position: relative;
}
.flex-wrapper-one {
  background-size: 100%;
  background-position: center;
  background-image: url("../assets/unnamed.jpg");
  padding: 0 0 0%;
  position: relative;
  background-repeat: no-repeat;
  height: 100%;
}
.white-shade{
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(255, 250, 245, 1) 15%,
    rgba(255, 250, 245, 0) 100%
  );
  display: flex;
  align-items: flex-start;
  height: 30%;
}
.dark-shade{
  position: relative;
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 1) 15%,
    rgba(255, 250, 245, 0) 50%
  );
  display: flex;
  align-items: flex-start;
  height: 70%;
}
.rectangle-23 {
  width: 100%;
  height: 90%;
  position: relative;
}
.rectangle-29 {
  width: 100%;
  height: 75%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 30%,
    rgba(0, 0, 0, 1) 102%
  );
  position: relative;
  left: 0;
  top: 25%;
}
.submit-button {
  border-radius: 5px;
  padding: 0.5% 0.5% 0.3% 0.5%;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  color: black;
  align-items: center;
  position: relative;
  border: 2px solid rgba(255, 255, 255, 1);
  width: 6%;
  margin-left: 47%;
  margin-right: 47%;
}
.submit-button:hover {
  border-radius: 5px;
  padding: 0.5% 0.5% 0.3% 0.5%;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  align-items: center;
  position: relative;
  border: 2px solid rgba(255, 255, 255, 1);
  transition: background-color 0.5s, color 0.5s;
  color: black;
  background-color: white;
  border: 3px solid black;
  width: 6%;
  margin-left: 47%;
  margin-right: 47%;
  
}
.click-here {
  font-family: "Inter";
  font-size: 1.5vh;
  font-weight: 400;
  line-height: normal;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
.click-here:hover{
  font-family: "Inter";
  font-size: 1.5vh;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  transition: background-color 0.5s, color 0.5s;
  color: black;
}
.rectangle-70 {
  width: 100%;
  height: 30%;
  background: linear-gradient(
    360deg,
    rgba(255, 250, 245, 0) 0%,
    rgba(255, 250, 245, 1) 80%
  );
  position: relative;
  left: 0;
  top: 0;
}
.want-to-join-our-club {
  font-family: "Inter";
  font-size: 3vh;
  font-weight: 400;
  line-height: normal;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  text-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 5;
}
.rectangle-71 {
  width: 100%;
  height: 36%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 29%,
    rgba(240, 240, 240, 1) 100%
  );
  position: relative;
  z-index: 5;
}
.turkey {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(
    360deg,
    rgba(255,255,255,1) 50%,
    rgba(229,229,229,1) 100%
  );
}
.first-student-club-in-tuerk-iye {
  font-family: "Cinzel";
  font-size: 5vh;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  color: rgba(54, 54, 54, 1);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0%;
  margin-right: 0%;
  margin-top: 5%;
  z-index: 6;
  /*margin-bottom: 20px;
  margin-left: 107px;*/
}
.our-ai-club-here-at-sabanci-is-the-fir {
  height: 12.6%;
  width: 59.5%;
  font-family: "Inter";
  font-size: 2vh;
  font-weight: 200;
  line-height: normal;
  color: rgba(86, 86, 86, 1);
  display: flex;
  text-align: center;
  z-index: 5;
}
.bottom-bar {
  background-color: rgba(0, 0, 0, 1);
  margin-bottom: 5%;
  padding-left: 38%;
  display: flex;
  align-items: flex-start;
  position: relative;
}
.flex-wrapper-seven {
  margin-right: 63px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contact-us {
  font-family: "Inter";
  font-size: 2vh;
  font-weight: 200;
  line-height: normal;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 26px;
}
.powered-by-squared-space {
  font-family: "Inter";
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  color: rgba(255, 255, 255, 1);
}
.back-to-top-two {
  margin-top: 0.8%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.union-two {
  width: 34.34px;
  height: 19.17px;
  margin-bottom: 12px;
}
.back-to-top {
  font-family: "Inter";
  font-size: 18px;
  font-weight: 300;
  line-height: normal;
  color: rgba(255, 255, 255, 1);
  text-align: center;
}
</style>