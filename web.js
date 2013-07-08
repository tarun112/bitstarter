var express = require('express');

var app = express.createServer(express.logger());

var out = fs.readFileSync("index.htnl");

app.get('/', function(request, response) {
// response.send('Hello World 2!');
  response.send(out.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
