const redisClient = require('redis').createClient
const redis = redisClient(6379, 'localhost')

module.exports = function (error, req, res, next) {
  const data = req.body
  redis.get(data.toString(), function (err, reply) {
    if (err) res.status(400).json(err)
    else if (reply) res.json(reply)
  })
  res.status(400).json(error)
}
