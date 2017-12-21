const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/bookstore', { useMongoClient: true })
mongoose.Promise = global.Promise
module.exports = mongoose
