/*1 Даны два различных числа. Определить какое из них больше, а какое меньше.*/


let number1 = parseFloat(prompt("Enter first number"));
let number2 = parseFloat(prompt("Enter second number"));

if (number1 > number2) {
    alert("Number1 is bigger than Number2");
} else if (number1 === number2) {
    alert("Number1 is equal to Number2");
} else if(number2 > number1) {
    alert("Number1 is less than Number2");
}

