const camposDoFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const listaRespostas = {
    nome: e.target.elements["nome"].value,
    preco: e.target.elements["preco"].value,
    imagem: e.target.elements["imagem"].value,
  };

  localStorage.setItem("cadastro", JSON.stringify(listaRespostas));

  window.location.href = "index.html";
});

camposDoFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificaCampo(campo));
  campo.addEventListener("invalid", (evento) => evento.preventDefault());
});
const tiposDeErro = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort",
  "customError",
];

const mensagens = {
  nome: {
    valueMissing: "Preencha o campo Nome.",
    patternMismatch: "Insira um nome válido.",
    tooShort: "O nome deve ter no mínimo 3 caracteres.",
  },
  preco: {
    valueMissing: "Preencha o campo Preço.",
    typeMismatch: "Insira um valor de preço válido.",
    tooShort: "O preço deve ter no mínimo 4 caracteres.",
  },
  imagem: {
    valueMissing: "Preencha o campo URL da Imagem.",
    typeMismatch: "Insira uma URL válida.",
    customError: "A URL deve começar com 'https://'.",
  },
};

function verificaCampo(campo) {
  let mensagem = "";
  campo.setCustomValidity("");

  if (
    campo.name === "imagem" &&
    campo.value &&
    !campo.value.startsWith("https://")
  ) {
    campo.setCustomValidity(mensagens.image.customError);
  }

  tiposDeErro.forEach((erro) => {
    // Verifica se campo.validity está definido e se campo.validity[erro] é true
    if (campo.validity && campo.validity[erro]) {
      mensagem = mensagens[campo.name][erro] || "";
    }
  });

  const mensagemErro = campo.nextElementSibling;

  const validadorDeInput = campo.checkValidity();

  if (!validadorDeInput) {
    mensagemErro.textContent = mensagem;
    mensagemErro.classList.add("ativo"); // Adiciona uma classe para mostrar a mensagem de erro
  } else {
    mensagemErro.textContent = "";
    mensagemErro.classList.remove("ativo"); // Remove a classe para esconder a mensagem de erro
  }
}

