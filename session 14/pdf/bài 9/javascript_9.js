let n = parseInt(prompt("nhập vào 1 số"));
console.log('Số vừa nhập là : ', n);
function isPrime(number) {
        if (number<2) {
            return false;
        }
        for (i=2; i<=Math.sqrt(n); i++) {
            if (number%i==0) {
                return false;
            }
        }
        return true;
    }  
function printPrime(n) {
    let count = 0;
    let number=2;
    while (count < n) {
        if (isPrime(number)) {
            console.log(number);
            count++;
        }
        number++;
        return `${number}`;
    }
}
let result = printPrime(n);
console.log('Số nguyên tố tăng dần là : ',result);

