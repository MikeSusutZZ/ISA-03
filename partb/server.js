// server.js
const http = require('http');
const url = require('url');
const utils = require('./modules/utils');
const port = 3000; // You can choose your port

http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    if (queryObject.name) {
        const greeting = utils.getDate(queryObject.name);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<div style="color: blue;">${greeting}</div>`);
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, please provide a name.');
    }
}).listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
