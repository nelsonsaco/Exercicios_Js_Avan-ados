const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Digite um array com números e colchetes: ", (entrada) => {
  let arr;
  try {
    arr = eval(entrada);
  } catch {
    console.log("Entrada inválida!");
    readline.close();
    return;
  }

  function flatten(array) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        resultado = resultado.concat(flatten(array[i]));
      } else {
        resultado.push(array[i]);
      }
    }
    return resultado;
  }

  console.log(flatten(arr));
  readline.close();
});