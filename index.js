const http = require('http');
const port = process.env.PORT || 3000;

console.log('Run web server on port :', port);

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.end(JSON.stringify({
    statusCode: 200,
    message: `Hello, I was deployed from Git and restart automatically!`
  })); //end the response
}).listen(port); //the server object listens on port 8080 
