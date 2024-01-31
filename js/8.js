// 8 Определить, является ли заданное шестизначное число зеркальным? (123321, 147741)
let numberA = parseInt(prompt("Enter first six-digit number"));
let numberB = parseInt(prompt("Enter second six-digit number"));

let numberA6 = numberA % 10;
console.log("A6 -  " + numberA6);
let numberA5 = parseInt((numberA % 100)/10);
console.log("A5 -  " + numberA5);
let numberA4 = parseInt((numberA % 1000)/100);
console.log("A4 -  " + numberA4);
let numberA3 = parseInt((numberA % 10000)/1000);
console.log("A3 -  " + numberA3);
let numberA2 = parseInt((numberA % 100000)/10000);
console.log("A2 -  " + numberA2);
let numberA1 = parseInt(numberA / 100000);
console.log("A2 -  " + numberA1);

let numberB6 = numberB % 10;
console.log("B6 -  " + numberB6);
let numberB5 = parseInt((numberB % 100)/10);
console.log("B5 -  " + numberB5);
let numberB4 = parseInt((numberB % 1000)/100);
console.log("B4 -  " + numberB4);
let numberB3 = parseInt((numberB % 10000)/1000);
console.log("B3 -  " + numberB3);
let numberB2 = parseInt((numberB % 100000)/10000);
console.log("B2 -  " + numberB2);
let numberB1 = parseInt(numberB / 100000);
console.log("B1 -  " + numberB1);

let isAandBmirror = (numberA1 === numberB6 && numberA2 === numberB5 && numberA3 === numberB4 && numberA4 === numberB3 && numberA5 === numberB2 && numberA6 === numberB1) ? 'Number A and Number B are mirrored.' : 'Number A and Number B are not mirrored.'; 
alert(isAandBmirror);