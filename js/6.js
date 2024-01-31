/*6 Дано трехзначное число. 
a Определить является ли четной сумма его цифр. 
b Определить, кратна ли сумма его цифр пяти. 
c Определить является ли произведение его цифр больше 100.*/

let number = parseInt(prompt("Enter three-digit number"));
let numberLastDigit = number % 10;
console.log("Last " + numberLastDigit);
let numberMidleDigit = parseInt((number % 100)/10);
console.log("Midle " + numberMidleDigit);
let numberFirstDigit = parseInt(number / 100);
console.log("First " + numberFirstDigit);

let digitsSumm = numberFirstDigit + numberMidleDigit + numberLastDigit
let digitsMultip = numberFirstDigit * numberMidleDigit * numberLastDigit;


let isDigitsSummEven = digitsSumm % 2 === 0 ? 'Digits summ is even' : 'Digits summ is odd';
console.log(isDigitsSummEven);
let isDugitsSummDividedOn5 = digitsSumm % 5 === 0 ? 'Digits summ is divided on 5 without rest' : 'Digits summ is not divided on 5 without rest';
console.log(isDugitsSummDividedOn5);
let isDigitsMultiplicatinMoreThan100 = digitsMultip > 100 ? 'Multiplyed digits is more than 100': 'Multiplyed digits is less than 100';
console.log(isDigitsMultiplicatinMoreThan100);

alert(`${isDigitsSummEven}. ${isDugitsSummDividedOn5}. ${isDigitsMultiplicatinMoreThan100}.`);