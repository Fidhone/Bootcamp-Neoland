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

//------------------------------------------------

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colorFree2 = [...colors];

colorFree2.splice(2,1);

// hacerlo recorriendolo


console.log(colorFree2);

/*---------------------------------------------------
-------------------**Iteración #4: Map**-------------
----------------------------------------------------*/

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];


const idName = users.map((person) => person.name);


console.log(idName)



//--------------------------------------------------

const usersA = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];


const idNameA = usersA.map((person) => person.name);




//-----------------------------------------------------


   const cities = [
   	{isVisited:true, name: 'Tokyo'}, 
   	{isVisited:false, name: 'Madagascar'},
   	{isVisited:true, name: 'Amsterdam'}, 
   	{isVisited:false, name: 'Seul'}
   ];


   const idNameB = cities.map((person) => person.name);
   
   const idNameC = cities.map((visited) => visited.isVisited);

   if (idNameC === "true"){

	return ("Visitado")
 }
   
 


 /*-------------------------------------------------------------
 -------------------**Iteración #5: Filter**--------------------
 --------------------------------------------------------------*/


 const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

 const more18 = ages.filter(age => age > 18);

 console.log(more18);

 //------------------------------------------------------


 const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

 const pares = ages2.filter(age => age%2 === 0);

 console.log(pares);

 //--------------------------------------------------------

 const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const lol = streamers.filter ((game) => game.gameMorePlayed === "League of Legends");

console.log(lol)


//----------------------------------------------------------

const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
 
const streamers2Filter = streamers2.filter ((name) => name.name.includes("u"));

console.log(streamers2Filter)


//----------------------------------------------------------

const streamers3 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamersFilter3 = streamers3.filter ((game) =>{



if (game.gameMorePlayed.includes("Legends")){
	if (game.age > 35){
		game.gameMorePlayed = game.gameMorePlayed.toUpperCase()
	}

	return game
}
});

console.log(streamersFilter3);


//----------------------------------------------------

// HTML 5.6 y 5.7

//----------------------------------------------------

/*------------------------------------------------------------
--------------**Iteración #6: Find**--------------------------
-------------------------------------------------------------*/


const numbers = [32, 21, 63, 95, 100, 67, 43];

const find100 = numbers.find(element => element === 100);

console.log(find100);

//------------------------------------------------------------

const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];

const moviesMap = movies.map ((movie) => movie.date);

const find2010 = moviesMap.find((date) => date === 2010);

console.log(find2010);