<template>
    <div class="our-team-three">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      <b-container style="margin-top: 3%" class="flex-wrapper-three">
        <b-row align-h="center">
          <p class="our-team-two">Our Team</p>
          <div align-self="center" style="width: 100%;">
            <img
              alt=""
              class="back-to-top-arrow"
              src="https://static.overlay-tech.com/assets/6c07ba1d-0e46-4f7c-bed6-7fa69e6d7515.svg"
              @click="flipBackward()"
            />
            <img
              alt=""
              class="rectangle-32"
              :src=currentImg
              style="margin-left: 1%; margin-right:1%"
            />
            <img
              alt=""
              class="back-to-top-arrow"
              src="https://static.overlay-tech.com/assets/1a565dfe-3cde-4e60-93b1-3b242ecbf376.svg"
              @click="flipForward()"
            />
          </div>
        </b-row>
      </b-container>
      <b-container class="flex-wrapper-one">
        <b-row align-self="center">
          <img
            alt=""
            class="rectangle-49"
            :src=images[0]
            @click="currentImg=images[0]" 
          /><img
            alt=""
            class="rectangle-49"
            :src=images[1]
            @click="currentImg=images[1]" 
          /><img
            alt=""
            class="rectangle-49"
            :src=images[2]
            @click="currentImg=images[2]" 
          /><img
            alt=""
            class="rectangle-49"
            :src=images[3]
            @click="currentImg=images[3]" 
          /><img
            alt=""
            class="rectangle-49"
            :src=images[4]
            @click="currentImg=images[4]" 
          />
          <div class="group-8">
            <div class="rectangle-56"></div>
            <div @click="currentImg=images[1]" class="rectangle-56"></div>
            <div @click="currentImg=images[2]" class="rectangle-56"></div>
            <div @click="currentImg=images[3]" class="rectangle-56"></div>
            <div @click="currentImg=images[4]" class="rectangle-56"></div>
          </div>
      </b-row>
      </b-container>
      <b-container fluid><b-row align-h="center"><div class="line-12"></div></b-row></b-container>
      <b-container>
        <p class="who-are-we">Who are We?</p>
        <p class="a-group-of-sabanci-university-students">
          A group of Sabanci University students, who are
          interested in Artificial Intelligence and want to have
          an impact on the world around them using AI.
        </p>
      </b-container>
      <b-container>
        <p class="meet-the-members">Meet the Members</p>
        <div class="members">
            <b-row align-H="center" class="flex-wrapper-four">
                <b-col align-h="center">
                  <img
                  alt=""
                  class="ellipse-1"
                  src="https://static.overlay-tech.com/assets/060f10d0-b40f-40f6-865d-bf529beefec7.png"
                  />
                  <p class="serhan-yilmaz">Serhan Yilmaz</p>
                </b-col>
                <b-col align-h="center">
                  <img
                    alt=""
                    class="ellipse-1"
                    src="https://static.overlay-tech.com/assets/8d6a979d-04d4-43e3-beec-a2509426b3a0.png"
                  />
                  <p class="some-long-name-to-test">
                    Some Long Name to Test
                  </p>
                </b-col>
                <b-col align-h="center">
                  <img
                    alt=""
                    class="ellipse-1"
                    src="https://static.overlay-tech.com/assets/1f19bd6a-c2af-4680-8b42-42c3858c0443.png"
                  />
                  <p class="some-long-name-to-test">Person 3</p>
                </b-col>
            </b-row>
            <b-row align-self="center" class="flex-wrapper-six">
              <b-col>
                <img
                  alt=""
                  class="ellipse-1"
                  src="https://static.overlay-tech.com/assets/6fa02e6d-5b79-4e88-a2ca-a21c8e3f03bb.png"
                />
                <p class="random-joe">Random Joe</p>
              </b-col> 
              <b-col>  
                <img
                  alt=""
                  class="ellipse-1"
                  src="https://static.overlay-tech.com/assets/95622fa4-461a-4d80-a209-49cbf270dbdf.png"
                />
                <p class="abcdefghijklmnopqrstuvwxyz">
                  ABCDEFG
                </p>
              </b-col>
              <b-col>
                <img
                  alt=""
                  class="ellipse-1"
                  src="https://static.overlay-tech.com/assets/c9145e30-25f7-40d8-a000-64097fec986b.png"
                />
                <p class="random-joe">hello!</p>
              </b-col>
            </b-row>
          </div>
      </b-container>
      <b-container fluid><b-row align-h="center"><div class="line-12"></div></b-row></b-container>
      <b-container>
        <p class="our-sponsors">Our Sponsors</p>
        <div class="nvidia-two">
          <img
            alt=""
            class="rectangle-59"
            src="https://static.overlay-tech.com/assets/9c709ae1-092d-46a1-b98a-ac9b39ccf93f.png"
          />
          <div class="flex-wrapper-eight">
            <p class="nvidia">NVIDIA</p>
            <p class="nvidia-is-a-leading-manufacturer-of-high">
              Nvidia is a leading manufacturer of high-end
              graphics processing units (GPUs) headquartered in
              Santa Clara, California.
            </p>
          </div>
        </div>
        <div class="sabanci">
          <img
            alt=""
            class="rectangle-59"
            src="https://static.overlay-tech.com/assets/dece59b2-fe28-4231-86e5-e5dfbb56fd0b.png"
          />
          <div class="flex-wrapper-eight">
            <p class="nvidia">Sabancı University</p>
            <p class="sabanci-is-one-of-the-highest-ranked-uni">
              Sabanci is one of the highest ranked universities
              in Turkey, which offers courses in natural
              sciences &amp; engineering, management, and
              humanities.
            </p>
          </div>
        </div>
      </b-container>
    </div>
  </template>
  
  <script>
  export default {
    name: "OurTeam",
    data(){
        return{
            images: ["https://www.english.com/blog/wp-content/uploads/2019/12/digital-literacy-post.jpg",
                     "https://static.overlay-tech.com/assets/6bdae15c-7548-442c-8b45-8cd815939497.png",
                     "https://cdn.theatlantic.com/media/img/photo/2020/08/minnesota-photos/a01_1538737424-1/original.jpg",
                     "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg",
                     "https://www.english.com/4aJpzQe5ynumrv3j/assets/2018/10/academic-1132x670.jpg"
                    ],
            currentImg: "",
            currentImgIdx: 0,
        }
    },
    mounted() {
        this.currentImg = this.images[0]
    },
    methods: {
        flipForward(){
            this.currentImgIdx++;
            if(this.currentImgIdx==this.images.length){this.currentImgIdx=0}
            this.currentImg=this.images[this.currentImgIdx]
        },
        flipBackward(){
            this.currentImgIdx--;
            if(this.currentImgIdx==-1){this.currentImgIdx=this.images.length-1}
            this.currentImg=this.images[this.currentImgIdx]
        }
    }
  };
  </script>
  
  <style scoped>
  
  .our-team-three {
    height: 100%;
    width: 100%;
    background-color: white;
    padding: 32px 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .our-team-two {
    font-family: "Cinzel";
    font-size: 60px;
    font-weight: 400;
    line-height: normal;
    color: gray;
    text-align: center;
    margin-bottom: 49px;
  }
  .flex-wrapper-three {
    margin-bottom: 1%;
    padding: 0 0 0 0px;
    display: flex;
    align-items: flex-start;
  }
  .back-to-top-arrow {
    width: 36px;
    height: 18px;
  }
  .rectangle-32 {
    width:100%;
    height:100%;
    max-width: 1011px;
    max-height: 578px;
    margin-right: 50px;
  }
  .flex-wrapper-one {
    height: 100%;
    position: relative;
  }
  .rectangle-49 {
    width: 18%;
    height: 100%;
    position: relative;
    max-width: 205px;
    max-height: 115px;
    margin-left: 1%;
  }
  .rectangle-50 {
    width: 18%;
    height: 100%;
    position: relative;
    left: 0%;
    top: 0;
  }
  .rectangle-52 {
    width: 18%;
    height: 100%;
    position: relative;
    left: 0;
    top: 0;
  }
  .rectangle-53 {
    width: 18%;
    height: 100%;
    position: relative;
    left: 0;
    top: 0;
  }
  .rectangle-54 {
    width: 18%;
    height: 100%;
    position: relative;
    left: 0;
    top: 0;
  }
  .group-8 {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    position: relative;
  }
  .rectangle-55 {
    width: 18;
    height: 100%;
    background-color: rgba(217, 217, 217, 0.5);
  }
  .rectangle-56 {
    width: 18.5%;
    height: 100%;
    background-color: rgba(217, 217, 217, 0.5);
    margin-left: 0;
  }
  .line-12 {
    width: 60%;
    height: 1px;
    background-color: rgba(54, 54, 54, 0.5);
    margin-top: 3%;
    margin-bottom: 3%;
  }
  .who-are-we {
    font-family: "Cinzel";
    font-size: 44px;
    font-weight: 400;
    line-height: normal;
    color: gray;
    text-align: center;
  }
  .a-group-of-sabanci-university-students {
    height: 0%;
    width: 100%;
    margin-bottom: 5%;
    font-family: "Inter";
    font-size: 24px;
    font-weight: 200;
    line-height: normal;
    color: gray;
    display: flex;
    text-align: center;
  }
  .meet-the-members {
    font-family: "Cinzel";
    font-size: 44px;
    font-weight: 400;
    line-height: normal;
    color: gray;
    text-align: center;
  }
  .members {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .flex-wrapper-four {
    padding: 0 0 0 0px;
    display: flex;
    align-items: flex-start;
    width: 100%;
  }
  .ellipse-1 {
    width: 100%;
    height: 100%;
    max-width: 198px;
    max-height: 198px;
    border-radius: 50%;
    margin: auto; 
    display: block;
  }
  .flex-wrapper-five {
    width: 200%;
    margin-bottom: 75px;
    padding: 0 0 0 22px;
    display: flex;
    align-items: flex-start;
  }
  .serhan-yilmaz {
    font-family: "Inter";
    font-size: 24px;
    font-weight: 200;
    line-height: normal;
    color: gray;
    text-align: center;
  }
  .some-long-name-to-test {
    font-family: "Inter";
    font-size: 24px;
    font-weight: 200;
    line-height: normal;
    color: gray;
    text-align: center;
    margin-right: 0%;
  }
  .flex-wrapper-six {
    display: flex;
    align-items: flex-start;
    width: 100%;
  }
  .flex-wrapper-seven {
    padding: 0 0 0 29px;
    display: flex;
    align-items: flex-start;
  }
  .random-joe {
    font-family: "Inter";
    font-size: 24px;
    font-weight: 200;
    line-height: normal;
    color: gray;
    text-align: center;
  }
  .abcdefghijklmnopqrstuvwxyz {
    font-family: "Inter";
    font-size: 24px;
    font-weight: 200;
    line-height: normal;
    color: gray;
    text-align: center;
  }
  .our-sponsors {
    font-family: "Cinzel";
    font-size: 44px;
    font-weight: 400;
    line-height: normal;
    color: gray;
    text-align: center;
  }
  .nvidia-two {
    display: flex;
    align-items: flex-start;
  }
  .rectangle-59 {
    width: 100%;
    height: 100%;
    max-width: 361px;
    max-height: 164px;
    margin-right: 5%;
  }
  .flex-wrapper-eight {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .nvidia {
    color: gray;
    margin-bottom: 13px;
  }
  .nvidia-is-a-leading-manufacturer-of-high {
    height: 7%;
    width: 100%;
    font-family: "Inter";
    font-size: 22px;
    font-weight: 200;
    line-height: normal;
    color: gray;
    display: flex;
  }
  .sabanci {
    margin-top: 2%;
    margin-bottom: 5%;
    display: flex;
    align-items: flex-start;
  }
  .sabanci-is-one-of-the-highest-ranked-uni {
    height: 9%;
    width: 100%;
    font-family: "Inter";
    font-size: 22px;
    font-weight: 200;
    line-height: normal;
    color: gray;
    display: flex;
  }
  .bottom-bar {
    background-color: black;
    padding: 55px 67px 48px 844px;
    display: flex;
    align-items: flex-start;
  }
  .flex-wrapper-ten {
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
  .back-to-top-arrow-two {
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
  .submit-button {
    margin-bottom: 170px;
    margin-left: 881px;
    border-radius: 5px;
    padding: 10px 8.11px 3px 10px;
    display: flex;
    align-items: center;
    border: 3px solid black;
  }
  .submit-button:hover {
    margin-bottom: 170px;
    margin-left: 881px;
    border-radius: 5px;
    padding: 10px 8.11px 3px 10px;
    display: flex;
    align-items: center;
    color: white;
    transition: background-color 0.5s, color 0.5s;
    background-color: black;
    border: 3px solid black;
  }
  </style>