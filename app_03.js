const http = require('http');
const PORT = 3500;

http.createServer((req, res) => {
    const url = req.url;
    console.log(url);

    switch (url) {
        case '/':
            console.log('main page is running!');
            res.write('<h1>Main page</h1>');
            break;
        case '/about':
            console.log('about page');
            res.write('<h1>About page</h1>');
            break
        default:
            console.log('404 page');
            res.write('<h1>404 page</h1>');
            break
    }
    res.end();
}).listen(PORT);