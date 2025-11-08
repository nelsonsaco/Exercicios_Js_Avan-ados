const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeros = [];

readline.question("Digite 10 números separados por espaço: ", (entrada) => {
  numeros = entrada.split(" ").map(Number);

  let contagem = {};
  numeros.forEach(n => contagem[n] = (contagem[n] || 0) + 1);

  let resultado = [];
  for (let num in contagem) {
    resultado.push({ numero: Number(num), vezes: contagem[num] });
  }

  resultado.sort((a, b) => b.vezes - a.vezes);

  console.log(resultado.slice(0, 3));
  readline.close();
});