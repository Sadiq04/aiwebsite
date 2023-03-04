<template>
    <div class="events-three">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <b-container style="margin-top: 3%">
        <b-row>
          <b-col><p class="events-two">Events</p></b-col>
        </b-row>
        <b-row>
          <b-col>
            <p class="lorem-ipsum-dolor-sit-amet-consectetur">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt
            </p>
          </b-col>
        </b-row>
      </b-container>
      <b-container fluid v-if="events[(page-1)*3]" class="relative-wrapper-one">
        <b-row align-h="center">
          <div class="num-1st-event">
            <img
              alt=""
              class="rectangle-34"
              :src=events[(page-1)*3].img
            />
            <div class="flex-wrapper-three">
              <p class="our-first-event">{{ events[(page-1)*3].name }}</p>
              <p
                class="join-our-first-event-where-we-will-pres"
              >
                  {{events[(page-1)*3].abstract}}
              </p>
              <p class="wednesday-march-1st-2023-1800-2000">
                {{events[(page-1)*3].date}}<br />
                {{events[(page-1)*3].time}}<br />
                {{events[(page-1)*3].location}}
              </p>
            </div>
            <router-link :to=event+((page-1)*3)><p class="read-more">Read More</p></router-link>
          </div>
        </b-row>
      </b-container>
      <b-container fluid v-if="events[(page-1)*3+1]" class="relative-wrapper-one">
        <b-row align-h="center">
          <div class="num-1st-event">
            <img
              alt=""
              class="rectangle-34"
              :src=events[(page-1)*3+1].img
            />
            <div class="flex-wrapper-three">
              <p class="our-first-event">{{ events[(page-1)*3+1].name }}</p>
              <p
                class="join-our-first-event-where-we-will-pres"
              >
                  {{events[(page-1)*3+1].abstract}}
              </p>
              <p class="wednesday-march-1st-2023-1800-2000">
                {{events[(page-1)*3+1].date}}<br />
                {{events[(page-1)*3+1].time}}<br />
                {{events[(page-1)*3+1].location}}
              </p>
            </div>
            <router-link :to=event+((page-1)*3+1)><p class="read-more">Read More</p></router-link>
          </div>
        </b-row>
      </b-container>
      <b-container fluid v-if="events[(page-1)*3+2]" class="relative-wrapper-one">
        <b-row align-h="center">
          <div class="num-1st-event">
            <img
              alt=""
              class="rectangle-34"
              :src=events[(page-1)*3+2].img
            />
            <div class="flex-wrapper-three">
              <p class="our-first-event">{{ events[(page-1)*3+2].name }}</p>
              <p
                class="join-our-first-event-where-we-will-pres"
              >
                  {{events[(page-1)*3+2].abstract}}
              </p>
              <p class="wednesday-march-1st-2023-1800-2000">
                {{events[(page-1)*3+2].date}}<br />
                {{events[(page-1)*3+2].time}}<br />
                {{events[(page-1)*3+2].location}}
              </p>
            </div>
            <router-link :to=event+((page-1)*3+2)><p class="read-more">Read More</p></router-link>
          </div>
        </b-row>  
      </b-container>
      <b-container class="group-14">
        <b-row align-h="center">
            <div style="width: 36px; height: 18px">
              <img
                v-if="page>1"
                alt=""
                class="back-to-top-arrow-two"
                src="https://static.overlay-tech.com/assets/eed53001-380b-4cd2-b196-a9a3d2901933.svg"
                @click="page--"
              />
            </div>
            <p style="margin-left: 1.3%; width: 0%">{{ page }}</p>
            <div style="width: 36px; height: 18px">
              <img
                v-if="Math.ceil(events.length/3)>page"
                alt=""
                class="back-to-top-arrow"
                src="https://static.overlay-tech.com/assets/10a1e514-f99b-435a-b9cf-c317b6a48dd3.svg"
                @click="page++"
              />
            </div>
        </b-row>
      </b-container>
    </div>
  </template>
  
  <script>
  export default {
    name: "Events",
    data(){
        return{
            event: "/event/",
            page: 1,
            events: [
                {
                    name: "Our First Event!",
                    abstract: "Join our first event, where we will present the basics of Deep Learning, and how it can be utilized on smaller-scale projects.",
                    date: "Wednesday, March 1st, 2023",
                    time: "18:00-20:00",
                    location: "FENS G077",
                    img: "https://static.overlay-tech.com/assets/2de6e4c5-a258-4c5d-8f34-004fcd00fc3a.png",
                },
                {
                    name: "DL in Real Life",
                    abstract: "In this workshop, we will implement the various Deep Learning techniques on real life projects.",
                    date: "Saturday, March 18th, 2023",
                    time: "17:30 - 19:00",
                    location: "FENS G035",
                    img: "https://static.overlay-tech.com/assets/3ccb7de4-1fda-40e7-bec4-a6f88b5bec6f.png",
                },
                {
                    name: "What is HPC?",
                    abstract: "What is High-performance Computing? How can we benefit from it? All this and more in this upcoming workshop.",
                    date: "Sunday, April 2nd, 2023",
                    time: "14:00 - 15:00",
                    location: "FASS 1011",
                    img: "https://static.overlay-tech.com/assets/e65b88ca-b4e9-4583-8015-7f181c1fe5fb.png",
                },
                {
                    name: "Developing an AI model with TenserFlow",
                    abstract: "In this workshop, we will develop an visual computer vision AI model using TenserFlow",
                    date: "Tuesday, April 4th, 2023",
                    time: "19:00-21:00",
                    location: "FMAN1099",
                    img: "https://s3.ap-south-1.amazonaws.com/techleer/31.jpg",
                },
                {
                    name: "Developing an AI model with TenserFlow",
                    abstract: "In this workshop, we will develop an visual computer vision AI model using TenserFlow",
                    date: "Tuesday, April 4th, 2023",
                    time: "19:00-21:00",
                    location: "FMAN1099",
                    img: "https://s3.ap-south-1.amazonaws.com/techleer/31.jpg",
                },
                {
                    name: "Developing an AI model with TenserFlow",
                    abstract: "In this workshop, we will develop an visual computer vision AI model using TenserFlow",
                    date: "Tuesday, April 4th, 2023",
                    time: "19:00-21:00",
                    location: "FMAN1099",
                    img: "https://s3.ap-south-1.amazonaws.com/techleer/31.jpg",
                },
                {
                    name: "Developing an AI model with TenserFlow",
                    abstract: "In this workshop, we will develop an visual computer vision AI model using TenserFlow",
                    date: "Tuesday, April 4th, 2023",
                    time: "19:00-21:00",
                    location: "FMAN1099",
                    img: "https://s3.ap-south-1.amazonaws.com/techleer/31.jpg",
                },
                {
                    name: "Developing an AI model with TenserFlow",
                    abstract: "In this workshop, we will develop an visual computer vision AI model using TenserFlow",
                    date: "Tuesday, April 4th, 2023",
                    time: "19:00-21:00",
                    location: "FMAN1099",
                    img: "https://s3.ap-south-1.amazonaws.com/techleer/31.jpg",
                },
                
            ]
        }
    }
  };
  </script>
  
  <style scoped>
  .events-three {
    background-color: white;
    padding: 32px 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .events-two {
    font-family: "Cinzel";
    font-size: 60px;
    font-weight: 400;
    line-height: normal;
    color: gray;
    text-align: center;
    width: 100%;
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
  .num-1st-event {
    width: 75%;
    background-color: white;
    padding: 37px 48px 35px 46px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.14);
    display: flex;
    align-items: flex-start;
    position: relative;
  }
  .rectangle-34 {
    width: 100%;
    max-width: 249px;
    height: auto;
    margin-right: 34px;
  }
  .flex-wrapper-three {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .our-first-event {
    color: gray;
    margin-bottom: 13px;
  }
  .join-our-first-event-where-we-will-pres {
    height: 8%;
    width: 80%;
    font-family: "Inter";
    font-size: 24px;
    font-weight: 200;
    line-height: normal;
    color: gray;
    display: flex;
  }
  .wednesday-march-1st-2023-1800-2000 {
    height: 6%;
    width: 80%;
    font-family: "Inter";
    font-size: 18px;
    font-weight: 200;
    line-height: normal;
    color: gray;
    display: flex;
  }
  .read-more {
    font-family: "Inter";
    font-size: 18px;
    font-weight: 200;
    line-height: normal;
    color: black;
    text-decoration: underline;
    position: absolute;
    right: 42px;
    bottom: 36px;
  }
  .relative-wrapper-two {
    position: relative;
  }
  .num-2nd-event {
    background-color: white;
    padding: 38px 44px 34px 46px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.14);
    display: flex;
    align-items: flex-start;
    position: relative;
  }
  .in-this-workshop-we-will-implement-the {
    height: 0px;
    width: 847px;
    font-family: "Inter";
    font-size: 24px;
    font-weight: 200;
    line-height: normal;
    color: gray;
    display: flex;
  }
  .read-more-two {
    font-family: "Inter";
    font-size: 18px;
    font-weight: 200;
    line-height: normal;
    color: black;
    text-decoration: underline;
    position: absolute;
    right: 42px;
    bottom: 34px;
  }
  .relative-wrapper-three {
    position: relative;
  }
  .num-3rd-event {
    background-color: white;
    padding: 34px 44px 38px 46px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.14);
    display: flex;
    align-items: flex-start;
    position: relative;
  }
  .read-more-three {
    font-family: "Inter";
    font-size: 18px;
    font-weight: 200;
    line-height: normal;
    color: black;
    text-decoration: underline;
    position: absolute;
  }
  .group-14 {
    margin-top: 1%;
    padding: 0 0px 18px 0;
    position: relative;
  }
  .back-to-top-arrow {
    margin-top: 0%;
    width: 36px;
    height: 18px;
    position: relative;
  }
  .back-to-top-arrow-two {
    margin-top: 0%;
    width: 36px;
    height: 18px;
    position: relative;
  }
  .bottom-bar {
    background-color: black;
    padding: 55px 67px 48px 844px;
    display: flex;
    align-items: flex-start;
  }
  .flex-wrapper-two {
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
  .back-to-top-arrow-three {
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