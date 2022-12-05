const fs = require('fs');
const http = require('http');
// console.log('test');
// console.log('test1');
const server = http.createServer((req,res)=>{
    fs.readFile('./files/home.html' , (err,data)=>{
        if(!err){
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        }
    });
    // res.writeHead(200, { 'Content-Type': 'application/JSON' });
    // res.write(JSON.stringify({data: 'Hello World!'}))
    // res.end();
});

server.listen(4500,()=>{
    console.log('SERVER RUNNING');
})