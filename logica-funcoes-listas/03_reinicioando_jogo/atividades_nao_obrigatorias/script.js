// 1 - Crie uma função que calcule o índice de massa corporal (IMC) 
// de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calcularIMC(peso, altura) {
  let imc = peso  / (altura * altura) ;
  return imc;
}

// console.log(calcularIMC(80, 1.80).toFixed(1));

// 2 - Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

// function fatorial(numero) {
//   if (numero < 0) {
//       return "O fatorial não é definido para números negativos";
//   } else if (numero === 0 || numero === 1) {
//       return 1;
//   } else {
//       let resultado = 1;
//       let i = 2;
//       while(i <= numero){
//         resultado *= i;
//         i++;
//       }
//       return resultado;
//   }
// }

// let num = 8;
// console.log(`Fatorial de ${num} é ${fatorial(num)}`);

// 3 - Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor
//  equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

  // function converterMoeda(dolar) {
  //    return dolar = dolar / 4.80;
  // }

  // console.log(converterMoeda(5).toFixed(2));

// 4 - Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura
//  e largura que serão dadas como parâmetro.

// function calcularAreaPerimetro(altura, largura) {
//   let area = altura * largura;
//   let perimetro = 2 * (altura + largura);

//   console.log(`Área da sala: ${area} metros quadrados`);
//   console.log(`Perímetro da sala: ${perimetro} metros`);
// }

// calcularAreaPerimetro(10, 5);

// 5 - Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio 
// que será fornecido como parâmetro. Considere Pi = 3,14.

// function calcularAreaPerimetroCircular(raio) {
//   const pi = 3.14;
//   let area = pi * raio * raio;
//   let perimetro = 2 * pi * raio;

//   console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
//   console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
// }

// calcularAreaPerimetroCircular(5);


// 6 - Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

  // function calcularTaboada(numero) {
  //   let i = 1;

  //   while (i <= 10) {
  //     resultado = numero * i;
  //     console.log(`${numero} X ${i} = ${resultado},`);
  //     i++;
  //   }
  // }

  // calcularTaboada(10);