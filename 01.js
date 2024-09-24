const fs = require('fs');

//rear json file

const data = fs.readFileSync('./d_05/example_2.json', {encoding: 'utf8'});
let dataObj = JSON.parse(data);
console.log(dataObj);

