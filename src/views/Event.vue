<template>
    <div class="specific-event">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      <p class="events">Events</p>
      <img
        alt=""
        class="rectangle-76"
        :src=events[index].img
      />
      <p class="dl-in-real-life">{{events[index].name}}</p>
      <div class="relative-wrapper-one">
        <div class="rectangle-35"></div>
        <p class="deep-learning-has-become-increasingly-po">
          {{events[index].description}}
        </p>
      </div>
      <p class="time-place">Time &amp; Place</p>
      <p class="saturday-march-18th-2023-1730-1900">
        {{events[index].date}}<br />
        {{events[index].time}}<br />
        {{events[index].location}}
      </p>
      <p class="sounds-interesting-to-you">
        Sounds interesting to you?
      </p>
      <div class="submit-button">
        <p class="join-event">Join Event</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SpecificEvent",
    data(){
        return{
            index: this.$route.params.id,
            page: 1,
            events: [
                {
                    name: "Our First Event!",
                    abstract: "Join our first event, where we will present the basics of Deep Learning, and how it can be utilized on smaller-scale projects.",
                    description: "Welcome to the inaugural event of our AI club! This event will introduce you to the basics of AI and demonstrate how it can be used on smaller scale projects.\nAttendees will learn how to develop and deploy AI models on their own, using open-source tools and platforms.\nThroughout the event, there will be opportunities for attendees to ask questions and discuss their own ideas for AI projects. This is a great opportunity for beginners to learn more about AI and for more experienced individuals to network and exchange ideas.",
                    date: "Wednesday, March 1st, 2023",
                    time: "18:00-20:00",
                    location: "FENS G077",
                    img: "https://static.overlay-tech.com/assets/2de6e4c5-a258-4c5d-8f34-004fcd00fc3a.png",
                },
                {
                    name: "DL in Real Life",
                    abstract: "In this workshop, we will implement the various Deep Learning techniques on real life projects.",
                    description: "Deep learning has become increasingly popular in recent years, and it has been applied to a wide range of real-world problems across various industries. In this workshop, we will implement the various Deep Learning techniques on real life projects. Some of these include:\nImage and object recognition\nNatural language processing (NLP)\nAutonomous driving\nFraud detection\n\nPrior familiarity with deep learning is not necessary for this workshop.",
                    date: "Saturday, March 18th, 2023",
                    time: "17:30 - 19:00",
                    location: "FENS G035",
                    img: "https://static.overlay-tech.com/assets/3ccb7de4-1fda-40e7-bec4-a6f88b5bec6f.png",
                },
                {
                    name: "What is HPC?",
                    abstract: "What is High-performance Computing? How can we benefit from it? All this and more in this upcoming workshop.",
                    description: "High-Performance Computing (HPC) is an important field of study that is worth learning for several reasons. During this event, our expert speakers will dive deep into what HPC is, and how it works. We will start by providing an overview of HPC architecture, including the hardware and software components that make up HPC systems. We will also cover the various types of HPC systems, including clusters, supercomputers, and cloud-based HPC.",
                    date: "Sunday, April 2nd, 2023",
                    time: "14:00 - 15:00",
                    location: "FASS 1011",
                    img: "https://static.overlay-tech.com/assets/e65b88ca-b4e9-4583-8015-7f181c1fe5fb.png",
                },
                {
                    name: "Developing an AI model with TensorFlow",
                    abstract: "In this workshop, we will develop an visual computer vision AI model using TensorFlow",
                    description: "Our speaker, a TensorFlow expert, will begin by giving an overview of TensorFlow and its key features. They will explain how it can be used to create a range of AI models, including deep learning models, and how it can be applied in various industries such as healthcare, finance, and transportation. Attendees will then be taken through the steps required to develop an AI model using TensorFlow. This will include data preparation, feature engineering, model training, and evaluation. The speaker will provide practical examples and demonstrate how to implement these steps in TensorFlow using Python code. The event will also cover some of the common challenges faced when developing AI models, such as overfitting and underfitting. Attendees will learn how to identify these issues and apply techniques to improve the performance of their models.",
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
  .specific-event {
    background-color: white;
    padding: 32px 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .flex-wrapper-one {
    margin-bottom: 65px;
    padding: 0 0 0 50px;
    display: flex;
    align-items: flex-start;
  }
  .logo-two {
    margin-right: 1084px;
    position: relative;
    border: 3px solid black;
  }
  .logo {
    height: 40.73px;
    width: 72.12px;
    font-family: "Inter";
    font-size: 30px;
    font-weight: 400;
    line-height: normal;
    color: black;
    display: flex;
    align-items: center;
    text-align: center;
    position: absolute;
    left: 0.94px;
    top: -1px;
  }
  .profile {
    font-family: "Inter";
    font-size: 18px;
    font-weight: 300;
    line-height: normal;
    color: black;
    text-align: center;
    margin-top: 13px;
    margin-right: 48px;
  }
  .header {
    margin-top: 13px;
    display: flex;
    align-items: flex-start;
  }
  .workshops {
    font-family: "Inter";
    font-size: 18px;
    font-weight: 300;
    line-height: normal;
    color: black;
    text-align: center;
    margin-right: 48px;
  }
  .join-us {
    font-family: "Inter";
    font-size: 18px;
    font-weight: 300;
    line-height: normal;
    color: black;
    text-align: center;
    text-decoration: underline;
  }
  .events {
    font-family: "Cinzel";
    font-size: 60px;
    font-weight: 400;
    line-height: normal;
    color: gray;
    text-align: center;
    margin-bottom: 46px;
    margin-left: 855px;
  }
  .rectangle-76 {
    max-width: 1148px;
    max-height: 646px;
    margin-bottom: 64px;
    margin-left: 380px;
  }
  .dl-in-real-life {
    color: gray;
    margin-bottom: 94px;
    margin-left: 380px;
  }
  .relative-wrapper-one {
    margin-bottom: 4px;
    margin-left: 352px;
    position: relative;
  }
  .rectangle-35 {
    width: 1302px;
    height: 249px;
    position: relative;
  }
  .deep-learning-has-become-increasingly-po {
    height: 267px;
    width: 1140px;
    font-family: "Inter";
    font-size: 24px;
    font-weight: 200;
    line-height: normal;
    color: gray;
    display: flex;
    position: absolute;
    left: 28px;
    top: -62px;
  }
  .time-place {
    color: gray;
    margin-bottom: 32px;
    margin-left: 380px;
  }
  .saturday-march-18th-2023-1730-1900 {
    height: 91px;
    width: 843px;
    font-family: "Inter";
    font-size: 24px;
    font-weight: 200;
    line-height: normal;
    color: gray;
    display: flex;
    margin-bottom: 106px;
    margin-left: 380px;
  }
  .sounds-interesting-to-you {
    color: gray;
    text-align: center;
    margin-bottom: 30px;
    margin-left: 864px;
  }
  .submit-button {
    margin-bottom: 160px;
    margin-left: 878px;
    border-radius: 5px;
    padding: 8px 19.59px 9px 19px;
    display: flex;
    align-items: center;
    border: 3px solid rgba(84, 84, 84, 1);
  }
  .submit-button:hover {
    margin-bottom: 160px;
    margin-left: 878px;
    border-radius: 5px;
    padding: 8px 19.59px 9px 19px;
    display: flex;
    align-items: center;
    color: white;
    transition: background-color 0.5s, color 0.5s;
    background-color: black;
    border: 3px solid black;
  }
  .join-event {
    width: 120.41px;
    font-family: "Inter";
    font-size: 22px;
    font-weight: 400;
    line-height: normal;
    color: rgba(84, 84, 84, 1);
    text-align: center;
  }
  .bottom-bar {
    background-color: black;
    padding: 55px 67px 48px 844px;
    display: flex;
    align-items: flex-start;
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