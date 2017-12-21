const express = require('express')
const router = express.Router()
const books = require('./books')
const find = require('./find')

router.use('/books', books)
router.use('/find', find)

router.use('/', function (req, res, next) {
  res.json('ok')
})

module.exports = router
