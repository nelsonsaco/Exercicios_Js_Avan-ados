const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function filaPromises(funcoes) {
  return funcoes.reduce((prev, curr) => {
    return prev.then(() => curr().then(res => console.log(res)));
  }, Promise.resolve());
}

// Exemplo já definido
const f1 = () => new Promise(r => setTimeout(() => r("Primeira"), 1000));
const f2 = () => new Promise(r => setTimeout(() => r("Segunda"), 500));
const f3 = () => new Promise(r => setTimeout(() => r("Terceira"), 700));

filaPromises([f1, f2, f3]).then(() => {
  console.log("Todas executadas");
  readline.close();
});