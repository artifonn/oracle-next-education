import { conectaAPI } from "../js/API_conect.js";

const formulario = document.querySelector("[data-formulario]");
const cards = document.querySelector("[data-card]");

async function novoCard(evento) {
  evento.preventDefault();

  const nome = document.querySelector("[data-nome]").value;
  const preco = document.querySelector("[data-preco]").value;
  const imagem = document.querySelector("[data-imagem]").value;

  try {
    await conectaAPI.novoGame(nome, preco, imagem);
    startGames(); // Recarregar os jogos para incluir o novo
    limparInputs(); // Limpar os campos do formulário após adicionar
  } catch (e) {
    console.error(e);
  }
}

formulario.addEventListener("submit", novoCard);

function constroiCard(id, nome, preco, imagem) {
  const game = document.createElement("li");
  game.className = "card";
  game.innerHTML = `
    <div class="card">
      <img class="image__card" src="${imagem}" alt="${nome}">
      <h1 class="nome__card">${nome}</h1>
      <div class="preco__card">
        <p>$ ${preco}</p>
        <img src="/icon _trash 2_.svg" alt="trash icon" class="icone__deletar" data-id="${id}">
      </div>
    </div>`;

  const deleteIcon = game.querySelector(".icone__deletar");
  deleteIcon.addEventListener("click", async () => {
    try {
      await conectaAPI.excluirGame(id);
      startGames(); // Recarregar os jogos após a exclusão
    } catch (e) {
      console.error(e);
    }
  });

  return game;
}

async function startGames() {
  cards.innerHTML = ""; // Limpa os cards existentes antes de carregar novos
  try {
    const listaApi = await conectaAPI.games();
    listaApi.forEach((item) =>
      cards.appendChild(
        constroiCard(item.id, item.nome, item.preco, item.imagem)
      )
    );
  } catch {
    cards.innerHTML = `<div class="formulario">
      <h1>Tente novamente</h1>
      <form class="formulario__container" data-formulario>
        <input data-nome type="text" placeholder="nome...">
        <input data-preco type="text" placeholder="valor...">
        <input data-imagem type="text" placeholder="imagem...">
        <div class="btn-formulario-container">
          <button type="submit" class="botao__submit" id="botao">Enviar</button>
          <button type="reset" class="botao__clean" id="botao"><span>Limpar</span></button>
        </div>
      </form>
    </div>`;
  }
}

function limparInputs() {
  document.querySelector("[data-nome]").value = "";
  document.querySelector("[data-preco]").value = "";
  document.querySelector("[data-imagem]").value = "";
}

startGames();
