// Create web server
// Create a web server that listens to the port 3000. The server should respond to requests to /comments with the JSON object { comments: [] }.

// You can use the http module to create the server and the listen method to start listening to the port.

// The server should listen to the port 3000

// The server should respond to requests to /comments with the JSON object { comments: [] }

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ comments: [] }));
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
