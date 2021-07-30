/* let js = 'Amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let javascriptIsFun = true;
console.log(javascriptIsFun);
// Esto typeof es como un comando/parametro que te dice que tipo
// de datos tiene esa variable en el console log
// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Victor');

// Para cambiarle el valor a una variable no debemos escribir let nuevamente
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); // esto es un bug en JS


let age = 30;
age = 31;

// Const se utiliza para variables constantes que no se pueden cambiar
const birthYear = 1991;

// Las variables constantes no se pueden declarar vacias
// const job;

// Para mejor practicas se debe utilizar const siempre a menos que estemos
// seguros que el valor de la variable debe cambiar

// Var es otra forma de declarar variables que ya no se utiliza
var job = "programmer";
job = 'teacher';
*/
//Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 significa 2 a la 3 o 2 * 2 * 2 (2^3)

const firstName = 'Jonas';
const lastName = 'Brothers';
console.log(firstName + ' ' + lastName); //concatenar

//Assignment Operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100;
x++; // x = x + 1 
x--; // x = x - 1  
console.log(x);

//Comparison Operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);