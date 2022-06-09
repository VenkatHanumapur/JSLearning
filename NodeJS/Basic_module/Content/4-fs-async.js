const fs=require('fs');

console.log('start')
fs.readFile('./Content/first.txt','utf-8',(err,result) =>{
    if(err){
        console.log(err);
        return;
    }
    const first=result;
    console.log('Done with the first task');
    fs.readFile('./Content/second.txt','utf-8',(err,result) => {
        if(err){
            return;            
        }
        const second = result;
        console.log('Done with the second task');
        fs.writeFile('./Content/result-async.txt',`The result is : ${first} , ${second}`, (err,result) => {
            if(err){
                return;
            }
            console.log('Done with the task');
        });
    }); 


});

console.log('starting next task')


