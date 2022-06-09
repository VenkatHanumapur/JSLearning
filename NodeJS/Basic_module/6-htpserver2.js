const http=require('http');
const server=http.createServer((req,res) => {
    console.log(req.url);
    if(req.url==='/'){
      res.write('Welcome to homepage');
    }
    else if(req.url==='/about'){
       res.write('About page');
    }
    else{
       res.write(`<h1>OOPS!</h1> 
       <p> Resource you looking for not exist</p>
       <a href="/">Home page </a>`);
    }

    res.end();
} );

server.listen(5000);
console.log('Server is listening on port 5000....');