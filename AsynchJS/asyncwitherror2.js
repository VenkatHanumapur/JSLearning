// Example of error-first callbacks
function calculateSquare(principal,year,rate, callback) {
    setTimeout(function() {
        if (typeof principal !== 'number') {
            callback(new Error('Principal should be a number'));
            return;
        }
        const result = principal*year*rate/100;
        callback(null, result);
    }, 1000);
}

calculateSquare('bad argument',6,20, function (error, result) {
    if (error !== null) {
        console.log('Caught error: ' + String(error));
        return;
    }
    console.log(result);
});
