const express = require('express');
const app = express();
const process = require('process');
const path = require('path');

const port = process.env.port || 3000;

app.use('/static', express.static(__dirname+'/static'));

const getPathFile = (pathFile) => path.join(__dirname+'/'+pathFile);

app.get('/', function(request, response, next) {
    // response.sendFile(path.join(__dirname+'/app/index.html'));
    response.sendFile(getPathFile('app/painel.html'));
});

app.get('/credenciamento', function(request, response, next) {
    response.sendFile(getPathFile('app/credenciamento.html'));
})

app.listen(port, function() {
    console.log(`Running at ${port}`)
});