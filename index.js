// join fs for file system work
const fs = require('fs');
const path = require('path');


// check dir exist
function f1() {
    const pathToDir = './test1';
    if(fs.existsSync(pathToDir)) {
        return console.log('yes');
    }

    console.log('no!')
}
// f1();


// check file exist
function f2() {
    const pathToFile = './test/info.dat';
    if(fs.existsSync(pathToFile)) {
        return console.log('yes');
    }

    console.log('no!')
}
// f2
function f3() {
    const pathToFile = './test/potter.docx';
    const fileInfo = fs.statSync(pathToFile);
    console.log(fileInfo);
}
// f3();


//name & format file
function f4() {
    const pathToFile = './test/potter.docx';
    console.log(path.basename(pathToFile));
    console.log(path.dirname(pathToFile));
    console.log(path.extname(pathToFile));
    console.log(path.parse(pathToFile));
}
// f4();


//get file & dirs in dir
function f5() {
    const pathToDir = './test';
    const allFiles = fs.readdirSync(pathToDir);
    console.log(allFiles)
}

// f5();

//get abs path
const directoryPath = path.join(__dirname, 'test');
console.log(__dirname);