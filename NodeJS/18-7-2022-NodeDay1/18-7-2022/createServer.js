//https://nodejs.org/dist/latest-v16.x/docs/api/http.html#httpcreateserveroptions-requestlistener
const http = require('http');
// console.log(http);

const server = http.createServer((req, res)=>{
    console.log(typeof req);
    console.log(typeof res);

    res.write('FIRST CODE NODE');
    res.end();
});

// server.listen(4500 , '127.0.0.1');
server.listen(4500 , 'localhost' , ()=>{
    console.log('SERVER STARTED');
});

//localhost:4500