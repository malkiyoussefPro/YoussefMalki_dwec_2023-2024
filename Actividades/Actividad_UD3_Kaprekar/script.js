function kaprekar(numero) {
  let resultado = numero;

  if (numero == 6174) {
      return numero;
  } else if (numero.length != 4) {
      return null;
  }

  while (resultado != 6174) {
      let numeroMayor = "";
      let numeroMenor = "";

      for (let i = numero.length - 1; i >= 0; i--) {
          if (i == 0) {
              numeroMayor += numero[i];
          } else if (numero[i] > numero[i - 1]) {
              numeroMayor += numero[i];
          } else {
              numeroMenor += numero[i];
          }
      }

      resultado = parseInt(numeroMayor, 10) - parseInt(numeroMenor, 10);
  }

  return resultado;
}

let numero = 7895;

console.log(kaprekar(numero));

