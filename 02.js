const fs = require('fs');

//write json file
const obj = {
        "name": "apple",
        "size": 12,
        "color": 1123123
}

fs.writeFileSync('./d_05/j_1.json', JSON.stringify(obj), {encoding: 'utf8', flag: "w"});

