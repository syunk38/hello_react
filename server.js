var http = require('http');
var fs  = require('fs');
http.createServer(function (req, res) {
  fs.readFile(__dirname + '/index.html', 'utf-8', function(err, data){
    if(err) {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write('ミスった');
      return res.end();
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080, '127.0.0.1');
console.log("server listening...")
