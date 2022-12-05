const fs = require('fs');
// console.log(fs);

console.log('START');

var ans_file = fs.readFileSync('./files/userinfo.txt','utf-8');
console.log(ans_file);

console.log('END');