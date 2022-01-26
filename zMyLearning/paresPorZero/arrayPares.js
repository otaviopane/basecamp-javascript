// Minha solução

function trocaParesPorZero(array) {
  let arrayNovo = [];
  if (!array) return -1;
  if (!array.length) return -1;
  array.forEach((number) => {
    if (number !== 0 && number % 2 === 0) {
      n = 0;
    } else {
      n = Number(number);
    }
    arrayNovo.push(n);
  });
  return arrayNovo;
}

console.log(trocaParesPorZero([1, 3, 0, 4, 6, 80, 33, 23, 90]));

// solução 1

function substituiPares(array) {
  if (!array) return -1;
  if (!array.length) return -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      console.log("Você já é zero!!");
    } else if (array[i] % 2 === 0) {
      console.log(`Substituindo ${array[i]} por 0...`);
      array[i] = 0;
    }
  }
  return array;
}

let arr = [1, 3, 0, 4, 6, 80, 33, 23, 90];
console.log(substituiPares(arr));
