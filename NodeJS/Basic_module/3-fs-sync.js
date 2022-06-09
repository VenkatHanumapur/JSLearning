const fs = require('fs');

const first=fs.readFileSync('./Content/first.txt','utf8');
const second=fs.readFileSync('./Content/second.txt','utf8');

console.log(first, ':', second);

fs.writeFileSync('./Content/result.txt', `The result is : ${first} ${second}`,{flag:'a'});