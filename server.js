var express = require('express')
var app = express()

app.get('/', function (req, res) {
  var ip = req.ip
  var language = req.headers['accept-language']
  var software = req.headers['user-agent']
  var json = {
    "ip": ip.slice(7),
    "language": language.split(',')[0],
    "software": software.split('(')[1].split(')')[0]
  }

  res.end(JSON.stringify(json))
})

app.listen(process.env.PORT || 3000, function () {
  console.log('App running!')
})
