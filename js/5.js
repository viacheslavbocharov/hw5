/*5 Дано двузначное число. Определить, какая из его цифр больше: первая или вторая?*/

let number = parseInt(prompt("Enter two-digit number"))
let numberFirstDigit = parseInt(number / 10);
let numberSecondDigit = number % 10;
console.log(`First ${numberFirstDigit}, Second ${numberSecondDigit}`);
alert(numberFirstDigit > numberSecondDigit ? "First digit is bigger" : "Second digit is bigger");
