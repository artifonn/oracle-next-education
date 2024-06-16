const elementoParaInserirLivros = document.getElementById('livros');
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

function exibirLivrosNaTela(listaDeLivros) {
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = '';
  elementoParaInserirLivros.innerHTML = '';
  listaDeLivros.forEach(livro => {
    // let disponibilidade = verificarDisponibilidadeDoLivro;
    let disponibilidade = livro.quantidade > 0 ? 'livro__imagnes' : 'livro__imagnes indisponivel'; 
    elementoParaInserirLivros.innerHTML += `
      <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}"/>
      <h2 class="livro__titulo">
        "${livro.titulo}"
      </h2>
      <p class="livro__descricao">"${livro.autor}"</p>
      <p class="livro__preco" id="preco">"${livro.preco.toFixed(2)}"</p>
      <div class="tags">
        <span class="tag">Front-end</span>
      </div>
    </div>
    `;
  });
}

// function verificarDisponibilidadeDoLivro(livro) {
//   if (livro.quantidade > 0) {
//     return 'livro__imagens';
//   } else {
//     return 'livro__imagens indisponivel';
//   }
// }
