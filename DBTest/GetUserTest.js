const mymodule=require('./getUsers.js');

mymodule.getUsers(function(error,users){   
    if(error!=null){      
        return console.log(error.message);
    }
    users.forEach(user => {
        console.log(`${user.user_id},${user.firstname},${user.lastname}`);        
    });
});

mymodule.getUsersByCallBack(function(test){
    console.log('Test '+test);
});

