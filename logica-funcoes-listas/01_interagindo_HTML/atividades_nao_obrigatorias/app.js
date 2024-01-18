// Faça o download de outro projeto clicando neste link e abra no Visual Studio Code.

//2- Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

let newTitle = document.getElementsByTagName('h1')[0];
newTitle.innerHTML = 'Hora do Desafio';

// 3- Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function verificarChute() {
  console.log('Clicou no botão chutar');
}

//4- Crie uma função que exiba um alerta com a mensagem: Eu amo JS, 
// sempre que o botão Alerta for pressionado.

function euAmoJs() {
  alert('Eu Amo JS!')
}

// 5- Crie uma função que é executada quando o botão prompt é clicado, 
// perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta
//  com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você. 

function promptCidade() {
  let cidade = prompt('Informe o nome de uma cidade: ');
  alert(`Estivem em ${cidade} e lembrei de você!`);
}

// 6- Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta

function somar() {
  let numero1 = parseInt(prompt('Informe o valor do primeiro númer: '));
  let numero2 = parseInt(prompt('Informe o valor do segundo númer: '));
  let soma = numero1 + numero2;

  alert(`O resultado da soma entre ${numero1} e ${numero2} é ${soma}`);
}