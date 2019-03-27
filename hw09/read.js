const fs = require('fs');

const read = (name) => {
  return new Promise((res, rej) => {
    fs.readFile(name, 'utf8', (err, data) => {
       if (err) rej(err);
       res(data.toString());
    });
  });
}

  
module.exports = read;
