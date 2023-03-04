<template>
    <div>
        <label style="margin-top: 3%" for="prompt">Enter your prompt </label><span style="color: red">*</span><span>:</span>
        <input type="text" id="prompt" v-model="prompt" /><br>
        <b-button @click="submitPrompt()">Submit</b-button>
        <h1 v-if="result!=''">Result: {{ result }}</h1>
    </div>
</template>

<script>
const dotenv = require("dotenv")
dotenv.config()
const OpenAI = require('openai-api');
const OPENAI_API_KEY = "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"
const ORG_ID = process.env.VUE_APP_ORG_ID;
export default {
    data(){
        return{
            callType: "",
            prompt: "",
            result: "",
        }
    },
    methods: {
        submitPrompt(){
            const openai = new OpenAI(OPENAI_API_KEY);
            (async () => {
                const gptResponse = await openai.complete({
                    engine: 'davinci',
                    prompt: this.prompt,
                    maxTokens: 100,
                    temperature: 1,
                    topP: 1,
                    presencePenalty: 0,
                    frequencyPenalty: 0,
                    bestOf: 1,
                    n: 1,
                    stream: false,
                    stop: ['\n', "testing"]
                });
                let beginning = this.prompt;
                this.result = beginning + " " + gptResponse.data.choices[0].text;
            })();
            this.prompt="";
        }
    }
}
</script>