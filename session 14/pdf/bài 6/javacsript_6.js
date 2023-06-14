// Viết function trả ra giá trị lớn nhất trong một mảng số
let arr = [];
let arrlength = parseInt(prompt('Nhập độ dài của mảng'))
for (let i=0; i<arrlength; i++){
    let number = parseInt(prompt("Nhập số vào mảng"));
    arr.push(number);
}
console.log(arr);
 function checkMax(arr) {
    let max = arr[0];
    for (i=0; i<arr.length; i++) {
        if (arr[i] > max) {
        max = arr[i];
        }
    }
    return max;
}
console.log('giá trị lớn nhất trong mảng số là : ', checkMax(arr));