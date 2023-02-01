<template>
    <div>
        <div>
            <h1 style="position:relative; margin-top:2%; float: left; margin-left: 10%; font-size: 60px">Current Projects:</h1>
            <h1 style="margin-top:10%" v-if="currentProjects.length==0">There are no projects currently being worked on</h1>
            <b-table style="text-align: left; position: relative; left: 10%; top: 15%" :items="currentProjects" :fields="fields">
                <template #cell(name)="currentProjects">
                    <router-link :to="`/project/${currentProjects.index}`">{{ currentProjects.item.name }}</router-link>
                </template>
            </b-table>
            <h1 v-if="pastProjects.length" style="position:relative; margin-top:7%; float: left; margin-left: 10%; font-size: 60px">Past Projects:</h1>
            <b-table v-if="pastProjects.length" style="text-align: left; position: relative; left: 10%; top: 35%" :items="pastProjects" :fields="fields">
                <template #cell(name)="pastProjects">
                    <router-link :to="`/project/${pastProjects.index+currentProjects.length}`">{{ pastProjects.item.name }}</router-link>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
import currentProjects from "@/assets/currentProjects.js"
import pastProjects from "@/assets/pastProjects.js"
export default {
    data(){
        return{
            currentProjects,
            pastProjects,
            fields: ["name", "field", "projectLeader", "abstract"],
        }   
    },
}
</script>