const fs = require('fs');

fs.readFile('./files/Home.html' ,'utf-8' , (err,data)=>{
    if(!err){
        console.log(data);
    }
});