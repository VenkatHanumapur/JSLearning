function calculateSqure(number,callback){
   setTimeout(function(){
       if(typeof number !='number'){
           throw new Error('Argument typecode expected to be number');
       }
       const result=number*number;
       callback(result);
   },1000);
}
try {
     for (let index = 1; index < 7; index++) {
        calculateSqure(index,function(result){
            console.log(result);
        });
         
     }
    
} catch (error) {
    console.log('Caught execption : '+ String(error));
}

