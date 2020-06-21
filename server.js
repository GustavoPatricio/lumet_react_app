const express = require("express");
const path = require("path");
const app = express();

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

app.post("/api/email", (req, res) => { 
   res.send({'test': 'ok'});
});

app.listen(configs.port, () => {
    console.log(`Servidor aberto na porta ${configs.port}!`);
});