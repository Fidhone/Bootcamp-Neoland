/*-----------------------------------------------------
-------------**Iteración #1: Buscar el máximo**--------
------------------------------------------------------*/

function sum(numberOne , numberTwo) {

    //insert code //NO RESUELTO

  }

/*-----------------------------------------------------
------**Iteración #2: Buscar la palabra más larga**----
------------------------------------------------------*/

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  

  //insert code //NO RESUELTO

}

/*-----------------------------------------------------
------**Iteración #3: Calcular la suma**---------------
-----------------------------------------------------*/


const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  
  //insert code //NO RESUELTO

}

/*------------------------------------------------------
--------**Iteración #4: Calcular el promedio**----------
------------------------------------------------------*/

function average(param) {
  let i = 0, summ = 0, ArrayLen = param.length;
  while (i < ArrayLen) {
      summ = summ + param[i++];
  }
  return summ / ArrayLen;  
  }
  let param = [12, 21, 38, 5, 45, 37, 6];
  let a = average(param);
 console.log(a)


/*-----------------------------------------------------
-----**Iteración #5: Calcular promedio de strings**----
-----------------------------------------------------*/

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {

  // insert code //NO RESUELTO

}

/*-----------------------------------------------------
------**Iteración #6: Valores únicos**-----------------
------------------------------------------------------*/

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(param) {

  const numerosUnicos = [...new Set(duplicates)]; 

let duplicados = [...duplicates]; 
numerosUnicos.forEach((duplicate) => {
  const indice = duplicados.indexOf(duplicate);
  duplicados = duplicados.slice(0, indice)
  .concat(duplicados.slice(indice + 1, duplicados.length));
});

console.log(duplicados); 

let result = duplicates.filter((item,index)=>{
  return duplicates.indexOf(item)
 === index
})
 
console.log(result)
}

removeDuplicates(param)

/*------------------------------------------------------
----------**Iteración #7: Buscador de nombres**---------
-------------------------------------------------------*/

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(param) {
  // insert code//NO RESUELTO
}

/*-----------------------------------------------------
----**Iteration #8: Contador de repeticiones**---------
------------------------------------------------------*/

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(param) {
  // insert code//NO RESUELTO
}