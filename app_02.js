const http = require('http');

http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    console.log('Server started!');
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write('<h2>Hello!</h2>');
    res.write('<p>server run!</p>');
    res.end();
}).listen(3500);