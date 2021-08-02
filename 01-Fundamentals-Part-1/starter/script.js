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
*/

/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


/////////////////////////////////
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
    Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
    Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

/*const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2);

console.log('Marks BMI is ' + markBMI);
console.log('Johns BMI is ' + johnBMI);

const markHigherBMI = (markBMI > johnBMI);
console.log(markHigherBMI);*/
// End of Coding Challenge #1

////////////////////////////////
/*const firstName = 'Jonas';
const job = 'teacher';
const birthYear = '1991';
const year = 2037;


const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);*/

/*Template Literal/String
Utilizamos estos simbolos `` para hacer un string sin comillas y
  utilizamos ${variable} para poner variables dentro del string
  es nuevo de ES6
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);*/

/*Esto es un string multilinea que se puede utilizar con los simbolos ``
  Podemos escribir strings dentro de los ``
console.log('String con \n\
multiples\n\
lineas');
console.log(`String con
multiples
lineas`);
*/
/* Condicionales */
/*const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗.');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sara is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1997;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

//////////////////////////////////////
// Coding Challenge #2

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI ${johnBMI}.`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI ${markBMI}.`);
}