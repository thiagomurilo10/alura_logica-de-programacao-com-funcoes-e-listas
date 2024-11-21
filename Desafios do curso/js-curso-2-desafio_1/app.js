let titulo = document.querySelector('h1');

titulo.innerHTML = 'Hora do desafio';

function exibirConsole() {

    console.log('O botão foi clicado!');
}

function exibirAlerta() {

    alert('Eu amo JS!');
}

function exibirPrompt() {

    let cidade = prompt('Diga a cidade em que você mora: ');

    alert('Estive em ' + cidade + ' e lembrei de você');
}

function exibirSoma() {
    let valor1 = parseInt(prompt('Digite o primeiro valor: '));

    let valor2 = parseInt(prompt('Digite o segundo valor: '));

    let somaDosValores = valor1 + valor2;

    alert('A soma dos valores ' + valor1 + " e " + valor2 + " é igual a " + somaDosValores);
}