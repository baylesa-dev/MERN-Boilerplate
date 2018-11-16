const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const port = 8080
const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' })
});

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, function () {
     console.log("http://localhost:" + port);
});