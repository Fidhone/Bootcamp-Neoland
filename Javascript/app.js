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

const totalPrice = (toy1(19) && toy2(29));
console.log(totalPrice);
