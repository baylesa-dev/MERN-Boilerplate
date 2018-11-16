const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

/*
** MongoDB initialization
*/
mongoose.Promise = global.Promise
mongoose.connect('mongodb://mongodb')
    .then(() => {
        console.log('BackEnd succesfully connected to mongo')
    })
    .catch(err => {
        console.error("Backend error ", err.stack)
        setTimeout(connectWithRetry, 5000)
})
const connectWithRetry = () => {
  console.log('MongoDB connection with retry')
  return mongoose.connect('mongodb://mongodb')
}

/*
** Express initialization
*/

const app = express();
const port = process.env.PORT || 8080

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/*
** Router initialization
*/

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' })
});

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, function () {
     console.log("API listening on port:" + port);
});