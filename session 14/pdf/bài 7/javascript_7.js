// Viết function kiểm tra số chẵn-lẻ


let number = +prompt("Nhập vào 1 số")
function evenOdd(number) {
        if (number % 2 === 0) {
            return`${number} là số chẵn`;
        } else {
            return`${number} là số lẻ`;
        }
    }      
let result = evenOdd(number);
console.log(result);

// // Viết function kiểm tra số nguyên tố

function primeNumber(number) {
    if (number <2 ) {
        return `${number} không là số nguyên tố`;
    }
    for (let i=2; i<Math.sqrt(number); i++) {
        if (number%i==0) {
            return `${number} không là số nguyên tố`;
        }
    }
    return `${number} là số nguyên tố`
}
let result2 = primeNumber(number);
console.log(result2);

// // Viết function kiểm tra số hoàn hảo

function perfectNumber(number) {
    let sum =0;
    for (let i=0; i<number; i++) {
        if (number%i==0) {
            sum+=i;
        }
    }
    if (sum == number) {
        return `${number} là số hoàn hảo` ;
    } else {
        return `${number} không là số hoàn hảo` ;
    }  
}
let result3= perfectNumber(number);
console.log(result3);