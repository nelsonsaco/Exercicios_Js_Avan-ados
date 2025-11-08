const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Digite um objeto em formato JS: ", (entrada) => {
  let obj;
  try {
    obj = eval("(" + entrada + ")");
  } catch {
    console.log("Entrada inválida!");
    readline.close();
    return;
  }

  function deepClone(item) {
    if (item === null || typeof item !== 'object') return item;
    if (Array.isArray(item)) return item.map(deepClone);
    const copia = {};
    for (let key in item) {
      if (item.hasOwnProperty(key)) {
        copia[key] = deepClone(item[key]);
      }
    }
    return copia;
  }

  const clone = deepClone(obj);
  console.log("Objeto original:", obj);
  console.log("Cópia independente:", clone);
  readline.close();
});