var http = require('http');
http.createServer(function(req,res){
    res.write("hello world");
    res.end();
}).listen(8080);


//http://localhost:8080/