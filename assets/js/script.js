let valorInput = document.getElementById("valor");
let moedaOriginalOption = document.getElementById("moedaOriginalOption");
let moedaConvertidaOption = document.getElementById("moedaConvertidaOption");
let resultado = document.getElementById("resultado");
let buttonConverter = document.getElementById("buttonConverter");
let buttonLimpar = document.getElementById("buttonLimpar");

const taxasConversao = {
BRL: 1,
USD: 5.31,
EUR: 6.23,
GBP: 7.26
};

function mensagemResposta(valorConvertido, moedaOriginal, moedaConvertida) {
const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: moedaConvertida });
const valorFormatado = formatter.format(valorConvertido);
  
// Substituir a representação da moeda original
let moedaOriginalTexto = moedaOriginal;
if (moedaOriginal === 'BRL') {
moedaOriginalTexto = 'R$';
}
  
resultado.textContent = `${valorInput.value} ${moedaOriginalTexto} é equivalente a ${valorFormatado}`;
}
  

function converterMoeda(event) {
event.preventDefault();
const valor = parseFloat(valorInput.value);
const moedaOriginal = moedaOriginalOption.value;
const moedaConvertida = moedaConvertidaOption.value;

if (moedaOriginal === "Escolha" || moedaConvertida === "Escolha") {
resultado.textContent = "Escolha uma moeda válida";
return;
}

if (isNaN(valor)) { 
resultado.textContent = "Insira um numero válido";
return;
}


const valorConvertido = valor / taxasConversao[moedaOriginal] * taxasConversao[moedaConvertida];
mensagemResposta(valorConvertido, moedaOriginal, moedaConvertida);
}

buttonConverter.addEventListener("click", converterMoeda);

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

function gerarCor(){
let rColor = redColor.value;
let gColor = greenColor.value;
let bColor = blueColor.value;


let corFinal = `rgb(${rColor}, ${gColor}, ${bColor} )`;
resultadoRGB.value = corFinal;
document.body.style.backgroundColor = corFinal;
}

function copiarCodidoRGB(event){
event.preventDefault();
resultadoRGB.select();
document.execCommand("copy");
setInterval (() => {
buttonCopiar.innerText = "Copiar Codigo RGB";
}, 1000);
}

rangers.forEach((inputs) => {
inputs.addEventListener("input", gerarCor)
});

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

