let listaDeNumerosSortedos = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exbirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exbirTextoNaTela('h1', 'Jogo do número secreto');
    exbirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto) {
        exbirTextoNaTela('h1', 'Acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto! com ${tentativas} ${palavraTentativa}!`
        exbirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

} else if (chute > numeroSecreto){
        exbirTextoNaTela('p', 'O número secreto é menor');
    } else {
        exbirTextoNaTela('p', 'O número secreto é maior')
    }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSortedos.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSortedos = [];
    }

   if (listaDeNumerosSortedos.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
   } else {
    listaDeNumerosSortedos.push(numeroEscolhido);
    console.log(listaDeNumerosSortedos);
    return numeroEscolhido;
   }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled',true)
}