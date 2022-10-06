/*-------------------------------------------
-----------**Iteración #1: Variables**-------
-------------------------------------------*/

let myFavoriteHero = "Hulk";
let x = 50;
let h = '5', y = '10';

/*-------------------------------------------
----**Iteración #2: Variables avanzadas**----
-------------------------------------------*/

const character = {name: 'Jack Sparrow', age: 10};

Object.defineProperty(character, 'property2', {
    value: 25,
});
  
character.property2 = 25;
  
console.log(character.property2);

let firstName = "Jon";
let lastName = "Snow";
let age = "24";

let result = "Soy " + firstName + " " + lastName + " Tengo " + age + " años " + "y me gustan los lobos";
console.log(result);


const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

const totalPrice = (toy1.price + toy2.price);

console.log(totalPrice);



let globalBasePrice = 10000;

const car1 = {name: "BMW m&m", basePrice: 50000, finalPrice: 60000};
const car2 = {name: "Chevrolet Corbina", basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;

const newValue1 = (car1.basePrice + globalBasePrice);
const newValue2 = (car2.basePrice + globalBasePrice);

console.log(globalBasePrice);
console.log(newValue1);
console.log(newValue2);


/*------------------------------------------------
---------**Iteración #3: Operadores**-------------
-------------------------------------------------*/

let a = 10;
let b = 5;

const resultadoMultiplicacion = a * b;

console.log(resultadoMultiplicacion);

let c = 10;
let d =2;

const resultadoDivision = c / d;

console.log(resultadoDivision);

let p = 10;
let j = 5;

let o =15;

const resultadoSuma = p + j;

console.log(resultadoSuma);

let m = 10;
let n = 5;

let i = 50;

const resultadoMultiplicacion2 = m * n;

console.log(resultadoMultiplicacion2);


/*------------------------------------------
---------**Iteración #4: Arrays**-----------
------------------------------------------*/

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers.at(0));

//---------------------------------------

const avengers1 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

avengers[0] = "IRONMAN";

console.log(avengers);

//----------------------------------------

const avengers2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers2.length);

//----------------------------------------

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push("Morty", "summer");

console.log(rickAndMortyCharacters);
console.log(rickAndMortyCharacters.at(4));

//----------------------------------------

const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters1.pop()

console.log(rickAndMortyCharacters1);
console.log(rickAndMortyCharacters[0]);
console.log(rickAndMortyCharacters[4]);

//----------------------------------------

const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters2.splice(1, 1);

console.log(rickAndMortyCharacters2);

/*-----------------------------------------------------
---------**Iteración #5: Condicionales**---------------
-----------------------------------------------------*/

const number1 = 10;
const number2 = 20;
const number3 = 2;

if (number2 /= number1) {
    console.log("number2 dividido entre number1 es igual a 2");
}

//-------------------------------------------------


if (number1 !== number2) {
    console.log("number1 es estrictamente distinto a number2");
}
  

//-------------------------------------------------


if (number3 != number1) {
    console.log("number3 es distinto number1");
}


//--------------------------------------------------


if (number3 *5 == number1) {
    console.log("number3 por 5 es igual a number1");
}


//---------------------------------------------------


if (number3 *5 == number1 && number1 *2 == number2) {
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}


//----------------------------------------------------


if (number2 /2 == number1 || number1 /5 == number3) {
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}


/*-----------------------------------------------------
-------------**Iteración #6: Bucles**------------------
------------------------------------------------------*/


