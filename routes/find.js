const Books = require('../models/books')
const express = require('express')
const router = express.Router()
const redisClient = require('redis').createClient
const redis = redisClient(6379, 'localhost')

router.route('/')
router.post('/', (req, res) => {
  const data = req.body
  find(data, Books).then(result => {
    redis.set(data.toString(), result.toString(), function () {
      res.json(result)
    })
  }).catch(err => {
    res.json(err)
  })
})

function find (data, db) {
  if (Object.keys(data).length === 0) {
    return Promise.reject(new Error())
  } else {
    return db.find(data)
  }
}

module.exports = router
