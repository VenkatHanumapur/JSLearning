const http=require('http');

const server=http.createServer((req,res) => {
   res.write('Hello welcome to first page');
   res.end();
});

server.listen(5000);
console.log('Server  is lsistening on port 5000 ....');