var http = require("http");

var portUno = 7000;
var portDos = 7500;

var goodPort = ['you are smart, you got this, keep up the good work']
var badPort = ['you suck, just stop trying, go home and hide in a pillow']

var random1 = goodPort[Math.floor(Math.random() * goodPort)];
var random2 = badPort[Math.floor(Math.random() * badPort)];

function handleRequestGood(request, response) {
    response.end(random1 + request.url);
}

var server = http.createServer(handleRequestGood);

server.listen(portUno, function(){
    console.log("server is listening on http://localhost:%s", portUno)
})

function handleRequestBad(request, response) {
    response.end(random2 + request.url);
}

var server = http.createServer(handleRequestBad);

server.listen(portDos, function(){
    console.log("server is listening on http://localhost:%s", portDos)
})