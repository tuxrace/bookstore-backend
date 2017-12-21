const mongoose = require('../plugins/mongoose')
const Schema = mongoose.Schema

const Author = mongoose.model('books', new Schema({}, { strict: false }))

module.exports = Author
