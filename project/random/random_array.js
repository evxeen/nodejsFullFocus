const randomInt = require('./random_int');

module.exports = function (length = 10) {
    let temp = [];
    for(let i = 0; i < length; i++) {
        temp.push(randomInt());
    }
    return temp;
}

