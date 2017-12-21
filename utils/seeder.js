const Books = require('../models/books')
const mockData = require('./mockData')

Books.find({}).then(result => {
  if (result.length === 0) Books.insertMany(mockData)
  process.exit()
})
