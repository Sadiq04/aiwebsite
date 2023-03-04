
import { RouterView } from 'vue-router';

<template>
    <div>
      <div class="flex-wrapper-eight" style="position: fixed; z-index: 9; width: 100%">
          <div class="logo-two"><router-link to="/"><p class="logo">logo</p></router-link></div>
          <div class="header">
            <p class="profile">Profile</p>
            <router-link class="profile" to="/workshops"><p>Workshops</p></router-link>
            <router-link class="profile" to="/projects"><p>Projects</p></router-link>
            <router-link class="profile" to="/aboutUs"><p>Our Team</p></router-link>
            <router-link class="profile" to="/events"><p>Events</p></router-link>
            <router-link class="profile" to="/applicationForm"><p>Join Us!</p></router-link>
            <router-link class="profile" to="/login"><p>Login</p></router-link>
            <router-link class="profile" to="/aiChatBox"><p>Chatbox</p></router-link>
          </div>
      </div>
      <router-view/>
    </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.flex-wrapper-eight {
  margin-bottom: 0%;
  padding: 0 0 0 0%;
  display: flex;
  align-items: flex-start;
  width: 100%;
}
.profile {
  font-family: "Inter";
  font-size: 18px;
  font-weight: 300;
  line-height: normal;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  margin-right: 1%;
  width: 100%;
}
.header {
  margin-top: 13px;
  display: flex;
  align-items: flex-start;
  margin-right: 0;
  width: 100%;
}
.logo-two {
  margin-right: 37%;
  position: relative;
  border: 3px solid rgba(0, 0, 0, 1);
}
#nav {
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
