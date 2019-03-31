const fs = require('file-system');
const http = require('http');


http.get('http://wttr.in/~kharkov', (res) => {
    let rezult = '';
    res.on('data', data => rezult += data);
    res.on('end', () => fs.writeFile('weather.html', rezult));
}); 