const http = require('http');
const port = process.env.PORT || 3000;

console.log('Run web server on port :', port);

//create a server object:
http.createServer(function (req, res) {
  res.write(`Actually I'am running on port ${port}`); //write a response to the client
  res.end(); //end the response
}).listen(port); //the server object listens on port 8080 
