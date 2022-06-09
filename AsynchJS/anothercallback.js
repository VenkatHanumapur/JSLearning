

function f(number,callback){
    this.number=number;
    
    setTimeout(function(){ callback()},60);
}

f(20,() => { console.log('Inside callback '+number)});

console.log('Hellp world');