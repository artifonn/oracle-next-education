function criptografar() {
  const textoParaCriptografar = document.getElementById('area__input').value;
  const chaveCifra = gerarChave();
  
  let textoCifrado = '';
  
  for (let i = 0; i < textoParaCriptografar.length; i++) {
    const caractereOriginal = textoParaCriptografar[i].toUpperCase();
    const caractereCifrado = chaveCifra[caractereOriginal] || caractereOriginal;
    textoCifrado += caractereCifrado;
  }
  
  exibirResultado(textoCifrado);
}

function gerarChave() {
  const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const alfabetoEmbaralhado = embaralharAlfabeto([...alfabeto]);
  const chaveEmbaralhada = {};

  for (let i = 0; i < alfabeto.length; i++) {
    chaveEmbaralhada[alfabeto[i]] = alfabetoEmbaralhado[i];
  }

  return chaveEmbaralhada;
}

function embaralharAlfabeto(arrayAlfabeto) {
  for (let i = arrayAlfabeto.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayAlfabeto[i], arrayAlfabeto[j]] = [arrayAlfabeto[j], arrayAlfabeto[i]];
  }

  return arrayAlfabeto;
}

function exibirResultado(textoCifrado) {
  if(textoCifrado !== '') {
    const area__texto = document.querySelector('.section__area__texto');
    const area__imagem = document.querySelector('.sectionn__area__retungulo__imagem');
    area__texto.style.display = 'none';
    area__imagem.style.display = 'none';

    const areaResultado = document.querySelector('.section__resultado');
    let teste = areaResultado.innerHTML = textoCifrado;

    const section__area__botao__copiar = document.querySelector('.section__area__botao__copiar');
    section__area__botao__copiar.style.display = 'flex';
  }
}


