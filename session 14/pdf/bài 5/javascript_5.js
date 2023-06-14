// Viết function chuẩn hóa một từ - chỉ viết hoa chữ cái đầu tiên. 
// Ví dụ:“rIkKEi” sau khi chuẩn hóa thành “Rikkei”
let word = prompt('Nhập vào 1 từ');
console.log('Từ đã nhập là : ' ,word);
function titleCase(word) {
    let firstWord= word.charAt(0).toUpperCase();
    let remainWord = word.slice(1).toLowerCase();
    return firstWord + remainWord;
}
let result = titleCase(word);
console.log('Từ đã nhập sau khi được chuẩn hoá là : ', result);