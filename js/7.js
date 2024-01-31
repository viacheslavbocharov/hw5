// 7Дано трехзначное число. 
// a Верно ли, что все его цифры одинаковые? 
// b Есть ли среди его цифр одинаковые?

let number = parseInt(prompt("Enter three-digit number"));
let numberLastDigit = number % 10;
console.log("Last " + numberLastDigit);
let numberMidleDigit = parseInt((number % 100)/10);
console.log("Midle " + numberMidleDigit);
let numberFirstDigit = parseInt(number / 100);
console.log("First " + numberFirstDigit);

let isAllDigitsAreTheSame = (numberFirstDigit === numberMidleDigit && numberFirstDigit === numberLastDigit && numberMidleDigit === numberLastDigit) ? 'All digits are the same' : 'All digits are not the same';
let isSomeDigitsAreTheSame = (numberFirstDigit === numberMidleDigit || numberFirstDigit === numberLastDigit || numberMidleDigit === numberLastDigit) ? 'Some digits are the same' : 'There are no same digits';
alert(`${isAllDigitsAreTheSame}. ${isSomeDigitsAreTheSame}.`)