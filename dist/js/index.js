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
const calcula = (conta) => {
    let res = conta;
    let soN = res.slice(0, -1);
    console.log(soN);
    mostraDisplyResult(soN);
    let op = contaDisplay.innerHTML;
    let opOnly = op.charAt(op.length - 1);
    console.log(opOnly);
    contaDisplay.innerHTML = opOnly;
};
const mostraDisplyResult = (ultimaConta) => {
    let result = eval(ultimaConta);
    resultado = result;
    console.log(result);
    resultadoDisplay.innerHTML = result;
};
