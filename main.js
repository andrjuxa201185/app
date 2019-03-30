const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/git.png') {
    fs.readFile('git.png', (err, data) => {
      if (err) {
          res.end('<strong>Error!</strong>');
          throw new Error('Error while reading index.html');
      };
      res.end(data);
    });

    return;
  }

  res.setHeader('Content-Type', 'text/html');
  fs.readFile('index.html', 'utf-8', (err, data) => {
    if (err) {
        res.end('<strong>Error!</strong>');
        throw new Error('Error while reading index.html');
    };
    res.end(data);
  });

});

server.listen(5555, () => {
  console.log('server has started');
});
