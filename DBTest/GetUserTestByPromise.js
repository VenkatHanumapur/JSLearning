const mymodule=require('./getUsersWithPromise.js');


const promise=mymodule.getUsersByPromise();
promise.then(function(users){
    users.forEach(user => {
        console.log(`${user.user_id}, ${user.firstname}`);
    });

},function(error){
    console.log(error);
});


mymodule.getUsersByCallBack(function(test){
     return  console.log(test);
     });

