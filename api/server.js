const http = require('http');
const url = require('url');
const utils = require('../modules/utils');

// Set the port to the environment variable PORT, or 3000 if it's not set
const PORT = process.env.PORT || 3000;

module.exports = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    
    if (queryObject.name) {
        const greeting = utils.getDate(queryObject.name);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<div style="color: blue;">${greeting}</div>`);
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, please provide a name.');
    }
});
