const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const regImg = /\.jpg$|\.png$|\.jpeg$|\.gif$|\.svg$/;
  const regJs = /\.js$/;

  if (regImg.test(req.url)) {
    fs.readFile(req.url.slice(1), (err, data) => {
      if (err) {
        res.end();
        throw new Error('Error while reading file: ' + err);
      }
      res.end(data);
    });
    return;
  }

  if (regJs.test(req.url)) {
    fs.readFile(req.url.slice(1), (err, data) => {
      if (err) {
        res.end();
        throw new Error('Error while reading file: ' + err);
      }
      res.end(data);
    });
    return;
  }

  res.setHeader('Content-Type', 'text/html');
  fs.readFile('index.html', 'utf-8', (err, data) => {
    if (err) {
        res.end('<b>Error!</b>');
        throw new Error('Error while reading index.html');
    } 
    res.end(data);
  });
});

server.listen(5000, () => {
  console.log('Server is listening on port: http://localhost:5000/');
});


  