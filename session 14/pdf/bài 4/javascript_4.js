// Cho chuỗi dài hơn 15 kỹ tự, viết function cắt chuỗi, 
// lấy ra 10 ký tự đầu tiên
// và thêm vào dấu “…” ở cuối chuỗi

let str= prompt("Nhập 1 chuỗi dài hơn 15 ký tự");
if (str.length<15) {
    alert("Vui lòng nhập lại chuỗi dài hơn 15 ký tự");
} else {
    console.log('Chuỗi đã nhập là : ', str);
}function cutString(str) {
    return str.substring(0,10) + "...";
}
let result = cutString(str)
console.log(' Chuỗi sau khi cut 10 ký tự đầu tiên và thêm dấu ... vào cuối là: ',result);