const http = require('http');
const weather = require('yahoo-weather');


<<<<<<< HEAD
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
=======
alert('hello')
>>>>>>> c44444bf0307211bbf57bbdcd6f7e51765a7ac1c
