const getRandomNum = require('./random');
const httpGet = require('./httpGet');


console.log(getRandomNum(44, 50));

httpGet('https://jsonplaceholder.typicode.com/posts')
    .then(response => console.log(response.length)) // --> 100
    .catch(err => console.log(err));