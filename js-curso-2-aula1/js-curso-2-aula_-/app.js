
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, Text) {
    let campo = document.querySelector(tag);
    campo.innerHTML = Text;
}

function mensagemInicial() {
exibirTextoNaTela("h1","Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;
        
    if ( chute == numeroSecreto) {
        exibirTextoNaTela("h1","Você acertou!");
        let palavraTentativa = tentativas > 1 ? " tentativas" : " tentativa";
        let mensagemTentativas = "Você acertou o número secreto com " + tentativas + palavraTentativa;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela("p", "Número secreto é menor!");
        } else {
            exibirTextoNaTela("p", "Número secreto é maior!");
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas++;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

