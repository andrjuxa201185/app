const fs = require('fs');

const read = (path, callback) => fs.readFile(path, (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  callback(data.toString());
});

module.exports = read;