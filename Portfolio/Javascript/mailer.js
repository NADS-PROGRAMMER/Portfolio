"use strict";

const email = require('nodemailer');

const emailTransporter = email.createTransport({

    service: "gmail",
    secure: true,
    auth: {
        user: 'marcelonads@gmail.com',
        pass: 'Lauriano_112300'
    },
    tls: {
        rejectUnauthorized: false,
    }
})

const emailOptions = {

  from: 'marcelonads@gmail.com',
  to: 'nadrufomarcelo3469@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

emailTransporter.sendMail(emailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
