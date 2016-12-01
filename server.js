const http = require('http');
const express = require('express');
const path = require('path');

const getUsers = require('./api/getUsers.js');

const app = express();
//Lets define a port we want to listen to
const PORT=7000;

app.get('/getUsers', getUsers);

//Create a server
var server = http.createServer(app);

//Lets start our server
server.listen(PORT, () => {
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
