const { response } = require('express');
var express = require('express');
var app = express();
const port = 3000;

app.get('/helloworld', function(request, response) {
    response.send('hello world')
})

app.listen(port, function() {
    console.log('Listening at Port 3000');
})