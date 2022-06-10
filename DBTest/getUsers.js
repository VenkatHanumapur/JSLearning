
const mysql=require('mysql');
const connection=mysql.createConnection({
    host : 'database-1.c1khesr28cl9.us-east-1.rds.amazonaws.com',
    post : '3306',
    user : 'admin',
    password : 'Welcome!23',
    database : 'ecommerce_website'
});

function getUsers(callback){
    connection.connect();
   connection.query('select * from users',function(error,results,fields){
       if(error!=null){
           callback(error);
       }
       callback(null,results);
   });
   connection.end();

}

function getUsersByCallBack(callback){
   
    callback('Test');
}

module.exports={getUsers,getUsersByCallBack};