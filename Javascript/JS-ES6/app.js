/*-----------------------------------------------------
-------------**Iteración #1: Arrows**------------------
-----------------------------------------------------*/

let a = 10;
let b = 5;


const summ = (a,b) => a + b;


console.log(summ(a,b));


summ();

/*------------------------------------------------
-----------**Iteración #2: Destructuring**-------
-------------------------------------------------*/

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}


let { title, year, gender } = game;

console.log(title);
console.log(year);
console.log(gender[0], gender[1], gender[2]);

//-----------------------------------------------


const fruits = ['Banana', 'Strawberry', 'Orange'];

const fruits1 = (fruits[0]);
const fruits2 = (fruits[1]);
const fruits3 = (fruits[2]);

console.log(fruits1, fruits2, fruits3);

//------------------------------------------------

// const animalFunction = () => {
//     return {name: 'Bengal Tiger', race: 'Tiger'}
// };


//---------------------------------------------
 
const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

let name = car.name;
let itv = car.itv;

console.log(name, itv);

let itv1 = (itv[0]);
let itv2 = (itv[1]);
let itv3 = (itv[2]);

console.log(itv1, itv2, itv3);

/*-----------------------------------------------
---------**Iteración #3: Spread Operator**-------
------------------------------------------------*/

const pointsList = [32, 54, 21, 64, 75, 43]

console.log(...pointsList);


//------------------------------------------------

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const copyToy = {...toy};

console.log(toy);

//------------------------------------------------

const pointsList2 = [32, 54, 21, 64, 75, 43];
const pointsList3 = [54,87,99,65,32];

const summPointslist = [...pointsList2, ...pointsList3];

console.log(summPointslist);

//-----------------------------------------------

const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const resultUpdateToy2 = {...toy2, ...toyUpdate};

console.log(resultUpdateToy2);


