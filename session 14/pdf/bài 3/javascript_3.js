// Viết function tính thế kỷ của một năm nhập vào từ bàn phím. 
// Biết thế kỷ thứ nhất tính từ năm 1 đến 100
let year = parseInt(prompt('Nhập vào 1 năm')); 
function calculate(year) {
    console.log('Năm đã nhập là : ', year);
    return Math.ceil(year/100);

 }
let century = calculate(year);
 console.log('Thế kỷ : ' , century);
