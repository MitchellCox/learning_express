var express = require('express');
var app = express();

// HTTP Protocols:
// GET
// POST
// PUT
// DELETE

app.get('/', function(request, response) {
	response.sendFile(__dirname + '/index.html'); 
});

app.listen(8080);
console.log('Express Listening on Port: 8080'); 

