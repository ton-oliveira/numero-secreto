// let titulo = document.querySelector('h1');
// let paragrafo = document.querySelector('p');

// titulo.innerHTML = 'Jogo do Número Secreto';
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let numeroMaximo = 10;
let listaNumeroSorteado = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function textoNaPagina(tag, texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
    //responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate: 1.0});
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}


function mensagemInicial(){
    textoNaPagina('h1',"Jogo do Número Secreto");
    let msg = `Escolha um número entre 1 e ${numeroMaximo}`;
    textoNaPagina('p', msg);
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(numeroSecreto == chute){
        let palavra = tentativa > 1 ? "Tentativas" : "Tentativa";
        let mensagem = `Você descobriu o número Secreto com ${tentativa} ${palavra}.`;

        textoNaPagina('h1', "Parabéns, Você acertou!");
        textoNaPagina('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if (chute > numeroSecreto) {
            textoNaPagina('p', "O número é Menor");
        } else {
            textoNaPagina('p', "O número é Maior");
        }
        tentativa++;
        limparTela();
    };   
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let tamanhoLista = listaNumeroSorteado.length;

    if(tamanhoLista == numeroMaximo){
        listaNumeroSorteado = [];
    }
    if(listaNumeroSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    }else{
        listaNumeroSorteado.push(numeroEscolhido);
        console.log(listaNumeroSorteado);
        return numeroEscolhido;
    }
}

function limparTela(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciaJogo() {
    mensagemInicial();
    numeroSecreto = gerarNumeroAleatorio();
    limparTela();
    tentativa = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}

mensagemInicial();

