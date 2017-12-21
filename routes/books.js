const Books = require('../models/books')
const express = require('express')
const router = express.Router()

router.route('/')
router.post('/', (req, res) => {
  const data = req.body
  console.log(data)
  save(data).then(result => {
    res.json('ok')
  }).catch(err => {
    res.json(err)
  })
})
router.post('/', (req, res) => {
  const data = req.body
  console.log(data)
  save(data).then(result => {
    res.json('ok')
  }).catch(err => {
    res.json(err)
  })
})

function save (data) {
  const db = new Books(data)
  if (Object.keys(data).length === 0) {
    return Promise.reject(new Error())
  } else {
    return db.save()
  }
}

module.exports = router
