const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const reg = /\.jpg$|\.png$|\.jpeg$|\.gif$/;

  if (reg.test(req.url)) {
    fs.readFile(req.url.slice(1), (err, data) => {
      if (err) {
        res.end();
        throw new Error('Error while reading file: ' + err);
      }
      res.end(data);
      return;
    });
  }

  fs.readFile('index.html', 'utf-8', (err, data) => {
    if (err) {
        res.end('<strong>Error!</strong>');
        throw new Error('Error while reading index.html');
    }
    res.end(data);
  });

});

server.listen(5000, () => {
  console.log('Server is listening on port: http://localhost:5000/');
});


  