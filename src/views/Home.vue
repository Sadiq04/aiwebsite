<template>
    <div style="height: 600%">
        <div id="nav bar" style="position: fixed; width: 100%; height: 10%; top:0%; background-color: black; float: right; z-index: 1;">
            <a href="#Contact" style="margin: 0; position: relative; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%); right: 3%; color: white; font-size: 3vh; margin-right: 0; margin-left: auto; float: right;">Contact us</a>
            <a href="#Join the team" style="margin: 0; position: relative; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%); right: 6%; color: white; font-size: 3vh; margin-right: 0; margin-left: auto; float: right;">Join us</a>
            <a href="#Sponsors" style="margin: 0; position: relative; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%); right: 9%; color: white; font-size: 3vh; margin-right: 0; margin-left: auto; float: right;">Sponsors</a>
            <a href="#The Team" style="margin: 0; position: relative; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%); right: 12%; color: white; font-size: 3vh; margin-right: 0; margin-left: auto; float: right;">The Team</a>
            <a href="#Projects" style="margin: 0; position: relative; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%); right: 15%; color: white; font-size: 3vh; margin-right: 0; margin-left: auto; float: right;">Projects</a>
            <a href="#AI info" style="margin: 0; position: relative; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%); right: 18%; color: white; font-size: 3vh; margin-right: 0; margin-left: auto; float: right;">What is an AI</a>
            <a href="#Who we are" style="margin: 0; position: relative; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%); right: 21%; color: white; font-size: 3vh; margin-right: 0; margin-left: auto; float: right;">Who we are</a>
            <h1 style="margin: 0; position: relative; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%); left: 3%; color: white; font-size: 40px; margin-right: 0; margin-left: auto; float: left;">(Insert club logo)</h1>
        </div>    
        <div style="position: absolute; top: 0%;" id="Who we are"></div>
        <div style="position: absolute; top: 100%;" id="AI info"></div>
        <div style="position: absolute; top: 200%;" id="Projects"></div>
        <div style="position: absolute; top: 300%;" id="The Team"></div>
        <div style="position: absolute; top: 400%;" id="Sponsors"></div>
        <div style="position: absolute; top: 450%;" id="Join the team"></div>
        <div style="position: absolute; top: 500%;" id="Contact"></div>

        <div style="position: absolute; top: 40%; left: 50%; transform: translateX(-50%) translateY(-50%);">
            <h1 style="font-size: 5vh">Who we are. What we do.</h1>
            <h1 style="font-size: 2.5vh;">We are a group of passionate students who are interested in AI/ML development and deployment. </h1>
            <h1 style="font-size: 2.5vh;">Our mission is to foster a community of like-minded individuals who can come together to share ideas, collaborate on projects, and push the boundaries of what is possible with AI.</h1>
            <h1 style="font-size: 2.5vh;">We will hold weekly meetings, workshops, conferences as well as learning sessions, sponsored by companies that are pioneers in the AI/ML areas.</h1>
            <h1 style="font-size: 2.5vh;">(Insert group photo)</h1>
        </div>
        <div style="position: absolute; top: 125%">
            <h1 style="position: absolute; font-size: 5vh; bottom: 110%;left: 50%; transform: translateX(-50%) translateY(-50%);">What is an AI?</h1>
            <h1 style="text-align: left; margin-left: 5%; margin-top: 5%; width: 50%; font-size: 2.5vh">An AI, or artificial intelligence, is a computer system that is designed to simulate human intelligence and thought processes. This can include tasks such as problem solving, decision making, and learning. AIs can be programmed to perform a wide range of tasks, from simple automation to complex decision-making and analysis. They can be found in many different applications, from self-driving cars to virtual personal assistants.</h1>
            <img style="width:35%; position:absolute; right: 5%; top: 0px" alt="AI image" src="../assets/ai-technology-brain-background-digital-transformation-concept.jpg">
            <router-link to="/aiChatbox"><b-button variant="info">Try out an AI chatbox</b-button></router-link>
        </div>
        <div style="position: absolute; top: 230%; left: 50%; transform: translateX(-50%) translateY(-50%);">
            <h1 style="font-size: 5vh">Projects</h1>
            <h1 style="font-size: 2.5vh">As an AI club we offer the possibility to directly work on projects related to AI/ML. If you would like the chance to work on such projects, or if you are interested in seeing what we have done, click the button below.</h1>
            <router-link to="/projects"><b-button variant="info">Projects</b-button></router-link>
        </div> 
        <div style="position: absolute; top: 330%; left: 50%; transform: translateX(-50%) translateY(-50%);">
            <h1 style="font-size: 5vh">The team:</h1>
            <h1 style="font-size: 2.5vh">(To be decided what we will put here)</h1>
        </div>
        <div style="position: absolute; top: 450%; left: 50%; transform: translateX(-50%) translateY(-50%);">
            <h1 style="font-size: 5vh">Our Sponsor: </h1>
            <img alt="NVidia logo" src="../assets/01-nvidia-logo-vert-500x200-2c50-d.png">
        </div>
        <div style="position: absolute; top: 500%; left: 50%; transform: translateX(-50%) translateY(-50%);">
            <h1 style="font-size: 5vh">Join us:</h1>
            <h1 style="font-size: 2.5vh">If you're interested in joining our club and becoming a part of our community, we'd love to hear from you. Let's work together to shape the future of AI.</h1>
            <router-link to="/applicationForm"><b-button variant="info">Join the club</b-button></router-link>
            <router-link to="/viewApplications"><b-button variant="info">Applications</b-button></router-link>
        </div>
        <div style="position: absolute; top: 550%; left: 50%; text-align: left; transform: translateX(-50%) translateY(-50%);">
            <h1 style="font-size: 5vh">Contact us: </h1>
            <h1 style="font-size: 2.5vh">&emsp; Mail: (Insert contact mail)</h1>
            <h1 style="font-size: 2.5vh">&emsp; Phone Number: (Insert contact phone number)</h1>
        </div>
    </div>
</template>

<style>
html { scroll-behavior: smooth;}
</style>