const http = require('http');
const express = require('express');
const RED = require('node-red');
const settings = require("./settings.js");

// Create an Express app
const app = express();

// Create a server
const server = http.createServer(app);



// Start Node-RED
RED.init(server, settings);

app.get('/', (req, res) =>
{
    res.redirect('/red');
});

// Serve the Node-RED editor and routes
app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

server.listen(process.env.PORT || 1880);

// Start Node-RED runtime
RED.start();
