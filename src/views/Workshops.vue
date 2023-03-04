<template>
    <div class="workshops-two" style="width: 100%">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!--<div class="flex-wrapper-eight" style="position: fixed; z-index: 5;">
                    <div class="logo-two"><p class="logo">logo</p></div>
                    <div class="header">
                    <p class="profile">Profile</p>
                    <p class="profile">Workshops</p>
                    <p class="profile">Projects</p>
                    <p class="profile">Our Team</p>
                    <p class="profile">Events</p>
                    <p class="join-us">Join Us!</p>
                    </div>
                </div>--> 
        <div style="width: 100%; margin-top: 3%;">
          <b-container fluid>
            <b-row align-h="center">
              <b-col align-self="center">
                <p class="educational-workshops">
                    Educational Workshops
                </p>
                <p class="lorem-ipsum-dolor-sit-amet-consectetur">
                    As an AI club we will hold weekly workshops, these will be sponsored by companies that are considered experts in the AI/ML field. 
                </p>
              </b-col>
            </b-row>
          </b-container>
          <div style="margin-top: 3%; width: 100%" v-for="(workshop, i) in workshops">  
              <div style="margin-left: 15%; margin-right: 15%" v-if="i%2==0">
                  <b-container fluid class="relative-wrapper-one">
                      <div class="dl">
                          <img
                              alt=""
                              class="rectangle-66"
                              :src= workshop.img
                          />
                          <div class="flex-wrapper-two">
                              <p class="deep-learning">{{ workshop.name }}</p>
                              <p
                              class="lorem-ipsum-dolor-sit-amet-consectetur-two"
                              >
                                  {{ message[i] }}

                              </p>
                              <div v-if="!extended[i]" @click="extend(i)" class="more-two">
                                  <img
                                      alt=""
                                      class="union"
                                      :src=downArrow
                                  />
                                  <p class="more">More</p>
                              </div>
                              <div v-else @click="shorten(i)" class="more-two">
                                  <img
                                  alt=""
                                  class="union"
                                  :src=upArrow
                                  />
                                  <p class="more">Less</p>
                              </div>
                          </div>
                      </div>
                      <div class="rectangle-90"></div>
                  </b-container>
                  
              </div>
              <div style="margin-left: 15%; margin-right: 15%" v-else>
                  <b-container fluid class="hpc">
                      <div class="flex-wrapper-three">
                          <p class="deep-learning">
                              {{ workshop.name }}
                          </p>
                          <p
                              class="lorem-ipsum-dolor-sit-amet-consectetur-three"
                          >
                              {{ message[i] }}
                          </p>
                          <div v-if="!extended[i]" @click="extend(i)" class="more-three">
                              <img
                                  alt=""
                                  class="union"
                                  :src=downArrow
                              />
                              <p class="more">More</p>
                          </div>
                          <div v-else @click="shorten(i)" class="more-three">
                              <img
                              alt=""
                              class="union"
                              :src=upArrow
                              />
                              <p class="more">Less</p>
                          </div>
                      </div>
                      <img
                          alt=""
                          class="rectangle-67"
                          :src=workshop.img
                      />
                  </b-container>
              </div>
          </div>
          <!--
              <div class="more-ideas">
                  <img
                      alt=""
                      class="rectangle-66"
                      src="https://static.overlay-tech.com/assets/a77e414f-333f-4f60-9035-632fcc5837c3.png"
                  />
                  <div class="flex-wrapper-two">
                      <p class="deep-learning">Have more ideas?</p>
                      <p
                          class="lorem-ipsum-dolor-sit-amet-consectetur-four"
                      >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore
                          et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex e.
                      </p>
                  </div>
              </div>-->
          <b-container>    
            <p class="want-to-attend-these" style="text-align: center;font-size: 3vh">
                Want to Attend These?
            </p>
            <b-row class="submit-button" style="margin-left: 42%">
                <b-col align-h="center"><p class="click-here">Click Here</p></b-col>
            </b-row>
          </b-container>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    //name: "Workshops",
    data(){
        return {
            upArrow: "https://static.overlay-tech.com/assets/192f6f3f-feb2-4a2c-a55f-77d774d83639.svg",
            downArrow: "https://static.overlay-tech.com/assets/37fa9443-f430-4ee9-bc4b-34aeb416ebda.svg",
            extended: [],
            //showMore1: false,
            message: [],
            workshops: [{
                name: "Deep Learning",
                shortText: "Deep learning is a subset of machine learning that involves training artificial neural networks to recognize patterns and make predictions or decisions based on data. In deep learning, multiple layers of interconnected nodes or neurons are used to process information and extract features from the input data.",
                longText: "Deep learning is a subset of machine learning that involves training artificial neural networks to recognize patterns and make predictions or decisions based on data. In deep learning, multiple layers of interconnected nodes or neurons are used to process information and extract features from the input data. These neural networks are designed to automatically learn hierarchical representations of the input data, which can then be used to classify, cluster, or predict new data. This is achieved through the process of training, where the network is fed with large amounts of labeled data and adjusts its parameters to minimize the error between the predicted outputs and the actual outputs.The term \"deep\" refers to the fact that these neural networks typically have many layers, sometimes numbering in the hundreds or thousands. This allows them to learn complex representations of the input data, such as images, audio, text, or other types of data. Deep learning has been successful in many applications, such as image and speech recognition, natural language processing, robotics, and autonomous vehicles. It has also enabled breakthroughs in fields such as healthcare, finance, and science, by allowing the analysis of large and complex datasets that were previously impossible to process.",
                img: "https://static.overlay-tech.com/assets/43e9cdb2-2490-4cb4-9d83-74053ce78ead.png"

            }, {
                name: "High Performance Computing",
                shortText: "High performance computing (HPC) is a field of computer science that involves the use of specialized hardware and software to perform complex computations at a much faster rate than traditional computing systems. The goal of HPC is to solve problems that are beyond the capabilities of a single computer or workstation, by using parallel processing and distributed computing techniques.",
                longText: "High performance computing (HPC) is a field of computer science that involves the use of specialized hardware and software to perform complex computations at a much faster rate than traditional computing systems. The goal of HPC is to solve problems that are beyond the capabilities of a single computer or workstation, by using parallel processing and distributed computing techniques. HPC systems typically consist of clusters or grids of interconnected computers, each with multiple processors or cores, and a high-speed interconnect network that enables communication and data transfer between the nodes. These systems also require specialized software and programming tools that can distribute the workload across multiple nodes and optimize the performance of the system. HPC is used in a wide range of scientific, engineering, and business applications, such as climate modeling, computational fluid dynamics, financial modeling, and drug discovery. It is also used in industries such as aerospace, automotive, and energy, to simulate and optimize complex processes and systems. HPC is constantly evolving, with new technologies and architectures being developed to increase performance and efficiency. Some of the recent advancements in HPC include the use of accelerators such as GPUs and FPGAs, the adoption of cloud-based HPC solutions, and the development of software frameworks such as Hadoop and Spark that enable distributed processing of big data.",
                img: "https://static.overlay-tech.com/assets/8db0f7af-a599-4535-af6b-d7e9167b4b49.png",
            }], 
        }
    },
    mounted(){
        for(let i=0; i < this.workshops.length; i++){
            this.message.push(this.workshops[i].shortText);
            this.extended.push(false)
        }
        console.log(this.message)
        
    },
    methods: {
        extend(i){
            this.extended[i]=true; 
            this.$set(this.message, i, this.workshops[i].longText)
            this.message[i]=this.workshops[i].longText;
            console.log(this.message[i])
            this.getMessage(i)
        },
        shorten(i){
            this.extended[i]=false;
            this.$set(this.message, i, this.workshops[i].shortText)
            this.message[i]=this.workshops[i].shortText;
            console.log(i)
            this.getMessage(i)
        },
        getMessage(i){console.log(this.message[i]); return this.message[i]},
    }
  };
  
  </script>
  
  <style scoped>
  html { scroll-behavior: smooth; width: 100%}
  .workshops-two {
    background-color: white;
    padding: 32px 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .educational-workshops {
    font-family: "Cinzel";
    font-size: 60px;
    font-weight: 400;
    line-height: normal;
    color: gray;
    text-align: center;
  }
  .lorem-ipsum-dolor-sit-amet-consectetur {
    width: 100%;
    font-family: "Inter";
    font-size: 24px;
    font-weight: 200;
    line-height: normal;
    color: gray;
    text-align: center;
  }
  .relative-wrapper-one {
    position: relative;
  }
  .dl {
    display: flex;
    align-items: flex-start;
    position: relative;
  }
  .rectangle-66 {
    width: 463px;
    height: 274px;
    margin-right: 5%;
  }
  .flex-wrapper-two {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .deep-learning {
    color: gray;
    margin-bottom: 16px;
    /*@include inter-36-medium;*/
  }
  .lorem-ipsum-dolor-sit-amet-consectetur-two {
    height: auto;
    width: 80%;
    font-family: "Inter";
    font-size: 24px;
    font-weight: 200;
    line-height: normal;
    color: gray;
    display: flex;
    margin-bottom: 75px;
  }
  .rectangle-90 {
    width: 703px;
    height: 93px;
    background: linear-gradient(
      90deg,
      transparent-white 2%,
      white 100%
    );
    position: absolute;
    right: 0;
    bottom: 6px;
  }
  .more-two {
    margin-bottom: 75px;
    margin-left: 75%;
    display: flex;
    align-items: flex-start;
  }
  .union {
    width: 17.17px;
    height: 9.59px;
    margin-top: 7.5px;
    margin-right: 4.83px;
  }
  .more {
    font-family: "Inter";
    font-size: 18px;
    font-weight: 200;
    line-height: normal;
    color: black;
  }
  .hpc {

    display: flex;
    align-items: flex-start;
  }
  .flex-wrapper-three {
    text-align: right;
    margin-left: 10%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .lorem-ipsum-dolor-sit-amet-consectetur-three {
    height: auto;
    width: 90%;
    font-family: "Inter";
    font-size: 24px;
    font-weight: 200;
    line-height: normal;
    color: dim-gray;
    display: flex;
    margin-bottom: 75px
  }
  .rectangle-67 {
    width: 463px;
    height: 274px;
    margin-left: 5%;
  }
  .more-three {
    display: flex;
    align-items: flex-start;
  }
  .more-ideas {
    margin-bottom: 164px;
    margin-left: 246px;
    display: flex;
    align-items: flex-start;
  }
  .lorem-ipsum-dolor-sit-amet-consectetur-four {
    height: 133px;
    width: 90%;
    font-family: "Inter";
    font-size: 24px;
    font-weight: 200;
    line-height: normal;
    color: dim-gray;
    display: flex;
  }
  .want-to-attend-these {
    color: dark-slate-gray;
    text-align: center;
    margin-bottom: 30px;
    margin-left: 0%;
    /*@include inter-36-regular;*/
  }
  .submit-button {
    width:18%;
    margin-bottom: 10%;
    margin-left: 0%;
    border-radius: 5px;
    padding: 11px 12.11px 0px 12px;
    text-align: center;
    display: flex;
    align-items: center;
    border: 3px solid black;
  }
  .submit-button:hover {
    width: 18%;
    margin-bottom: 10%;
    margin-left:0% ;
    border-radius: 5px;
    padding: 11px 12.11px 0px 12px;
    display: flex;
    align-items: center;
    color: white;
    transition: background-color 0.5s, color 0.5s;
    background-color: black;
    border: 3px solid black;
  }
  .click-here {
    width: auto;
    font-family: "Inter";
    font-size: 24px;
    font-weight: 400;
    line-height: normal;
    color: gray;
    text-align: center;
  }
  .bottom-bar {
    background-color: black;
    padding: 55px 67px 48px 844px;
    display: flex;
    align-items: flex-start;
  }
  .flex-wrapper-five {
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