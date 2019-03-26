const date = new Date();
const pathArray = process.argv[1].split('\\');

const stringDate = `${date.getHours()}:${date.getMinutes()} ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;

console.log(`${stringDate} ${pathArray[pathArray.length - 1]}.js`);

