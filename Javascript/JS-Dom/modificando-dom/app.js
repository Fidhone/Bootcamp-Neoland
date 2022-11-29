/*const newDiv = document.createElement(`div`);
const addDiv = document.querySelector(`body`);
console.log(addDiv)
// NO HACE FALTA SI SE METE CON EL APPENDCHILD addDiv.innerHTML += ``;
addDiv.appendChild(newDiv);*/

//-------------------------------------------

/*const newDiv2 = document.createElement(`div`);
const addDiv = document.querySelector(`body`);
addDiv.appendChild(newDiv2);
newDiv2.innerHTML += `<P></P>`*/

//---------------------------------------------

/*2.3 SIN HACER*/

//---------------------------------------------

/*const newP = document.createElement(`p`);
const newText = document.createTextNode("Soy dinamico!");

newP.appendChild(newText);

const addPText = document.querySelector(`body`);
addPText.appendChild(newP);*/

//----------------------------------------------

/*const newText = document.createTextNode('Wubba Lubba dub dub');
const addText = document.querySelector(".fn-insert-here");

addText.appendChild(newText);*/

//-----------------------------------------------

/*const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ulTag = document.createElement(`ul`);

apps.forEach(e => { 
const liTag = document.createElement(`li`);
document.querySelector(`body`).appendChild(ulTag).appendChild(liTag);
liTag.innerHTML = e;
});*/

//------------------------------------------------

const remove = document.querySelectorAll(`.fn-remove-me`);
remove.removeChild(`body`);

