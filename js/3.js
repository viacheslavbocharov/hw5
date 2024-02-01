/*3 Определить, является ли число a делителем числа b ? И наоборот. (Дать два ответа)*/

let a = parseFloat(prompt("Enter number a"));
let b = parseFloat(prompt("Enter number b"));
let dividedAonB = a % b;
let dividedBonA = b % a;


if (dividedAonB === 0 && dividedBonA === 0) {
    alert("Number A is divided on B and Number B is divider on Number A");
}else if (dividedAonB !== 0 && dividedBonA !== 0) {
    alert("Number A is not divided on B and Number B is not divider on Number A");
} else if (dividedAonB === 0 && dividedBonA !== 0){
    alert("Number A is divided on B and Number B is not divider on Number A");
} else if (dividedAonB !== 0 && dividedBonA === 0){
    alert("Number A is not divided on B and Number B is divider on Number A");
}