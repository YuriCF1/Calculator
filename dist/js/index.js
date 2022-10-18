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
    let soNumeros = numerosDisplay.slice(0, -1);
    let result = eval(soNumeros);
    resultadoDisplay.innerHTML = result;
    resultado = result;
    console.log(resultado);
    let operador = contaDisplay.innerHTML;
    let openasOperador = operador.charAt(operador.length - 1);
    contaDisplay.innerHTML = openasOperador;
    let resultString = resultado.toString();
    let contaTotal = resultString.concat(soNumeros);
    console.log(contaTotal);
};
