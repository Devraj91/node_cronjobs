// https://scotch.io/tutorials/nodejs-cron-jobs-by-examples#toc-different-intervals-for-scheduling-tasks


const cron = require("node-cron");
let nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "INSERT EMAIL",
        pass: "INSERT PASSWORD"
    }
});

const express = require("express");
const fs = require("fs");

app = express();

cron.schedule('*/3 * * * * *', function() {
    console.log("---------------------");
    console.log("Running Cron Job in every 3secs");
    let mailOptions = {
        from: "INSERT EMAIL",
        to: "INSERT EMAIL",
        subject: 'not a GDPR update',
        text: 'HI there, this email was automatically sent by us'
    };

    transporter.sendMail(mailOptions, function(err, info) {
        if(err) {
            throw err;
        }
        else {
            console.log("Email sent successfully")
        }
    });
    
    });

app.listen(3000);