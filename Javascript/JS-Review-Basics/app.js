/*----------------------------------------------
-------Iteración #1: Mix for e includes---------
-----------------------------------------------*/

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
const  comedia = [];
const  aventura = [];
const  acción = [];
const  thriller = [];


for (const categorie in movies) {
    if (categorie.includes("comedia")) {
      comedia.push(categorie)
      console.log(comedia)
    } else if (categorie.includes("aventura")) {
      aventura.push(categorie)
      console.log(aventura)
    } else if (categorie.includes("acción")) {
      acción.push(categorie)
      console.log(acción)
    } else if (categorie.includes("thriller")) {
        thriller.push(categorie)
        console.log(thriller)
  }
}

/*-----------------------------------------------
--------Iteración #2: Mix Fors-------------------
------------------------------------------------*/


const users = [
  {name: 'Manolo el del bombo',
      favoritesSounds: {
          waves: {format: 'mp3', volume: 50},
          rain: {format: 'ogg', volume: 60},
          firecamp: {format: 'mp3', volume: 80},
      }
  },
  {name: 'Mortadelo',
      favoritesSounds: {
          waves: {format: 'mp3', volume: 30},
          shower: {format: 'ogg', volume: 55},
          train: {format: 'mp3', volume: 60},
      }
  },
  {name: 'Super Lopez',
      favoritesSounds: {
          shower: {format: 'mp3', volume: 50},
          train: {format: 'ogg', volume: 60},
          firecamp: {format: 'mp3', volume: 80},
      }
  },
  {name: 'El culebra',
      favoritesSounds: {
          waves: {format: 'mp3', volume: 67},
          wind: {format: 'ogg', volume: 35},
          firecamp: {format: 'mp3', volume: 60},
      }
  },
]

for (const user of users) {
  for (const key in user) {
    console.log(user[key]);
  }
}


/*----------------------------------------------
------Iteración #3: Mix Fors--------------------
-----------------------------------------------*/

const users = [
  {name: 'Manolo el del bombo',
      favoritesSounds: {
          waves: {format: 'mp3', volume: 50},
          rain: {format: 'ogg', volume: 60},
          firecamp: {format: 'mp3', volume: 80},
      }
  },
  {name: 'Mortadelo',
      favoritesSounds: {
          waves: {format: 'mp3', volume: 30},
          shower: {format: 'ogg', volume: 55},
          train: {format: 'mp3', volume: 60},
      }
  },
  {name: 'Super Lopez',
      favoritesSounds: {
          shower: {format: 'mp3', volume: 50},
          train: {format: 'ogg', volume: 60},
          firecamp: {format: 'mp3', volume: 80},
      }
  },
  {name: 'El culebra',
      favoritesSounds: {
          waves: {format: 'mp3', volume: 67},
          wind: {format: 'ogg', volume: 35},
          firecamp: {format: 'mp3', volume: 60},
      }
  },
]


/*-----------------------------------------------
---------Iteración #4: Métodos findArrayIndex----
------------------------------------------------*/

function findArrayIndex(array, text) {}

['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']


/*-----------------------------------------------
--------Iteración #5: Función rollDice-----------
------------------------------------------------*/



/*-----------------------------------------------
------Iteración #6: Función swap-----------------
------------------------------------------------*/

['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']