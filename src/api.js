const app = require("express")();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/api/teste', (req, res) => {
   res.send({teste: 'ok'});
});

app.listen(3001);