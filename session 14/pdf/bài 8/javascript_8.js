// Viết function trả ra trung bình cộng của một mảng số

let arr =[];
let arrlength = +prompt("Nhập vào độ dài mảng");
for (let i=0; i<arrlength; i++) {
    let number = parseInt(prompt("Nhập giá trị vào mảng "));
    arr.push(number);
}
console.log(arr);
function calculateAverage(arr) {
   let sum = 0; 
   for (i=0; i<arr.length; i++) {
        sum +=arr[i];
   }
   let average= sum/arr.length;
   return average;
}
let result = calculateAverage(arr);
console.log('Trung bình cộng của mảng đã nhập là : ', result);