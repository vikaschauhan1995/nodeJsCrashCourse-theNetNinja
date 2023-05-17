const http = require('http');

const server = http.createServer((req, res) => {
  console.log("req.url=>", req.url, " req.method=>", req.method);
  // set headers
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello world');
  res.write('Hello world again!');
  res.end();
});

server.listen(8000, 'localhost', () => {
  console.log('listening for request on port 8000');
});