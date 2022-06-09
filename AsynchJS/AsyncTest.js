function print1(){
    const number=1;
    console.log(number);
}

function print2(){
    const number=2;
    function getNumber(){
          return number;
    }
    const n1= getNumber();
    console.log(n1);
}

function print3(){
const fs=require('fs');
    fs.readFile('./number.txt','utf-8', function(error,number){
        console.log(number);
    });
}

function print4(){
    const number=4;
    console.log(number);
}

print1();
print2();
print3();
print4();