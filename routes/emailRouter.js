var express = require('express');
var bodyParser = require('body-parser'); //import body parser
var cors = require('./../cors');
const emailRouter = express.Router();
var nodemailer = require('nodemailer'); //import nodemailer
emailRouter.route('/')
.options(cors.cors,(req, res) => {
    console.log("Coming email here");
    res.semdStatus(200);
})
.post(cors.cors,({req,res}) => {

  var transporter = nodemailer.createTransport({
    host: 'smtp-pt.securemail.pro',
    port: 465,
    secure: true,

    auth: {
        user: 'carlos@aurelioseguros.com',
        pass: 'Valente1980!'
    }
  });
  var  mailOptions = {
    from: 'carlos@aurelioseguros.com', //replace with your email address
    to: 'valente_carlos@hotmail.com', //replace with your email
    subject: 'Pedido de simulação', //replace with
    html: 'Node mail test successfully sent'
  };
  transporter.sendMail(mailOptions,function(error, info){
    if(error) {
        console.log(error);
        res.send('error');
    }else {
        console.log('Email sent: ' + info.response);
        res.send('Sent success'); // if email is sent successfully send Sent successfully as response

    }
  });
})
module.exports = emailRouter;