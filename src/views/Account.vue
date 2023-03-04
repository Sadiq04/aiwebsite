<template>
    <div>
        <router-link style="position: absolute; top: 4%; left: 0%; height: 8vh; width: 25vh; font-size: 3vh" to="/">Home</router-link>
        <div>
            <h1>Hello {{ user.fullName.split(" ")[0] }}</h1>
        </div>
    </div>
</template>

<script>
import store from '@/store/index';
export default {
    data(){
        return{
            user: {},
            members: this.$store.getters.members,
        }
    },
    mounted() {
        let userMail = this.$store.getters.user.email;
        for(let i = 0; i < this.members.length; i++){
            if(userMail==this.members[i].email){
                this.user = this.members[i];
                break;
            }
        }
    }
}
</script>