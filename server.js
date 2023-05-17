const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
  console.log("req.url=>", req.url, " req.method=>", req.method);
  // set headers
  res.setHeader('Content-Type', 'text/html');
  // routing
  let path = './views/';
  switch (req.url) {
    case '/':
      path += 'home.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/about-me':
      res.statusCode = 301;
      // redirects
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }
  fs.readFile(path, (err, data) => {
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
