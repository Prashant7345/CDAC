const fs = require('fs');

console.log('START');

fs.readFile('./files/userinfo.txt' , 'utf-8' , function(err,data){
    if(!err){
        console.log(data);
    }
    else{
        console.log(err);
    }
});

console.log('END');