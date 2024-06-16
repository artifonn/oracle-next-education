const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtaraLivros));

// btnFiltaraLivrosDeFront.addEventListener('click', filtaraLivros);

function filtaraLivros() {
  const elementoBtn = document.getElementById(this.id);
  const categoria = elementoBtn.value;
  
  let livrosFiltrados =  categoria ==  'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);

  exibirLivrosNaTela(livrosFiltrados);
  if(categoria == 'disponivel') {
    const valorTotal = alcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
    console.log(valorTotal);
    exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
  }
}

function filtrarPorCategoria(categoria) {
  return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
  return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
  <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
  `
}

