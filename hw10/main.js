const http = require('http');
const weather = require('yahoo-weather');



// http.get('http://info.cern.ch', (res) => {
//    if (res.statusCode !== 200) throw new Error(res.statusMessage);
//    res.setEncoding('utf-8');
//    res.on('data', console.log);
// });

const getWeather = async () => {
  const result = await weather('kharkiv');

  console.log(result.description);
}

getWeather();

  