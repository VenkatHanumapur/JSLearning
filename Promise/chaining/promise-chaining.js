
const askJohn= new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('This is John. I have a pen');
        },5000);
    });


const askKent = 
     new Promise((resolve,reject) => {
          setTimeout(() => {
            reject('This is Kent. I donot have a pen');
          },2000);
    });


const askSusy = 
    new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('This is Susy. I have a pen');
        },6000);
    });


Promise.race([askJohn,askKent,askSusy])
    .then((value) => {
        console.log(value);
    })
    .catch(reason => {
        console.log('gagaga    '+reason);
    });