const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let index = 0; index < numbers.length; index++) {
  const loop = numbers[index];
  console.log(loop);
}

//----------------------------------------------------------

const numbers2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let index = 0; index < numbers2.length; index++) {
  if (index % 2 == 0) {
    console.log(index);
  }
}

//-----------------------------------------------------------

for (let i = 0; i < numbers.length; i++) {
  if (i <= 8) {
    console.log("Intentando dormir🐑");
  } else {
    console.log("Dormido!");
  }
}
