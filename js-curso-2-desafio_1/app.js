/*  // DESAFIO_01
//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio";

//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function pressConsole() {
    console.log("O botão foi clicado");
}

function pressAlert(){
    alert("Eu amo JS");
}

// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você
function pressPrompt() {
    let nameCity = prompt("Nome de uma cidade do Brasil?");
    alert(`Estive em ${nameCity} e lembrei de você`);
}

// Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function pressSoma(){
    let valor1 = parseInt(prompt("Inseria um valor inteiro:"));
    let valor2 = parseInt(prompt("Informe um número inteiro:"));
    let resultado = valor1 + valor2;
    alert("Resultado: " + resultado);
}*/

/*  // DESAFIO_02

// Criar uma função que exibe "Olá, mundo!" no console.
function HelloWorld() {
    console.log("Olá Mundo!");
}

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function HelloName(name){
    console.log(name);
}

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobreNumero(numero) {
    return numero * 2;
}
// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function mediaTres(n1, n2, n3) {
    return ((n1 + n2 + n3) / 3)
}

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function whoBigger(valor1, valor2){
    return valor1 > valor2 ? valor1: valor2;
}

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multValor(n3) {
    return n3 * n3;
}

HelloWorld();
HelloName('Ornitorrinco Saltitante');
console.log("Dobro é: " + dobreNumero(parseInt(Math.random() * 10 + 1)));
console.log("Média três: " + mediaTres(Math.random(), Math.random(), Math.random()));
console.log("O Maior é: "+ whoBigger(Math.random(), Math.random()));
console.log("A multiplicação é: " + multValor(Math.random()));*/

/*  // DESAFIO_03
// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, 
// a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function indiceMassaCorporal(altura, peso) {
    return peso / (altura * altura);
    
}
console.log("IMC " + indiceMassaCorporal(1.65, 62));

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
  
  // Exemplo de uso
  //let numero = 5;
  let test = 5;
  let resultado = calcularFatorial(test);
  console.log(`O fatorial de ${test} é ${resultado}`);

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. 
// Para isso, considere a cotação do dólar igual a R$4,80.
function converterDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
  }
  
  // Exemplo de uso
  let valorEmDolar = 50;
  let valorEmReais = converterDolarParaReal(valorEmDolar);
  console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calcularAreaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    
    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
  }
  
  // Exemplo de uso
  let altura = 3; // em metros
  let largura = 5; // em metros
  calcularAreaPerimetroSalaRetangular(altura, largura);
  

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calcularAreaPerimetroSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    
    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
  }
  
  // Exemplo de uso
  let raio = 4; // em metros
  calcularAreaPerimetroSalaCircular(raio);

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
  
  // Exemplo de uso
  let numero = 7;
  mostrarTabuada(numero);
*/
// DESAFIO-03
// Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];
// Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];
console.log(linguagensDeProgramacao);
// Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
linguagensDeProgramacao.push('Java', 'Ruby','GoLang');
console.log(linguagensDeProgramacao);


// Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
listaGenerica.push('SQL', 'Python', 'Scala');
console.log("Primeiro elemento: " + listaGenerica[0]);
// Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
console.log("Segundo elemento: " + listaGenerica[1]);
// Crie uma lista com 3 nomes e exiba no console apenas o último elemento
console.log("Terceiro elemento: " + listaGenerica[listaGenerica.length - 1]);