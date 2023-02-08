const express = require('express')
const fileUpload = require('express-fileupload');
//const bodyparse = require('body-parser')
const app = express()
app.use(express.static('views'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//app.use(bodyparse.json())
//app.use(bodyparse.urlencoded({ extended: true }))
const port = 465
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port,
        secure: true,
        auth: {
            user: "aiclubsender@gmail.com",
            pass: ""
        }
})
app.post('/', fileUpload(), (req, res) => {
        //req.body = JSON.parse(Object.keys(req.body))
        res.status(200).send('asddds')
        console.log(req.body)
        message = {
                from: "aiclubsender@gmail.com",
                to: "aiclubform@gmail.com",
                subject: `Application from ${req.body.fullName}`,
                html: `<h1>Full Name: ${req.body.fullName}</h1>
                       <h1>Program/Department: ${req.body.program}</h1>
                       <h1>Year: ${req.body.year}</h1>
                       <h1>GPA: ${req.body.GPA}</h1>
                       <h1>Have you worked on/took interest in AI in the past?: ${req.body.aiInterest}</h1>
                       <h1>How did you hear about our club?: ${req.body.clubKnowledge}</h1>
                       <h1>Why are you interested in joining our club?: ${req.body.clubInterest}</h1>
                       <h1>Email: ${req.body.email}</h1>
                       <h1>LinkedIn: ${req.body.LinkedIn}</h1>
                       <h1>GitHub: ${req.body.GitHub}</h1>`,
                /*attachments: {
                        filename: `${req.body.fullName} CV.pdf`,
                        content: req.body.CV
                    },*/
        }
        transporter.sendMail(message, function(err, info) {
                if (err) {
                console.log(err)
                } else {
                console.log(info);
                }
        })
})
app.listen(port, ()=> console.log("asd"))