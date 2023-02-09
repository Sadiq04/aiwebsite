<template>
    <div>
        <router-link style="position: absolute; top: 4%; left: 0%; height: 8vh; width: 25vh; font-size: 3vh" to="/">Home</router-link>
        <div>
            <h1 style="position:relative; margin-top:2%; float: left; margin-left: 10%; font-size: 5vh">Member Applications:</h1>
            <h1 style="margin-top:10%" v-if="applications.length==0">There are no member applications</h1>
            <b-table style="text-align: left; position: relative; left: 10%; top: 15%" :items="applications" :fields="fields">
                <template #cell(fullName)="applications">
                    <router-link :to="`/applicant/${applications.index}`">{{ applications.item.fullName }}</router-link>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            applications: this.$store.getters.memberApplications,
            fields: ["fullName", "program", "year", "GPA"],
        }   
    },
}
</script>