/* DESAFIOS PARTE 2*/

/* 
Desafios

1- Criar uma função que exibe "Olá, mundo!" no console.

2- Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

3- Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

4- Criar uma função que recebe três números como parâmetros e retorna a média deles.

5- Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

6- Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
*/


// -----------------------------------------------------------------------

function olaMundo() {
    console.log('Olá, mundo!');
}

olaMundo(); // Testando a função olaMundo()

// ------------------- Atividade 1 concluída -----------------------------

function olaUsuario(nome) {
    console.log('Olá, ' + nome + "!");
}

// Testando a função olaUsuario()
/*
var nome = prompt('Qual é o seu nome?');
olaUsuario(nome); 
*/

// ------------------- Atividade 2 concluída -----------------------------

function dobrarNumero(numero) {
    let resultado = numero * 2; 
    return resultado;
}

// Testando a função dobrarNumero()
/*
let numero = prompt('Digite um número para ele ser dobrado');
let numeroDobrado = dobrarNumero(numero); 
console.log('O dobro do número ' + numero + ' é ' + numeroDobrado);
*/

// ------------------- Atividade 3 concluída -----------------------------

function retornaMedia(num1, num2, num3) { // essa função realiza a soma dos valores e retorna a média
    let media = (num1 + num2 + num3) / 3;
    return media;
}

// Testando a função retornaMedia()
/*
alert('Digite 3 números para ser realizada a média deles');

let numero1 = parseInt(prompt('Digite o primeiro número: '));
let numero2 = parseInt(prompt('Digite o segundo número: '));
let numero3 = parseInt(prompt('Digite o terceiro número: '));

let mediaDosValores = retornaMedia(numero1, numero2, numero3); 
console.log('A média dos valores é ' + mediaDosValores);
*/

// ------------------- Atividade 4 concluída -----------------------------

function maiorValor(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1){
        return num2;
    } else {
        return 0;
    }
}

// Testando a função maiorValor()
/*
alert('Vamos comparar valores!');
let primeiroNumero = parseInt(prompt('Digite o primeiro número: '));
let segundoNumero = parseInt(prompt('Digite o segundo número: '));

let maiorValorDosNumeros = maiorValor(primeiroNumero, segundoNumero);

if (maiorValorDosNumeros == 0) {
    alert('Ambos números são iguais.');
} else {
    alert('O maior número dos dois é o ' + maiorValorDosNumeros);
}
*/

// ------------------- Atividade 5 concluída -----------------------------

function multiplicacao(num1) {
    let resultado = num1 * num1;
    return resultado;
}

// Testando a função multiplicacao()
/*
alert('Vamos multiplicar o número por ele mesmo!');

let numeroEscolhido = parseInt(prompt('Digite o número'));

let resultado = multiplicacao(numeroEscolhido);

alert('O número ' + numeroEscolhido + ' multiplicado por ele mesmo é igual a ' + resultado);
*/

// ------------------- Atividade 6 concluída -----------------------------

