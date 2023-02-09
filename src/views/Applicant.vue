<template>
    <div style="font-size: 2.5vh">
        <router-link style="position: absolute; left: 1%; top: 3%; font-size: 2.5vh" to="/viewApplications">Applications</router-link>
        <div>
            <div style="text-align: left; margin-left: 2%; margin-top: 5%; width: 49%; font-size: 2.5vh">  
                <h1 style="font-size: 2.5vh">Full name: {{ applications[index]["fullName"] }} </h1>
                <h1 style="margin-top:2%; font-size: 2.5vh">Email: {{ applications[index]["email"] }} </h1>
                <h1 style="margin-top:2%; font-size: 2.5vh">Program: {{ applications[index]["program"] }} </h1>
                <h1 style="margin-top:2%; font-size: 2.5vh">Year: {{ applications[index]["year"] }} </h1>
                <h1 style="margin-top:2%; font-size: 2.5vh">GPA: {{ applications[index]["GPA"] }} </h1>
                <h1 style="margin-top:2%; font-size: 2.5vh">AI Interest: {{ applications[index]["aiInterest"] }} </h1>
                <h1 style="margin-top:2%; font-size: 2.5vh">Club Knowledge: {{ applications[index]["clubKnowledge"] }} </h1>
                <h1 style="margin-top:2%; font-size: 2.5vh">Club Interest: {{ applications[index]["clubInterest"] }} </h1>
                <h1 style="margin-top:2%; font-size: 2.5vh">GPA: {{ applications[index]["GPA"] }} </h1>
                <a style="margin-top:2%; font-size: 2.5vh;" :href="'//'+`${applications[index]['LinkedIn']}`" targer="_blank">{{ applications[index]["LinkedIn"] }}</a><br>
                <a style="margin-top:2%; font-size: 2.5vh;" :href="'//'+`${applications[index]['GitHub']}`" targer="_blank">{{ applications[index]["GitHub"] }}</a>
            </div>    
        </div>
    </div>
</template>
 
<script>
export default {
data() {
    return {
      applications: this.$store.getters.memberApplications,
      index: 0,
    }
},
mounted() {
  this.index = this.$route.params.id;
}
}
/*
fullName: "",
    email: "",
    program: "",
    year: "",
    GPA: "",
    aiInterest: "",
    clubKnowledge: "",
    clubInterest: "",
    LinkedIn: "",
    GitHub: "",*/
</script>