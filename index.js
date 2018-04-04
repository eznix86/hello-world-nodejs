"use strict";
const http = require('http');
const fs = require('fs');
const hostname = 'localhost';
const port = 3000;

fs.readFile('/opt/lampp/htdocs/index.html', (err, html)=>{
    const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(html);
    res.end();

  }).listen(port, hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${port}/`)
  });

});
