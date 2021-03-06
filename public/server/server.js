const http = require('http')
const express = require('express')
const setupApiRoutes = require('./middlewares/api')
const open = require('open')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
process.env.HTTP_PORT = process.env.HTTP_PORT || 8080

const setupAppRoutes =
  process.env.NODE_ENV === 'development' ? require('./middlewares/dev') : require('./middlewares/prod')

const app = express()

app.set('env', process.env.NODE_ENV)

setupApiRoutes(app)
setupAppRoutes(app)

http.createServer(app).listen(process.env.HTTP_PORT, (err) => {
  if(err){
    console.log(err)
  } else {
    console.log("Ready on: " + process.env.HTTP_PORT)
    open(`http://localhost:${process.env.HTTP_PORT}`)
  }
})
