var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
fs.readFile('index.html', function(err, data) {
  indexfile = data.toString();
  buf = new Buffer(indexfile, "utf-8");
  if (err) throw err;
  app.get('/', function(request, response) {
    response.send(buf.toString('utf-8'));
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
