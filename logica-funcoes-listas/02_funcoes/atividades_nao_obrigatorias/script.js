// 1 - Criar uma função que exibe "Olá, mundo!" no console

function olaMundo() {
  console.log('Olá Mundo!');
}

// 2 - Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function saudacao(nome) {
  console.log(`Olá ${nome}`);
}

saudacao('Sérgio');

// 3 - Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function calcular(valor) {
  return valor * 2;
}

console.log(calcular(3));

// 4 - Criar uma função que recebe três números como parâmetros e retorna a média deles.

function media(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

console.log(media(10, 10, 10));

// 5 - Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function miorValor(n1, n2) {
  if(n1 > n2) {
    return `O número ${n1} é maior que o número ${n2}`;
  } else {
    return `O número ${n2} é maior que o número ${n1}!`; 
  }
}

console.log(miorValor(12, 100));

// 6 - Criar uma função que recebe um número como parâmetro e retorna o resultado da 
// multiplicação desse número por ele mesmo

function multiplicacao(valor) {
  return valor * valor;
}

console.log(multiplicacao(2));