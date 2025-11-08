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

  function flattenObj(o, prefix = "") {
    let res = {};
    for (let key in o) {
      if (o.hasOwnProperty(key)) {
        let valor = o[key];
        let novoKey = prefix ? prefix + "." + key : key;
        if (typeof valor === "object" && valor !== null && !Array.isArray(valor)) {
          Object.assign(res, flattenObj(valor, novoKey));
        } else {
          res[novoKey] = valor;
        }
      }
    }
    return res;
  }

  console.log(flattenObj(obj));
  readline.close();
});