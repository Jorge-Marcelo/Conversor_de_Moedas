/*
Autor: Jorge Marcelo
Data de Criação: 11/08/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/ 

/*Pegando os elementos HTML usando o DOM*/
let valorInput = document.getElementById("valor");
let moedaOriginalOption = document.getElementById("moedaOriginalOption");
let moedaConvertidaOption = document.getElementById("moedaConvertidaOption");
let resultado = document.getElementById("resultado");
let buttonConverter = document.getElementById("buttonConverter");
let buttonLimpar = document.getElementById("buttonLimpar");

/*Objeto com as taxas da conversão*/
const taxasConversao = {
BRL: 1,
USD: 5.31,
EUR: 6.23,
GBP: 7.26
};

/*Função que cria a mensagem no HTML ja formtando para o valor monetario*/
function mensagemResposta(valorConvertido, moedaOriginal, moedaConvertida) {
const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: moedaConvertida });
const valorFormatado = formatter.format(valorConvertido);
  
// Substituir a representação da moeda para o R$
let moedaOriginalTexto = moedaOriginal;
if (moedaOriginal === 'BRL') {
moedaOriginalTexto = 'R$';
}

/*Mostrando a mensagem na tela*/
resultado.textContent = `${valorInput.value} ${moedaOriginalTexto} é equivalente a ${valorFormatado}`;
}
  
/*Adicionando o valor das variaveis nos inputs*/
function converterMoeda(event) {
event.preventDefault();
const valor = parseFloat(valorInput.value);
const moedaOriginal = moedaOriginalOption.value;
const moedaConvertida = moedaConvertidaOption.value;

/*Mensagem de erro caso nenhuma moeda seja selecionada*/
if (moedaOriginal === "Escolha" || moedaConvertida === "Escolha") {
resultado.textContent = "Escolha uma moeda válida";
return;
}

/*Menagem caso o valor do input text não seja um numero*/
if (isNaN(valor)) { 
resultado.textContent = "Insira um numero válido";
return;
}

/*Calcula o valor com base nas taxas de conversão*/
const valorConvertido = valor / taxasConversao[moedaOriginal] * taxasConversao[moedaConvertida];
mensagemResposta(valorConvertido, moedaOriginal, moedaConvertida);
}

/*Escutador de evento que vai realizar a conversão*/
buttonConverter.addEventListener("click", converterMoeda);

/*Escutador de eventos que vai limpar todos os campos*/
buttonLimpar.addEventListener("click", function (event) {
event.preventDefault();
valorInput.value = "";
moedaOriginalOption.selectedIndex = 0;
moedaConvertidaOption.selectedIndex = 0;
resultado.textContent = "";
});

/*Mudar cor pelo range RGB*/
const resultadoRGB =  document.querySelector(".resultadoRGB input");
const buttonCopiar = document.getElementById("copiar");
const rangers = document.querySelectorAll(".rangers input[type='range']");
const redColor = document.getElementById("red");
const greenColor = document.getElementById("green");
const blueColor = document.getElementById("blue");

/*Função que vai gerar a cor*/
function gerarCor(){
let rColor = redColor.value;
let gColor = greenColor.value;
let bColor = blueColor.value;

/*Juntando o RGB e formando uma cor*/
let corFinal = `rgb(${rColor}, ${gColor}, ${bColor} )`;
resultadoRGB.value = corFinal;
document.body.style.backgroundColor = corFinal;
}

/*Função que vai copiar o codigo RGB*/
function copiarCodidoRGB(event){
event.preventDefault();
resultadoRGB.select();
document.execCommand("copy");
setInterval (() => {
buttonCopiar.innerText = "Copiar Codigo RGB";
}, 1000);
}

/*Percorrer por todos inputs de range para formar o RGB*/
rangers.forEach((inputs) => {
inputs.addEventListener("input", gerarCor)
});

/*Escutadores de eventos que vão carregar a cor e copiar o codigo RGB*/
window.addEventListener("load", gerarCor);
buttonCopiar.addEventListener("click", copiarCodidoRGB);


/*Redes Sociais*/

/*Função que vai abrir o link do instagram*/
const instgramLink = "https://www.instagram.com/10_stronger/";
const instagramButton = document.getElementById("instagram");

function instagram(instgramLink){
const newTableInstagram = window.open(instgramLink, "_blank");
newTableInstagram.focus();
}

instagramButton.addEventListener("click", function(){
instagram(instgramLink);
})

/*Função que vai abrir o link do Threads*/
const threadsLink = "https://www.threads.net/@10_stronger";
const threadsButton = document.getElementById("threads");

function threads(threadsLink){
const newTableThreads = window.open(threadsLink, "_blank");
newTableThreads.focus();
}

threadsButton.addEventListener("click", function(){
threads(threadsLink);
})


/*Função que vai abrir o link do linkedin*/
const linkedinLink = "https://www.linkedin.com/in/jorge-marcelo-067a5017b/";
const linkedinButton = document.getElementById("linkedin");

function linkedin(linkedinLink){
const newTableLinkedin = window.open(linkedinLink, "_blank");
newTableLinkedin.focus();
}

linkedinButton.addEventListener("click", function(){
linkedin(linkedinLink);    
})


/*Função que vai abrir o link do Github*/
const githubLink = "https://github.com/Jorge-Marcelo";
const githubButton = document.getElementById("github");

function github(githubLink){
const newTableGithub = window.open(githubLink, "_blank");
newTableGithub.focus();
}

githubButton.addEventListener("click", function(){
github(githubLink);
})

