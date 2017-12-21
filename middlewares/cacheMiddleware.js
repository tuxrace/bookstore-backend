const redisClient = require('redis').createClient
const redis = redisClient(6379, 'localhost')

module.exports = function (req, res, next) {
  const data = req.body
  if (req.url === '/find') {
    console.log(data)
    redis.get(data, function (err, reply) {
      if (err) res.status(400).json(err)
      else if (reply) res.json('ok')
    })
  }
  next()
}
