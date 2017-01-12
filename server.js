var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.end('Hi!')
})

app.listen(process.env.PORT || 3000, function () {
  console.log('App running!')
})
