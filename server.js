const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
  console.log("req.url=>", req.url, " req.method=>", req.method);
  // set headers
  res.setHeader('Content-Type', 'text/html');
  fs.readFile('./views/home.html', (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      res.end(data);
    }
  });
});

server.listen(8000, 'localhost', () => {
  console.log('listening for request on port 8000');
});