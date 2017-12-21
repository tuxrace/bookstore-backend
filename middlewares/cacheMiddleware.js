const redisClient = require('redis').createClient
const redis = redisClient(6379, 'localhost')

module.exports = function (req, res, next) {
  const data = req.body
  if (req.url === '/find') {
    redis.flushdb(function (err, result) {
      if (err) res.status(400).json(err)
      console.log('done')
    })
    
    redis.get(data.toString(), function (err, reply) {
      console.log(reply)
      if (err) res.status(400).json(err)
      else if (reply) res.json(reply)
      else next()
    })
  }
}
