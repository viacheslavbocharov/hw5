/*4 Дано число. Определить, заканчивается оно четной цифрой или нечетной? Вывести последнюю цифру.*/
let number = parseInt(prompt("Enter integer Number"));
let numberLastDigit = number % 10;
console.log(number)

alert(numberLastDigit % 2 === 0 ? `The last digit of your number is ${numberLastDigit}. It is even` : `The last digit of your number is ${numberLastDigit}. It is odd`)





