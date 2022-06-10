
const mysql=require('mysql');
const connection=mysql.createConnection({
    host : 'database-1.c1khesr28cl9.us-east-1.rds.amazonaws.com',
    port : '3306',
    user : 'admin',
    password : 'Welcome!23',
    database : 'ecommerce_website'

});


connection.connect();

function getUsersByPromise(){
    const promise = new Promise(function(resolve,reject){
      
        connection.query('select * from users',function(error,results,fields){
            if(error!=null){
                reject(error);
            }
            resolve(results);
        });
    }); 
    connection.end();  
   
    return promise;
}

function getUsersByCallBack(callback){
   
        callback('Test');
    }
   

    module.exports={getUsersByPromise,getUsersByCallBack};
