const express = require('express')
const router = express.Router()
const books = require('./books')
const find = require('./find')
const redisClient = require('redis').createClient
const redis = redisClient(6379, 'localhost')

router.use('/books', books)
router.use('/find', find)

router.use('/flush', function (req, res, next) {
  redis.flushdb(function (err, result) {
    if (err) res.status(400).json(err)
    console.log('done')
  })
  res.json('done')
})

router.use('/', function (req, res, next) {
  res.json('ok')
})

module.exports = router
