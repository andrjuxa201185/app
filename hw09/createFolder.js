const fs = require('file-system');


fs.writeFile(`Date/date.txt`, new Date().toDateString());