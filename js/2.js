/*2 Известны два расстояния. Одно в километрах, другое - в футах (1 фут = 0,305м). Какое расстояние меньше?*/

let lengthKm = (parseFloat(prompt("Enter length in km"))) * 1000;
let lengthFt = (parseFloat(prompt("Enter length in ft"))) * 0.305;

if (lengthKm === lengthFt) {
    alert('Length in km is equal to length in ft');
} else {
    alert(lengthKm < lengthFt ? 'Lengtgh in km is smaller' : 'Length in ft is smaller');
};
