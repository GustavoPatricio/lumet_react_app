const express = require("express");
const path = require("path");
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require("body-parser");
const { truncate } = require("fs");
const environment = require("./temporary_for_passwords.json");

const configs = {
    caminho: "build", 
    persistHTTPS: false,
    port: process.env.PORT || 3000
}

if (configs.persistHTTPS) 
    app.use((req, res, next) => { 
        if (req.headers["x-forwarded-proto"] == "http") 
            res.redirect(`https://${req.headers.host}${req.url}`);
        else 
            next();
    });

app.use(express.static(configs.caminho)); 

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, configs.caminho, "index.html"));
});

app.use(bodyParser.json());

app.post("/api/email", (req, res) => {

    EmailSend()
    
   res.send({'send': 'ok'});
});

app.listen(configs.port, () => {
    console.log(`Servidor aberto na porta ${configs.port}!`);
});


sendToUser = (email_login, email_password, receiver) => { 
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: email_login,
            pass: email_password
        }
   });

   let info = transporter.sendMail({
        from: `Lumet <${email_login}>`,
        to: receiver,
        subject: req.body.assunto,
        html: 
        `
        <b> Nome :  </b> ${req.body.nome} <br/>
        <b> Email :  </b> ${req.body.email} <br/>
        <b> Empresa :  </b> ${req.body.empresa} <br/>
        <b> Telefone :  </b> ${req.body.telefone} <br/> <br/>
        <b> Mensagem :  </b> ${req.body.mensagem} <br/>
        `
   });
}

sendToLumet = (email_login, email_password, receiver) => { 
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: email_login,
            pass: email_password
        }
   });

   let info = transporter.sendMail({
        from: `Lumet <${email_login}>`,
        to: receiver,
        subject: req.body.assunto,
        html: 
        `
        <b> Nome :  </b> ${req.body.nome} <br/>
        <b> Email :  </b> ${req.body.email} <br/>
        <b> Empresa :  </b> ${req.body.empresa} <br/>
        <b> Telefone :  </b> ${req.body.telefone} <br/> <br/>
        <b> Mensagem :  </b> ${req.body.mensagem} <br/>
        `
   });
}