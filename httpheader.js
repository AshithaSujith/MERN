var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('<h6 style="color: blue;">Hello World</h6>');
    res.end();
}).listen(8080);