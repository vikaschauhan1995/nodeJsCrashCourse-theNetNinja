const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request mode');
});

server.listen(8000, 'localhost', () => {
  console.log('listening for request on port 8000');
});