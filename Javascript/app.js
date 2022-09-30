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



let globalBasePrice = "10000";

const car1 = {name: "BMW m&m", basePrice: 50000, finalPrice: 60000};
const car2 = {name: "Chevrolet Corbina", basePrice: 70000, finalPrice: 80000};

globalBasePrice = "25000";

car1.basePrice + globalBasePrice;
car2.basePrice + globalBasePrice;

console.log(globalBasePrice);


