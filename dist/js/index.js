"use strict";
const numeros = document.querySelectorAll('.buttons-n');
const operadores = document.querySelectorAll('.buttons-o');
const botoes = document.querySelectorAll('button');
const resultadoDisplay = document.getElementById('calc');
const contaDisplay = document.getElementById('currentDisplay');
const RDisplay = document.getElementById('result');
botoes.forEach((num) => {
    num.addEventListener('click', (e) => {
        let target = e.target;
        let numeroTecla = target.dataset.int;
        mostraDisplayAtual(numeroTecla);
    });
});
operadores.forEach((op) => {
    op.addEventListener('click', (e) => {
        calcula(contaDisplay.innerHTML);
    });
});
var resultado;
const mostraDisplayAtual = (numeros) => {
    let escrito = contaDisplay.innerHTML += numeros;
    return escrito;
};
const calcula = (contaDis) => {
    mostraDisplyResult(contaDis);
};
const mostraDisplyResult = (numerosDisplay = '0', resultDisplay = '') => {
    let numerosOP = numerosDisplay;
    console.log(numerosOP);
    let soNumeros = numerosDisplay.slice(0, -1);
    let result = eval(soNumeros);
    let concatenando = soNumeros.concat(numerosOP);
    console.log(concatenando);
    let operador = contaDisplay.innerHTML;
    let openasOperador = operador.charAt(operador.length - 1);
    contaDisplay.innerHTML = openasOperador;
    resultado = result;
    console.log(resultado);
    let resultString = resultado.toString() + openasOperador;
    let contaTotal = resultString.concat(numerosOP);
    console.log(contaTotal);
    resultadoDisplay.innerHTML = result;
};
