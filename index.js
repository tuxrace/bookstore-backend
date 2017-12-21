const app = require('./app')
const http = require('http')
const { port } = require('./configs')

app.set('port', port)

const server = http.createServer(app)

server.listen(port, function () {
  console.log('App is running at localhost port ' + port)
})
