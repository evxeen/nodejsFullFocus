const http = require('http');
const fs = require('fs');
const PORT = 3500;

http.createServer((req, res) => {
    const url = req.url;
    console.log(url);

    res.setHeader("Content-Type", "text/html; charset=utf-8");

    switch (url) {
        case '/':
            console.log('mane page is running!');
            res.write('<h1>Mane page</h1>');
            break;
        case '/contact':
            console.log('contacts');
            let data = fs.readFileSync('./public/contact.html', {encoding: 'utf-8', flag: 'r'});
            res.write(data);
            break;
        default:
            console.log('404 page');
            res.write('<h1>404 page</h1>');
            break;
    }
    res.end();
}).listen(PORT);