const fs = require('fs')
const path = require('path')
const express = require('express')
const session = require('express-session')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const https = require('https')
const socketio = require('socket.io')
const passportInit = require('./src/lib/passport.init')
const { CLIENT_ORIGIN } = require('./config')
require('dotenv').config()

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

app.set('port', port)
app.use(cors({origin: CLIENT_ORIGIN}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUnintialized: true
}))

/*
** Passport initialization
*/

app.use(passport.initialize())
passportInit()

/*
** HTTPS Server initialization
*/

const certOptions = {
    key: fs.readFileSync(path.resolve('./certs/server.key')),
    cert: fs.readFileSync(path.resolve('./certs/server.crt')),
    ca: fs.readFileSync(path.resolve('./certs/server.csr'))
}

const server = https.createServer(certOptions, app)

/*
** Socket.io initialization
*/

const io = socketio(server)
app.set('io', io)

/*
** Router initialization
*/

const loginRouter = require("./src/routes/login.routes")

app.use("/login", loginRouter)

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

server.listen(port, function () {
     console.log("Back-End listening on", port)
});