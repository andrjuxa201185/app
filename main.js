const http = require('http');

 const server = http.createServer((response, request) => {
  request.end('Hello');
});

server.listen(5555, () => {
  console.log('server has started');
});

