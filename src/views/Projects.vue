<template>
    <div>
        <!--<router-link to="/projectAddingForm"><button style="position: absolute; top: 4%; right: 10%; height: 8vh; width: 25vh; font-size: 3vh">Propose Project</button></router-link>
        <div>
            <h1 style="position:relative; margin-top:2%; float: left; margin-left: 10%; font-size: 5vh">Current Projects:</h1>
            <h1 style="margin-top:10%; font-size: 2.5vh" v-if="currentProjects.length==0">There are no projects currently being worked on</h1>
            <b-table style="text-align: left; position: relative; left: 10%; top: 15%; font-size: 2.5vh" :items="currentProjects" :fields="fields">
                <template #cell(name)="currentProjects">
                    <router-link :to="`/project/${currentProjects.index}`">{{ currentProjects.item.name }}</router-link>
                </template>
            </b-table>
            <h1 v-if="pastProjects.length" style="position:relative; margin-top:7%; float: left; margin-left: 10%; font-size: 5vh">Past Projects:</h1>
            <b-table v-if="pastProjects.length" style="text-align: left; position: relative; left: 10%; top: 35%; font-size: 2.5vh" :items="pastProjects" :fields="fields">
                <template #cell(name)="pastProjects">
                    <router-link :to="`/project/${pastProjects.index+currentProjects.length}`">{{ pastProjects.item.name }}</router-link>
                </template>
            </b-table>
        </div>-->
        <div class="projects-two">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
            <b-container fluid class="flex-wrapper-one">
                <div class="rectangle-31"></div>
                <b-row class="flex-wrapper-two">
                    <b-col class="our-projects">Our Projects</b-col>
                </b-row>
            </b-container>
            <b-container class="num-1st-event">
                <img
                    alt=""
                    class="rectangle-34"
                    src="https://static.overlay-tech.com/assets/e4f8f188-1cd5-4217-b708-c1d16238e956.png"
                />
                <div class="flex-wrapper-four">
                    <p class="ai-aided-tomography">
                    AI Aided Tomography
                    </p>
                    <p class="our-team-has-developed-a-new-approach-to">
                    Our team has developed a new approach to
                    tomography that utilizes advanced deep learning
                    algorithms to assist with image reconstruction.
                    Our system is able to analyze raw tomography data
                    and automatically identify features and structures
                    in the image, leading to faster and more accurate
                    image reconstruction.
                    </p>
                </div>
            </b-container>
            <b-container class="num-1st-event-two">
            <img
                alt=""
                class="rectangle-34"
                src="https://static.overlay-tech.com/assets/9a7157e1-c435-4724-affc-a6f614d0e4dd.png"
            />
             <div class="flex-wrapper-four">
                <p class="ai-aided-tomography">
                    Autonomous Driving
                </p>
                <p class="our-team-has-developed-a-new-approach-to">
                    Our project aims to develop a simulation of an
                    autonomous vehicle that can navigate a simple
                    environment using advanced algorithms and control
                    systems. Areas such as sensor data processing,
                    path planning, and control systems were our main
                    focus.
                </p>
              </div>
            </b-container>
            <b-container  class="num-1st-event-two">
                <img
                    alt=""
                    class="rectangle-34"
                    src="https://static.overlay-tech.com/assets/fbc886f8-616b-44ff-a50a-b208388f9097.png"
                />
                <div class="flex-wrapper-four">
                    <p class="ai-aided-tomography">
                        İstanbul’s Weather Prediction
                    </p>
                    <p class="our-team-has-developed-a-new-approach-to">
                        Using HPC, we developed a model for predicting the
                        weather in Istanbul. We collected large amounts of
                        weather data and used sophisticated algorithms to
                        analyze the complex interactions between the
                        atmosphere, oceans, and land surfaces to give more
                        accurate weather precitions.
                    </p>
                </div>
            </b-container>
            <b-container fluid>
              <b-row align-h="center">
                <p class="interested-in-future-projects">
                    Have an idea for a project?
                </p>
              </b-row>
              <b-row align-h="center">
                <router-link to="/projectAddingForm">
                    <div class="submit-button">
                        <p class="click-here">Click Here</p>
                    </div>
                </router-link>
              </b-row>
            </b-container>
          </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            currentProjects: this.$store.getters.currentProjects,
            pastProjects: this.$store.getters.pastProjects,
            fields: ["name", "field", "projectLeader", "abstract"],
        }   
    },
}
</script>

<style scoped>
.projects-two {
  max-width: 100%;
  height: 100%;
  background-color: white;
  overflow: hidden;
  padding: 32px 0 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
}
.filler{
  max-width: 10%;
}
.flex-wrapper-one {
  object-fit: contain;
  width: 100%;
  height: auto;
  background-size: 100%;
  background-position: center;
  background-image: url("https://static.overlay-tech.com/assets/9eb666de-f3db-46bb-a12c-5c12fe6a36e2.png");
  margin-bottom: 34px;
  padding: 422px 0 0;
  position: relative;
  z-index: 5;
  background-repeat: no-repeat;
}
.rectangle-31 {
  width: 100%;
  height: 442px;
  background: linear-gradient(
    360deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(244, 244, 244, 0) 100%
  );
  position: relative;
  margin-bottom: 0%;
  z-index: 3;
}
.flex-wrapper-two {
  width: 100%;
  background: linear-gradient(
    180deg,
    rgb(255, 255, 255, 1) 0%,
    rgba(244, 244, 244, 0) 100%
  );
  padding: 18px 25% 29px 25%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  left: 0;
  top: 0;
}
.our-projects {
  font-family: "Cinzel";
  font-size: 60px;
  font-weight: 400;
  line-height: normal;
  color: black;
  text-align: center;
  margin-bottom: 16.1%;
}
.many-projects-are-being-run-at-the-same {
  height: 140px;
  width: 464px;
  font-family: "Inter";
  font-size: 24px;
  font-weight: 200;
  line-height: normal;
  color: gray;
  display: flex;
}
.num-1st-event {
  width: 100%;
  margin-bottom: 2%;
  margin-top: 5%;
  padding: 0 114px 0 46px;
  display: flex;
  align-items: flex-start;
}
.rectangle-34 {
  width: 249px;
  height: 249px;
  margin-right: 34px;
}
.flex-wrapper-four {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.ai-aided-tomography {
  color: gray;
  margin-bottom: 13px;
  /*@include inter-36-regular;*/
}
.our-team-has-developed-a-new-approach-to {
  height: 17.8%;
  width: 70%;
  font-family: "Inter";
  font-size: 24px;
  font-weight: 200;
  line-height: normal;
  color: gray;
  display: flex;
}
.num-1st-event-two {
  margin-bottom: 2%;
  padding: 0 114px 0 46px;
  display: flex;
  align-items: flex-start;
}
.interested-in-future-projects {
  color: gray;
  text-align: center;
  margin-bottom: 30px;
  margin-left: 0%;
  font-size: 25px
  /*@include inter-36-regular;*/
}
.submit-button {
  border-radius: 5px;
  padding: 9px 20.43px 10px 21px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  color: black;
  align-items: center;
  position: relative;
  border: 2px solid black;
  width: 10%;
  margin-left: 45%;
  margin-right: 45%;
  margin-bottom: 3%;
}
.submit-button:hover {
  border-radius: 5px;
  padding: 9px 20.43px 10px 21px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  align-items: center;
  position: relative;
  border: 2px solid rgba(255, 255, 255, 1);
  transition: background-color 0.5s, color 0.5s;
  color: black;
  background-color: white;
  border: 3px solid black;
  width: 10%;
  margin-left: 45%;
  margin-right: 45%;
  margin-bottom: 3%;
  
}
.click-here {
  font-family: "Inter";
  font-size: 22px;
  font-weight: 400;
  line-height: normal;
  color: black(255, 255, 255, 1);
  text-align: center;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
.click-here:hover{
  font-family: "Inter";
  font-size: 22px;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  transition: background-color 0.5s, color 0.5s;
  color: black;
}
.bottom-bar {
  background-color: black;
  padding: 55px 67px 48px 844px;
  display: flex;
  align-items: flex-start;
  position: absolute;
  left: 0;
  bottom: -18px;
}
.flex-wrapper-seven {
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