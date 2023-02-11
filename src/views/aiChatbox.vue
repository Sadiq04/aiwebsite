<template>
    <div>
        <label style="margin-top: 3%" for="prompt">Enter your prompt </label><span style="color: red">*</span><span>:</span>
        <input type="text" id="prompt" v-model="prompt" /><br>
        <b-button @click="submitPrompt()">Submit</b-button>
        <h1 v-if="result!=''">Result: {{ result }}</h1>
    </div>
</template>

<script>
const OpenAI = require('openai-api');

// Load your key from an environment variable or secret management service
// (do not include your key directly in your code)
export default {
    data(){
        return{
            callType: "",
            prompt: "",
            result: "",
            OPENAI_API_KEY: this.$store.getters.openAIKey,
            ORG_ID: this.$store.getters.orgID,
        }
    },
    methods: {
        submitPrompt(){
            const openai = new OpenAI(this.OPENAI_API_KEY);
            (async () => {
                const gptResponse = await openai.complete({
                    engine: 'davinci',
                    prompt: this.prompt,
                    maxTokens: 5,
                    temperature: 0.5,
                    stream: false,
                    stop: ['\n', "testing"]
                });
                this.result = gptResponse.data.choices[0].text;
            })();
        }
    }
}
</script>