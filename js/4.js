/*4 Дано число. Определить, заканчивается оно четной цифрой или нечетной? Вывести последнюю цифру.*/
let number = parseFloat(prompt("Enter Number1"));
let numberLastDigit;

if (number > -1 && number < 1){
    numberLastDigit = (number*10) % 10;
} else{
    numberLastDigit = number % 10;
}
console.log(numberLastDigit)
alert(numberLastDigit % 2 === 0 ? `The last digit of your number is ${numberLastDigit}. It is even` : `The last digit of your number is ${numberLastDigit}. It is odd`)





