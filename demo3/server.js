const express = require('express');
const app = express();
const path = require('path');
const proceess = require('process');

const port = proceess.env.port || 3000;

app.use('/static', express.static(__dirname+'/static'));

app.get('/', function(request, response, next) {
    response.sendFile(path.join(__dirname+'/app/index.html'));
});

app.listen(port, function() {
    console.log('Running at http://localhost:'+port);
});