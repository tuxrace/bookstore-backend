const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
const handleErrors = require('./middlewares/handleErrors')
const cache = require('./middlewares/cacheMiddleware')
const app = express()

app.use(bodyParser.json())
app.use(handleErrors)
app.use(cache)
app.use(routes)

module.exports = app
