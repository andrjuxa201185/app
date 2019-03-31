const https = require('https');

const httpGet = (path) => {
    return new Promise((res, rej) => {
        https.get(path, (rezult) => {
            if (rezult.statusCode == 404) rej(new Error(rezult.statusMessage));
            let posts = '';
            rezult.on('data', data => posts += data);
            rezult.on('end', () => res(JSON.parse(posts)));
        });
    });
}

module.exports = httpGet;
