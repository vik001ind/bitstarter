var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
//  response.send('Hello World121!')
  var fs = require('fs');
  var buf1 = fs.readFileSync("index.html")
  response.send(buf1.toString('utf-8'))
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
