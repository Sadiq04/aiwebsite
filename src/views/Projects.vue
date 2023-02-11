<template>
    <div>
        <router-link style="position: absolute; top: 4%; left: 0%; height: 8vh; width: 25vh; font-size: 3vh" to="/">Home</router-link>
        <router-link to="/projectAddingForm"><button style="position: absolute; top: 4%; right: 10%; height: 8vh; width: 25vh; font-size: 3vh">Propose Project</button></router-link>
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