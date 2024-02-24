const botao__criptografar = document.querySelector('.botao__criptografar');
const botao__descriptografar = document.querySelector('.botao__descriptografar');
const sectionn__area__retangulo__imagem = document.querySelector('.sectionn__area__retangulo__imagem');
const section__area__texto = document.querySelector('.section__area__texto');
const section__resultado = document.querySelector('.section__resultado');
const section__area__resultado = document.querySelector('.section__area__resultado');
const section__area__botao__copiar = document.querySelector('.section__area__botao__copiar');
const botao__copiar = document.querySelector('.copiar');
const botao__limpar = document.querySelector('.limpar');
const mensagem = 'Peço desculpas, parece que você não inseriu um texto para ser criptografado. Por favor, forneça o texto desejado, e ficarei feliz em ajudar com a criptografia.';

botao__criptografar.onclick = criptografarTexto;
botao__descriptografar.onclick = descriptografarTexto;
section__area__botao__copiar.onclick = copiar;
botao__limpar.onclick = limpar;

const chave = 'AluraOracle';

function criptografarTexto() {
  const textoParaCriptografar = document.querySelector('.area__input').value;
  if (textoParaCriptografar !== '') {
    const textoCriptografado = CryptoJS.AES.encrypt(textoParaCriptografar, chave);

    sectionn__area__retangulo__imagem.style.display = 'none';
    section__area__texto.style.display = 'none';
    section__area__resultado.style.height = '781px';
    
    section__resultado.innerHTML = textoCriptografado;
    botao__copiar.style.display = 'block';
    botao__limpar.style.display = 'none';
  } else {
    sectionn__area__retangulo__imagem.style.display = 'none';
    section__area__texto.style.display = 'none';
    section__area__resultado.style.height = '781px';
    section__resultado.innerHTML = mensagem;
    botao__limpar.style.display = 'block';
  }
}

function descriptografarTexto() {
  const textoParaDescriptografar = document.querySelector('.area__input').value;
  if (textoParaDescriptografar !== '') {
    const textoDescriptografado = CryptoJS.AES.decrypt(textoParaDescriptografar, chave).toString(CryptoJS.enc.Utf8);

    sectionn__area__retangulo__imagem.style.display = 'none';
    section__area__texto.style.display = 'none';
    
    section__area__resultado.style.height = '781px';
    section__resultado.innerHTML = textoDescriptografado;
    botao__copiar.style.display = 'none';
    botao__limpar.style.display = 'block';
  } else {
    sectionn__area__retangulo__imagem.style.display = 'none';
    section__area__texto.style.display = 'none';
    section__area__resultado.style.height = '781px';
    section__resultado.innerHTML = mensagem;
    botao__limpar.style.display = 'block';
  }
}

function copiar() {
  const textoCopiado = document.querySelector('.section__resultado').textContent;
  navigator.clipboard.writeText(textoCopiado);
}

function limpar() {
  const inputTexto = document.querySelector('.area__input');
  sectionn__area__retangulo__imagem.style.display = 'block';
  section__area__texto.style.display = 'block';
  section__resultado.innerHTML = '';
  section__area__resultado.style.height = '0px';
  botao__limpar.style.display = 'none';
  inputTexto.value = '';
}


