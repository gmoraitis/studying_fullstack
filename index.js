// We load express package into the file
const express = require('express');
// We create a new instance of express or our app
const server = express();
// We define the port that our server will run on
const port = 3000;

// here we define a route for our server
// the route is /hello endpoint
// every time we make a request to the /hello endpoint
// the server will respond with 'Hello World' message 
// made with the callback function
// the request is made using the GET method
// the server will respond with the send method 
// speaking about get means that we say 
// the user wants to get some information from the server
// so in the endpoint /hello 
// we are saying that we want to get the information 'Hello World'
// that is stored in the server
server.get('/hello', function (req, res) {
    res.send('Hello World');
})

// the listen method is used to start the server
// it takes two arguments
// the port number and a callback function
// the callback function is used to log a message to the console
server.listen(port, function() {
    console.log('Server is running on port ' + port);
})

// to start the server we run the command
// node index.js

// to make a request to the server we use the browser
// or the curl command
// curl http://localhost:3000/hello
// or we can use the browser and type the url
// http://localhost:3000/hello

// the key concept here is that we are creating a server
// that listens to requests on a specific port
// and responds with a message

// the server object has methods like get, post, put, delete

// all the methods take two arguments
// the first argument is the route or endpoint
// the second argument is a callback function
// the callback function takes two arguments
// the request and the response
// the request object contains information about the request
// the response object is used to respond to the request
// the response object has methods like send, json, status, etc
// that are used to respond to the request

// the listen method is used to start the server
// it takes two arguments
// the port number and a callback function
// the callback function is used to log a message to the console

