
function isPrime(number) {
    if (number <2) {
        return false;
    }
    for (let i=2; i<=Math.sqrt(number); i++) {
        if (number%i==0) {
            return false;
        }
    }
    return true;
}

function printPrime(limit) {
    let arr = [];
    for (let i=2; i<limit; i++) {
        if (isPrime(i)) {
            arr.push(i);
        }
    }
    return arr;
}
let limit = 10000;
let arr = printPrime(limit);
console.log(arr);
