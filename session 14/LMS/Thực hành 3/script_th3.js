

function minArray(arr1) {
    let min=arr1[0];
    for (let i=0; i<arr1.length; i++) {
        if (arr1[i]<min){
            min=arr1[i];
        }
    }
    return min;
}
let arr1=[3,5,1,8,-3,7,8];
console.log(arr1);
let result =minArray(arr1);
console.log(`Số nhỏ nhất của mảng ${arr1} là`, result);


function minArray(arr2) {
    let min=arr2[0];
    for (let i=0; i<arr2.length; i++) {
        if (arr2[i]<min) {
            min=arr2[i];
        }
    }
    return min;

}
let arr2=[7,12,6,9,20,56,89]
console.log(arr2);
let result2 =minArray(arr2);
console.log(`Số nhỏ nhất của mảng ${arr2} là`, result2);

function minArray(arr3) {
    if (arr3.length==0)
    return -1;
    let min = arr3[0];
    for (let i=1; i<arr3.length; i++) {
        if (arr3[1]<min) {
            min =arr3[i];
        }
    }
    return min;
}
let arr3=[];
console.log(arr3);
let result3 = minArray(arr3);
console.log(`Số nhỏ nhất của mảng ${arr3} là`, result3);

