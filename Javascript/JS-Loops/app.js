/*------------------------------------------------------
---------Iteración #1: Usa includes--------------------
------------------------------------------------------*/

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
const shirts =[];


for (let index = 0; index < products.length; index++) {
  
      const product = products[index];
      if (product.includes("Camiseta")){
      shirts.push(product);
   }
}

console.log("Estas son las camisetas:", shirts);

/*------------------------------------------------------
--------**Iteración #2: Condicionales avanzados**-------
-------------------------------------------------------*/

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

            //SIN HACER

/*-----------------------------------------------------
--------**Iteración #3: Probando For...of**------------
------------------------------------------------------*/

// const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

// for (const from of placesToTravel) {
//     console.log(from);
// }


/*-----------------------------------------------------
---------**Iteración #4: Probando For...in**-----------
------------------------------------------------------*/


// const alien = {
//     name: 'Wormuck',
//     race: 'Cucusumusu',
//     planet: 'Eden',
//     weight: '259kg'
// }

// for (const property in alien) {
//     console.log(`${property}: ${alien[property]}`);
    
// }

/*------------------------------------------------------
------------**Iteración #5: Probando For**--------------
-------------------------------------------------------*/

const placesToTravel5 = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

for (var i = 0; i < 6; i++) {
    
    
}
            //SIN HACER
           
/*------------------------------------------------------
------**Iteración #6: Mixed For...of e includes**-------
-------------------------------------------------------*/


const toys = [
{id: 5, name: 'Buzz MyYear'}, 
{id: 11, name: 'Action Woman'}, 
{id: 23, name: 'Barbie Man'}, 
{id: 40, name: 'El gato con Guantes'},
{id: 40, name: 'El gato felix'}
]

               //SIN HACER

/*------------------------------------------------------
-------**Iteración #7: For...of avanzado**--------------
------------------------------------------------------*/


const popularToys = [];
const toys2 = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]


        //SIN HACER