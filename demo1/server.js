const express = require('express');
const app = express();
const process = require('process');
const path = require('path');

const port = process.env.port || 3000;

const getPathFile = (pathFile) => path.join(__dirname+'/'+pathFile);

app.get('/', function(request, response, next) {
    // response.sendFile(path.join(__dirname+'/app/index.html'));
    response.sendFile(getPathFile('app/index.html'));
});

app.get('/node/:nodeId?', function(request, response, next) {
    
    // if(typeof request.params.nodeId !== 'undefined') {
    //     response.sendFile(getPathFile('app/exists-node.html'));
    // }

    response.sendFile(getPathFile('app/new-node.html'));
})

app.listen(port, function() {
    console.log(`Running at ${port}`)
});