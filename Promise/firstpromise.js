function calculatePayment(principal, years, rate){
      const promise = new Promise(function(resolve,reject){
          setTimeout(function(){
              if(typeof principal!='number'){
                  return reject(new Error('Principal of type expected is number'));
              }
              const paymentAmount = principal+ (principal*years*rate)/100;
              return resolve(paymentAmount);
          },1000);
      });
      return promise;
}

const myPromise = calculatePayment('test',2,25);
myPromise.then(function(result){
   console.log(result);
}, function(reason){
    console.log(reason.message);
});

