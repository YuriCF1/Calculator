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
        console.log('op');
        calcula(contaDisplay.innerHTML);
    });
});
var resultado;
const mostraDisplayAtual = (numeros) => {
    let escrito = contaDisplay.innerHTML += numeros;
    return escrito;
};
const calcula = (contaDis) => {
    let soNumeros = contaDis.slice(0, -1);
    mostraDisplyResult(soNumeros);
    let operador = contaDisplay.innerHTML;
    let openasOperador = operador.charAt(operador.length - 1);
    contaDisplay.innerHTML = openasOperador;
    RDisplay.innerHTML = 'Result';
};
const mostraDisplyResult = (ultimaConta) => {
    let result = eval(ultimaConta);
    resultado = result;
    console.log(result);
    resultadoDisplay.innerHTML = result;
};
