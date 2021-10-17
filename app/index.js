const express = require("express")
const multer = require('multer')
const morgan = require('morgan')

const config = require("../config")

const app = express()
const upload = multer()

const routes = require('../routes')
const router = require("../routes")

async function start() {
  if (config.app.env == 'production') app.use(morgan('common'))
  else {
    app.use(morgan('dev'))
  }

  // Setting up View Engine For root
  app.set('view engine', 'ejs')
  app.set('views', './views')

  // for parsing application/json
  app.use(express.json('*/*')) 
  // for parsing application/xwww-form-urlencoded
  app.use(express.urlencoded({ extended: true }))
  // for parsing multipart/form-data
  app.use(upload.any());
  app.use(express.static('public'))

  app.use(
    '/',
    routes
  )

  app.listen(config.app.port || 5000, ()=> {
    console.log('Application Running on Port', config.app.port)
  })

}

async function stop() {
  process.exit(1)
}

module.exports = {
  start,
  stop
}