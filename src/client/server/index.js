const express = require('express')
const path = require('path')
const http = require('http')

const app = express();

app.use('/', express.static(path.join(__dirname, '..', 'dist')))
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')))

const routes = require('./routes')

app.use('/', routes)

const port = process.env.PORT || '3000'
app.set('port', port)

const server = http.createServer(app)

server.listen(port, '127.0.0.1', () => console.log(`Server Running on port ${port}`))